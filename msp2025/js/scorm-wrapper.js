/* scorm-wrapper.js */

var scorm = {
    API: null,
    isActive: false,

    init: function() {
        this.API = this.findAPI(window);
        if (this.API) {
            var result = this.API.LMSInitialize("");
            if (result === "true" || result === true) {
                this.isActive = true;
                return true;
            }
        }
        console.warn("SCORM 1.2 API no encontrada o fallo en inicialización.");
        return false;
    },

    findAPI: function(win) {
        var attempts = 0;
        var api = null;
        while ((win.API == null) && (win.parent != null) && (win.parent != win)) {
            attempts++;
            if (attempts > 7) { break; }
            win = win.parent;
        }
        if (win.API != null) {
            api = win.API;
        } else {
            // También revisar en opener si no se encuentra en la jerarquía parent
            if(win.opener != null && typeof(win.opener) != "undefined") {
                win = win.opener;
                attempts = 0;
                while ((win.API == null) && (win.parent != null) && (win.parent != win)) {
                    attempts++;
                    if (attempts > 7) { break; }
                    win = win.parent;
                }
                if (win.API != null) {
                    api = win.API;
                }
            }
        }
        return api;
    },

    get: function(parameter) {
        if (this.isActive && this.API) {
            return this.API.LMSGetValue(parameter);
        }
        return "";
    },

    set: function(parameter, value) {
        if (this.isActive && this.API) {
            return this.API.LMSSetValue(parameter, value);
        }
        return false;
    },

    commit: function() {
        if (this.isActive && this.API) {
            return this.API.LMSCommit("");
        }
        return false;
    },

    quit: function() {
        if (this.isActive && this.API) {
            this.API.LMSCommit("");
            this.API.LMSFinish("");
            this.isActive = false;
        }
    }
};

window.scormWrapper = scorm;
