/*

loadJS - Scripting loading function

Load scripts on the code to unnecessary loading

 */

var loadJS = function(url, callback, location){
    //url is URL of external file, implementationCode is the code
    //to be called from the file, location is the location to
    //insert the <script> element

    var scriptTag = document.createElement('script');
    scriptTag.src = url;

    scriptTag.onload = callback;
    scriptTag.onreadystatechange = callback;

    location.appendChild(scriptTag);
};

// jquery dependency load
loadJS("http://code.jquery.com/jquery-1.9.1.min.js", () =>
{
    // mobile jqueryui
    loadJS("http://code.jquery.com/mobile/1.4.5/jquery.mobile-1.4.5.min.js", () =>
    {
        // index load
        loadJS("lib/index.init.js", () => { console.log("App loaded."); }, document.head)

    }, document.head);

}, document.head);



