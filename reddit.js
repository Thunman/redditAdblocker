
function removeAds() {
    let spans = document.getElementsByTagName("span");

    for (span of spans) {
        if (span.textContent === "promoted") {
            console.log("found promoted");
            let card = span.parentNode.parentNode.parentNode.parentNode;
            card.remove();
        }
    }
}

console.log("loaded");
removeAds();
setInterval(removeAds, 100);