
function removeAds(){
    let spans = document.getElementsByTagName("span");

    for(span of spans){
        if(span.textContent === "promoted"){
            let parentDiv = findParentDivWithEmptyStyle(span);
            if(parentDiv){
                parentDiv.setattribute("style", "display: none !important;");
            }
        }
    }
}


function findParentDivWithEmptyStyle(spanElement) {
    let currentElement = spanElement.parentElement;

    // Continue traversing parent elements until a div with an empty style is found
    while (currentElement && !(currentElement.tagName === 'DIV' && currentElement.style.cssText === '')) {
        currentElement = currentElement.parentElement;
    }

    // Check if the found element is a div with an empty style
    if (currentElement && currentElement.tagName === 'DIV' && currentElement.style.cssText === '') {
        return currentElement;
    } else {
        return false;
    }
}