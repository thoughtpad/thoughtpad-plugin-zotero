var should = require('should'),
    app = require('./../src/main'),
    co = require('co'),
    man = require('thoughtpad-plugin-manager'),
    config = require('./config'),
    thoughtpad;

describe("zotero plugin", function () {
    it("should add zotero tag functionality", function () {
        thoughtpad = man.registerPlugins([app]);
        thoughtpad.config = config;

        co(function *() {
            yield thoughtpad.notify("initialise-complete");
            var type = typeof thoughtpad.config.func.getZoteroTags;
            type.should.eql('function');
        })();
    });

        it("function should return nothing if no config", function () {
        var res = "";
        thoughtpad = man.registerPlugins([app]);
        thoughtpad.config = config;

        co(function *() {
            yield thoughtpad.notify("initialise-complete");
            res = thoughtpad.config.func.getZoteroTags({});
            res.should.equal("");
        })();
    });


    it("function should return meta tag", function () {
        var res = "";
        thoughtpad = man.registerPlugins([app]);
        thoughtpad.config = config;

        co(function *() {
            yield thoughtpad.notify("initialise-complete");
            res = thoughtpad.config.func.getZoteroTags(config.pages.home);
            res.should.equal("<meta name='tag1' content='foo' />");
        })();
    });

    it("function can use page properties", function () {
        var res = "";
        thoughtpad = man.registerPlugins([app]);
        thoughtpad.config = config;

        co(function *() {
            yield thoughtpad.notify("initialise-complete");
            res = thoughtpad.config.func.getZoteroTags(config.pages.anotherpage);
            res.should.equal("<meta name='tag2' content='foo' /><meta name='tag3' content='bar' />");
        })();
    });
});