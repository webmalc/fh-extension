"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var channels_1 = require('./channels');
var core_1 = require('@angular/core');
var ChannelService = (function () {
    function ChannelService() {
    }
    ChannelService.prototype.getChannels = function () {
        return Promise.resolve(channels_1.CHANNELS);
    };
    ChannelService.prototype.getChannel = function (id, categoryId) {
        return Promise.resolve(channels_1.CHANNELS).then(function (channels) { return channels.filter(function (category) { return category.id === categoryId; })[0].channels.filter(function (channel) { return channel.id === id; })[0]; });
    };
    ChannelService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], ChannelService);
    return ChannelService;
}());
exports.ChannelService = ChannelService;
//# sourceMappingURL=channel.service.js.map