$(function () {
    var pages = $("[data-page]");
    $.each(pages, function () {
        var file = $(this).data("page") + ".html";
        $(this).load(file);
    });
});

var box = $('#box');

$('button').on('click', function () {
  box.toggleClass('hidden');
});

var checkBox = document.getElementById("checkbox");
var sideBar = document.getElementById("sidebar");
var overlay = document.getElementById("overlay");
if (checkBox.checked){
    sideBar.style.left = 0;
    overlay.style.display= "block";
}