$(function () {
    var pages = $("[data-page]");
    $.each(pages, function () {
        var file = $(this).data("page") + ".html";
        $(this).load(file);
    });
});