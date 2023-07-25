// ==UserScript==
// @name         Twitter Junk-be-gone
// @version      1
// @description  Removes unnecessary sidebar tabs
// @author       You
// @match        https://twitter.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=twitter.com
// @grant        none
// ==/UserScript==

(function() {
    function determineComma(numArray, num){ return num == numArray.length - 1 ? "\n" : "," }
    function selectorConcatenate(styleBody, baseSelector, elemName, endDetermine){
        return styleBody + baseSelector + elemName + '"]' + endDetermine;
    }
    var baseStyleSelector = 'nav[aria-label="Primary"] a[aria-label="';
    var targElem = document.getElementsByTagName("head")[0];

    var styleElem = document.createElement("style");

    let stylesList = [
        "Lists",
        "Bookmarks",
        "Communities",
        "Verified"
    ]
    let styleBody = "";
    for(let i = 0; i < stylesList.length; i++){ styleBody = selectorConcatenate(
        styleBody,
        baseStyleSelector,
        stylesList[i],
        determineComma(stylesList, i)
    ) };
    styleElem.innerText = styleBody;
    targElem.appendChild(styleElem);
})();
