"use strict";
var Category = (function () {
    function Category() {
    }
    return Category;
}());
exports.Category = Category;
var Channel = (function () {
    function Channel(id, name, session, alternativePlayer) {
        if (alternativePlayer === void 0) { alternativePlayer = ''; }
        this.id = id;
        this.name = name;
        this.session = session;
        this.alternativePlayer = alternativePlayer;
    }
    Object.defineProperty(Channel.prototype, "playerCode", {
        get: function () {
            if (this.alternativePlayer) {
                return this.alternativePlayer;
            }
            return "http://clients.cdnet.tv/flashbroadcast.php?channel=" + this.id + "&session=" + this.session;
        },
        enumerable: true,
        configurable: true
    });
    return Channel;
}());
exports.Channel = Channel;
//# sourceMappingURL=channel.js.map