/** Collection of general useful functions for the Portal
 *
 * @copyright Aiden. All rights reserved.
 * https://www.aiden.eu
 * @author tjanssen
 * @version 2021.06.08.0
 *
 */

define(['Magento_Customer/js/customer-data'], function (customerData) {
    'use strict';
    return {
        setErrorMessage: function (message) {
            this.setMessage(message, 'error');
        },
        setSuccessMessage: function (message) {
            this.setMessage(message, 'success');
        },
        setWarningMessage: function (message) {
            this.setMessage(message,'warning');
        },
        setMessage: function (message, type) {
            let customerMessages = customerData.get('messages')() || {};
            let messages = customerMessages.messages || [];

            messages.push({
                'text': message,
                'type': type
            });

            customerMessages.messages = messages;
            customerData.set('messages', customerMessages);

            // auto-delete messages after timeout
            setTimeout(() => {
                // we can't just assume/delete the newly added index, as the entire customerData.messages object is reset
                // other new messages might have been added in the meantime

                // get, then set, all customerData messages AGAIN
                let customerMessages = customerData.get('messages')() || {};
                let messages = customerMessages.messages || [];

                const iCurrentMessageIndex = messages.findIndex(x => x.text === message);
                if (iCurrentMessageIndex >= 0) {
                    // console.log('deleting matching message at index #' + iCurrentMessageIndex);
                    messages.splice(iCurrentMessageIndex, 1);
                    customerMessages.messages = messages;
                    customerData.set('messages', customerMessages);
                } else {
                    console.log('No matching message found in customerData');
                }
            }, 5000);
        }
    };
});
