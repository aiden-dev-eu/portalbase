require(['jquery'], function ($) {
    $(document).ready(function () {

        const pageHeaderPanel = document.querySelector('.panel.wrapper').getBoundingClientRect().height,
            pageHeaderContent = document.querySelector('.header-content-wrapper').getBoundingClientRect().height,
            pageNavigation = document.querySelector('.sections.nav-sections').getBoundingClientRect().height,
            footer = document.querySelector('footer.page-footer').getBoundingClientRect().height,
            copyright = document.querySelector('small.copyright').getBoundingClientRect().height,
            customContentElement = document.querySelector('.column.main'),
            pageWrapperHeight = document.querySelector('.page-wrapper').getBoundingClientRect().height;

        let windowHeight = window.innerHeight,
            compensationHeight = pageHeaderPanel + pageHeaderContent + pageNavigation + footer + copyright;

        function setMinimalContentHeight() {
            if (window.innerWidth > 767 && pageWrapperHeight > windowHeight) {
                customContentElement.style.minHeight = pageWrapperHeight - compensationHeight + "px";
            } else if (window.innerWidth > 767 ) {
                customContentElement.style.minHeight = windowHeight - compensationHeight + "px";
            } else {
                customContentElement.style.minHeight = 'unset';
            }
        }

        setMinimalContentHeight();

        // on window resize function
        addEventListener("resize", (event) => {
            windowHeight = window.innerHeight;
            window.setTimeout(function() {
                setMinimalContentHeight();
            }, 70);
        });
    });
});
