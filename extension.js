browser.webNavigation.onCompleted.addListener(function (tab) {

    if (tab.frameId == 0) {
        browser.tabs.query({ active: true, lastFocusedWindow: true }, tabs => {
            let url = tabs[0].url;
            if (url.includes("reddit.com")) {
                browser.tabs.executeScript({ file: "reddit.js" });
            }
        });
    }
});
console.log("background.js loaded");