jQuery(document).ready(function() {
    jQuery('.about').addClass("myHidden").viewportChecker({
        classToAdd: 'myVisible animated slideInLeft',
        repeat: true,
        offset: 100
    });

    jQuery('.dignity').addClass("myHidden").viewportChecker({
        classToAdd: 'myVisible animated slideInRight',
        repeat: true,
        offset: 100
    });

    jQuery('.screenshots').addClass("myHidden").viewportChecker({
        classToAdd: 'myVisible animated fadeIn',
        repeat: true,
        offset: 100
    });

    jQuery('.reviewsUnit-top').addClass("myHidden").viewportChecker({
        classToAdd: 'myVisible animated slideInRight',
        repeat: true,
        offset: 100
    });

    jQuery('.reviewsUnit-bottom').addClass("myHidden").viewportChecker({
        classToAdd: 'myVisible animated slideInLeft',
        repeat: true,
        offset: 100
    });

    jQuery('.buyNowCard').addClass("myHidden").viewportChecker({
        classToAdd: 'myVisible animated rollIn',
        repeat: true,
        offset: 100
    });

    jQuery('footer').addClass("myHidden").viewportChecker({
        classToAdd: 'myVisible animated zoomIn',
        repeat: true,
        offset: 100
    });
});