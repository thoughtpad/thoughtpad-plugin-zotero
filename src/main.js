var init = function (thoughtpad) {
    thoughtpad.subscribe("initialise-complete", addZoteroFunc);
},

addZoteroFunc = function *(obj) {
    var config = obj.thoughtpad.config;

    if (!config.func) {
        config.func = {};
    }

    if (!config.func.getZoteroTags) {
        config.func.getZoteroTags = function (page) {
            var tag,
                tagValue,
                ret = "";

            if (page.zotero) {
                for (tag in page.zotero) {
                    tagValue = page.zotero[tag];
                    if (tagValue.substr(0, 5) === "page.") {
                        tagValue = page[tagValue.substr(5, tagValue.length - 5)];
                    }

                    ret += "<meta name='" + tag + "' content='" + tagValue + "' />";
                }
            }

            return ret;
        };
    }

};

module.exports = {
    init: init
};
