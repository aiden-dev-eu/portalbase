/** Collection of general useful functions for the Portal
 *
 * @copyright Aiden. All rights reserved.
 * https://www.aiden.eu
 * @author tjanssen
 * @version 2021.06.08.0
 *
 */

define(
    [
        'underscore',
        'Magento_Catalog/js/price-utils',
        'mage/url'
    ],
    function (
        _,
        priceUtils,
        urlBuilder
    ) {
        'use strict';
        return {
            /** Returns a sliced array of correct range for pagination
             * @param data Data to paginate
             * @param page Current page
             * @param limit Row limit
             */
            paginate: function (data, page, limit) {
                let to = (page * limit);
                let from = to - limit;
                return data.slice(from, to);
            },
            /**
             * Calculates an array of pagenumbers for pagination
             * @param {int} dataLength Length of data to paginate
             * @param {int} limit Row limit
             * @return {array} pagenumbers
             */
            setPages: function (dataLength, limit) {
                if (limit === 0) {
                    return [];
                }
                let numberOfPages = Math.ceil(dataLength / (limit ? limit : 1));
                let pages = [];
                for (let index = 1; index <= numberOfPages; index++) {
                    pages.push(index);
                }
                return pages;
            },
            /** Groups an array of data into sub arrays defined by a key value.
             * @param {Object} data Data to group
             * @param {string} key Key value to group by
             */
            groupBy: function (data, key) {
                let result = {};
                _.forEach(data, function (item) {
                    let group = item[key];
                    if (!result[group]) {
                        result[group] = [];
                    }
                    result[group].push(item);
                });
                return result;
            },
            /** Converts an object into an array
             * @param {Object} object
             */
            toArray: function (object) {
                let result = [];
                _.forEach(object, function (item) {
                    result.push(item);
                });
                return result;
            },
            /** Converts an object with sub arrays into an usable object
             * @param {Object} object
             */
            map: function (object) {
                let result = {};
                _.forEach(object, function (item) {
                    _.defaults(result, item);
                });
                return result;
            },
            /** Checks if an object has values
             * @param {Object} object
             */
            hasValues: function (object) {
                let self = this;
                _.map(object, function (val) {
                    if (!self.isEmpty(val)) {
                        return false;
                    }
                });
                return true;
            },
            /** Checks if a string is empty
             * @param {string} value
             */
            isEmpty: function (value) {
                return (!value || value.length === 0);
            },
            /** Sets top message
             * @param {Object} messages Message object from page
             * @param {string} type Type of message
             * @param {string} message Message
             */
            setTopMessage: function (messages, type, message) {
                messages[type] = message;
                window.scrollTo(0,0);
            },
            /** Converts string date to 1 consistent format
             * @param {string} sDate Message
             */
            processDate: function (sDate) {
                if (Date.parse(sDate)) {
                    const oDate = new Date(sDate);
                    return oDate.toLocaleDateString('nl-NL');
                }
                return sDate;
            },
            /**
             * Converts int/float/string to 1 consistent price format
             * @param {string} valueAmount Amount
             * @param {string} currencySymbol currency sign/prefix
             */
            moneyAmount: function (valueAmount, currencySymbol) {
                const globalPriceFormat = {
                    /* overriding decimal format to European, to ensure thousands-separator */
                    decimalSymbol: ',',
                    groupSymbol: '.',
                    groupLength: 3
                };
                return currencySymbol + priceUtils.formatPrice(valueAmount, globalPriceFormat);
            },
            processDateToString: function (dateObject) {
                if (dateObject instanceof Date) {
                    return dateObject.toJSON().substring(0,10);
                }
                console.warn('invalid date object given');
            },
            navigateToPath: function (path) {
                window.location.href = urlBuilder.build(path);
            },
            calculateTotal: function (data, fieldName, currencySymbol) {
                return this.moneyAmount(data.reduce(function (a, b) {
                    return a + b[fieldName];
                }, 0), currencySymbol);
            },
            parseActions: function (actions) {
                let assocActions = [];
                if (!actions) {
                    return assocActions;
                }
                actions.forEach(function (element) {
                    assocActions[element.name] = element.visible;
                });
                return assocActions;
            },
            setPageTitle: function (title) {
                document.title = title;
            },
            filterArray: function (dataArray, searchTerm) {
                if (!searchTerm || !dataArray || dataArray.length === 0) {
                   return dataArray;
                }
                const filter = searchTerm.trim().toLowerCase();
                return dataArray.filter(
                    obj => Object.values(obj).some(
                        val => String(!val ? '' : val).toLowerCase().includes(filter)
                    )
                );
            },
            checkPageLimit: function (page, totalRecords, limit) {
                let pages = this.setPages(totalRecords, limit);
                return (pages.length < page ? 1 : page);
            }
        };
    }
);
