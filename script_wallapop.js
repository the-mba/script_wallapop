// ==UserScript==
// @name         Wallapop sin favoritos (marco como favoritos los anuncios que ya he visto)
// @namespace    http://tampermonkey.net/
// @version      2024-02-13
// @description  try to take over the world!
// @author       You
// @match        https://es.wallapop.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=bing.com
// @grant        none
// @require https://code.jquery.com/jquery-3.6.0.min.js
// ==/UserScript==

/* global $ */

function aaaaa() {
    $(".ItemCardList__item.ng-star-inserted").each(function() {
        if ($(this).html().includes("#FF5550")) {
            $(this).hide();
        }
        console.log($(this).html());
    });
    setTimeout(aaaaa, 100);
}

aaaaa();