jQuery(document).ready(function() {
    jQuery('.about').addClass("myHidden").viewportChecker({
        classToAdd: 'myVisible animated slideInLeft',
        offset: 250
    });

    jQuery('.dignity').addClass("myHidden").viewportChecker({
        classToAdd: 'myVisible animated slideInRight',
        offset: 250
    });

    jQuery('.screenshots').addClass("myHidden").viewportChecker({
        classToAdd: 'myVisible animated fadeIn',
        offset: 250
    });

    jQuery('.reviewsUnit-top').addClass("myHidden").viewportChecker({
        classToAdd: 'myVisible animated slideInRight',
        offset: 250
    });

    jQuery('.reviewsUnit-bottom').addClass("myHidden").viewportChecker({
        classToAdd: 'myVisible animated slideInLeft',
        offset: 250
    });

    jQuery('.buyNowCard').addClass("myHidden").viewportChecker({
        classToAdd: 'myVisible animated rollIn',
        offset: 250
    });

    jQuery('footer').addClass("myHidden").viewportChecker({
        classToAdd: 'myVisible animated zoomInUp',
        offset: 250
    });
});