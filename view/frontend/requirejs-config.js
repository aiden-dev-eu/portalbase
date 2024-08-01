var config = {
    paths: {
        vue : 'Aiden_PortalBase/js/framework/vue.global.prod',
        regenerator: 'Aiden_PortalBase/js/framework/regenerator-runtime.min',
        vuecomponent_datepicker: 'Aiden_PortalBase/js/components/vue-datepicker.iife',
        vuecomponent_multiselect: 'Aiden_PortalBase/js/components/vueform-multiselect',
        vuecomponent_popper: 'Aiden_PortalBase/js/components/vue-popper.min'
    },
    map: {
        '*': {
            portal_utils: 'Aiden_PortalBase/js/utils/utils',
            portal_api: 'Aiden_PortalBase/js/utils/api',
            portal_pagination: 'Aiden_PortalBase/js/components/pagination',
            portal_message: 'Aiden_PortalBase/js/utils/message'
        }
    },
    shim: {
        vue : {
            exports: 'Vue'
        },
        vuecomponent_datepicker: {
            deps: ['vue'],
            exports: 'VueDatePicker'
        },
        vuecomponent_multiselect: {
            deps: ['vue'],
            exports: 'VueformMultiselect'
        },
        vuecomponent_popper: {
            deps: ['vue', 'regenerator'],
            exports: 'Popper'
        },
        regenerator: {
            exports: 'runtime'
        }
    }
};
