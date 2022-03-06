function normalizeSlideHeights() {
    $('.carousel').each(function() {
        var items = $('.carousel-item', this);
        // reset the height
        items.css('height', 'auto');
        // set the height
        var maxHeight = Math.max.apply(null,
            items.map(function() {
                return $(this).outerHeight()
            }).get());
        items.css('height', maxHeight + 'px');
    })
}


$(window).on(
    'load resize orientationchange',
    normalizeSlideHeights
);