export default class Base_PO{
    open(url){
        browser.setWindowSize(1800, 1200);
        browser.url(url);
    }

    waitUsingFixedTimeout(time) {
        console.log("Pausing for: " + time + " seconds.");
        browser.pause(time);
    }
}
