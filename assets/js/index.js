
$(document).ready(function () {
    if (!window.matchMedia)
        return;

    var current = $('head > link[rel="icon"][media]');
    $.each(current, function (i, icon) {
        var match = window.matchMedia(icon.media);
        function swap() {
            if (match.matches) {
                current.remove();
                current = $(icon).appendTo('head');
            }
        }
        match.addListener(swap);
        swap();
    });

    /*  
     * Toggles the menu
     * TODO: Convert it to JQuery
     */

    const burgerButton = document.getElementById("hamburger")
    const menu = document.getElementById("small-menu")
    const listener = _ => {
        menu.classList.toggle("tw__hidden")
        Array.from(burgerButton.getElementsByClassName("nav"))
            .forEach(el => el.classList.toggle("tw__hidden"))
    }

    burgerButton?.addEventListener("click", listener)
    menu?.addEventListener("click", listener)

});