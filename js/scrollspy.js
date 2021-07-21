document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.scrollspy');
    var instances = M.ScrollSpy.init(elems, options);
    var instance = M.ScrollSpy.getInstance(elem);
});

// Or with jQuery

$(document).ready(function () {
    $('.scrollspy').scrollSpy({
        scrollOffst: 0
    });
});

