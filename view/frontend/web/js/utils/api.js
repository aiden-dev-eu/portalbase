/** Collection of functions to retrieve data from the API, show loader, display messages and download interface.
 *
 * @copyright Aiden. All rights reserved.
 * https://www.aiden.eu
 * @author tjanssen
 * @version 2021.06.08.0
 *
 */

define(
    [
        'mage/storage',
        'portal_utils',
        'require',
        'jquery',
        'loader',
        'mage/translate',
        'portal_message',
        'mage/url',
        'underscore'
    ], function (
        storage,
        utils,
        require,
        $,
        loader,
        $t,
        message,
        urlBuilder,
        _
    ) {
        'use strict';
        return {
            /** Get from Portal API
             * @param {string} url Url for GET request
             * @param {string} selector Jquery selector
             */
            get: function (url, selector) {
                let self = this;
                self.startLoader(selector);
                return storage.get(url)
                    .fail(function (jqXHR) {
                        self.processFailedCall(jqXHR, selector);
                    })
                    .always(function () {
                        self.stopLoader(selector);
                    });
            },
            /** POST to Portal API
             * @param {string} url Url for POST request
             * @param {Object} params Parameters for POST request
             * @param {string} selector Jquery selector
             */
            post: function (url, params, selector) {
                let self = this;
                self.startLoader(selector);
                return storage.post(url, JSON.stringify(params))
                    .fail(function (jqXHR) {
                        self.processFailedCall(jqXHR, selector);
                    })
                    .done(function (jqXHR) {
                            // this 'done' callback will be overwritten in most cases
                            $(selector).trigger('postCallSuccess');
                        }
                    )
                    .always(function () {
                        self.stopLoader(selector);
                        setTimeout(function () {
                                $(window).trigger('postCallComplete');
                            }, 10
                        );
                    });
            },
            /** Get document PDF from SAP server
             * @param {string} url Url for PDF download request
             * @param {Object} params Parameters containing pdf filename
             * @param {string} selector Jquery selector
             */
            pdf: function (url, params, selector) {
                let self = this;
                return this.post(url, params, selector)
                    .done (function (data) {
                        self.createDownloadWindow( data );
                    });
            },
            /** Get data as Excel XML download
             * @param {string} filename for Download
             * @param {Object} data to be converted to Excel XML
             */
            xml: function (filename, data) {
                this.exportFile('rest/V1/portal/export/xml', filename, data);
            },
            /**
             * Get data as CSV download
             * @param {string} filename for Download
             * @param {Object} data to be converted to CSV
             */
            csv: function (filename, data) {
                this.exportFile('rest/V1/portal/export/csv', filename, data);
            },
            /** Get data as file download
             * @param {string} baseUrl of controller
             * @param {string} filename for Download
             * @param {Object} data to be converted to CSV
             */
            exportFile: function (baseUrl, filename, data) {
                this.post(baseUrl, {request: {export_data : data, file_name: filename}}, null).done(function (result) {
                    window.location.replace(result);
                });
            },
            /** Processes failed call into either error message or redirect ot login.
             * @param {Object} jqXHR Return object from API call
             * @param {string} selector Jquery selector
             */
            processFailedCall: function (jqXHR, selector) {
                message.setErrorMessage(this.translateApiMessage(jqXHR));
                if (jqXHR.status === 401) {
                    this.redirectToLogin();
                }
                $(selector).trigger('postCallFailed');
            },
            /** Redirects to login page with current url as referer so user return to this page after login. */
            redirectToLogin: function () {
                let referer = btoa(window.location.href);
                let url = urlBuilder.build('customer/account/login/referer/' + referer);
                window.location.replace(url);
            },
            /** Converts error message from API into readable and translated message.
             * @param {Object} jqXHR Return object from API call
             */
            translateApiMessage: function (jqXHR) {
                if (jqXHR.responseJSON) {
                    let text = $t(jqXHR.responseJSON.message);
                    _.map(jqXHR.responseJSON.parameters, function (val, key) {
                        text = text.replace(('%' + key), val);
                    });
                    return text;
                }
                return jqXHR.responseText;
            },
            /** Enables a loading mask and spinner on a html object defined by the selector
             * @param {string} selector Jquery selector
             */
            startLoader: function (selector) {
                $(selector).loader({icon: require.toUrl('images/loader-2.gif')}).trigger('processStart');
            },
            /**
             * Ends a loading mask and spinner on a html object defined by the selector
             * @param {string} selector Jquery selector
             */
            stopLoader: function (selector) {
                $(selector).trigger('processStop');
            },
            /** Creates a file save UI for the user to save the request file
             * @param {Object} file Returned object from API call
             */
            createDownloadWindow: function (file) {
                if (file && file.content_type && file.file_name) {

                    let a = document.createElement('a');
                    document.body.appendChild(a);
                    a.style = 'display: none';

                    let byteChars = atob(file.file_content);
                    let byteNumbers = new Array(byteChars.length);
                    for (let i = 0; i < byteChars.length; i++) {
                        byteNumbers[i] = byteChars.charCodeAt(i);
                    }
                    let byteArray = new Uint8Array(byteNumbers);

                    let blob = new Blob([byteArray], {type: file.content_type});
                    let url = window.URL.createObjectURL(blob);

                    a.href = url;
                    a.download = file.file_name;
                    a.click();
                    window.URL.revokeObjectURL(url);
                } else {
                    console.warn('invalid file argument: ', file);
                }
            },
            buildApiRequestObject: function (
                fromDate,
                toDate,
                searchTerm,
                rows,
                offset
            ) {
                return {
                    fromDate: fromDate,
                    toDate: toDate,
                    searchTerm: searchTerm,
                    rows: rows,
                    offset: offset
                };
             }
        };
    }
);
