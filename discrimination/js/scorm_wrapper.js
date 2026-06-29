var scormAPI = null;

function getAPIHandle() {
    if (scormAPI == null) {
        scormAPI = getAPI();
    }
    return scormAPI;
}

function getAPI() {
    var theAPI = findAPI(window);
    if ((theAPI == null) && (window.opener != null) && (typeof(window.opener) != "undefined")) {
        theAPI = findAPI(window.opener);
    }
    if ((theAPI == null) && (window.parent != null) && (typeof(window.parent) != "undefined")) {
        theAPI = findAPI(window.parent);
    }
    return theAPI;
}

function findAPI(win) {
    var findAPITries = 0;
    while ((win.API == null) && (win.parent != null) && (win.parent != win)) {
        findAPITries++;
        if (findAPITries > 7) {
            return null;
        }
        win = win.parent;
    }
    return win.API;
}

function scormInitialize() {
    var api = getAPIHandle();
    if (api == null) {
        console.warn("No se encontró la API de SCORM.");
        return "false";
    }
    return api.LMSInitialize("");
}

function scormSetValue(name, value) {
    var api = getAPIHandle();
    if (api == null) return "false";
    return api.LMSSetValue(name, value);
}

function scormCommit() {
    var api = getAPIHandle();
    if (api == null) return "false";
    return api.LMSCommit("");
}

function scormFinish() {
    var api = getAPIHandle();
    if (api == null) return "false";
    return api.LMSFinish("");
}
