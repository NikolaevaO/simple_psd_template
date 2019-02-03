jQuery(document).ready(function() {
    jQuery('.about').addClass("myHidden").viewportChecker({
        classToAdd: 'myVisible animated slideInLeft',
        offset: 300
    });

    jQuery('.dignity').addClass("myHidden").viewportChecker({
        classToAdd: 'myVisible animated slideInRight',
        offset: 300
    });

    jQuery('.screenshots').addClass("myHidden").viewportChecker({
        classToAdd: 'myVisible animated fadeIn',
        offset: 300
    });

    jQuery('.reviewsUnit').addClass("myHidden").viewportChecker({
        classToAdd: 'myVisible animated slideInRight',
        offset: 300
    });

    jQuery('.buyNowCard').addClass("myHidden").viewportChecker({
        classToAdd: 'myVisible animated rollIn',
        offset: 300
    });

    jQuery('footer').addClass("myHidden").viewportChecker({
        classToAdd: 'myVisible animated zoomInUp',
        offset: 300
    });
});