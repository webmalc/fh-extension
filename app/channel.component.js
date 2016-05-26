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
var core_1 = require('@angular/core');
var router_deprecated_1 = require('@angular/router-deprecated');
var channel_service_1 = require('./channel.service');
var ChannelComponent = (function () {
    function ChannelComponent(routeParams, channelService) {
        this.routeParams = routeParams;
        this.channelService = channelService;
    }
    ChannelComponent.prototype.ngOnInit = function () {
        var _this = this;
        var id = +this.routeParams.get('id');
        var categoryId = +this.routeParams.get('categoryId');
        this.channelService.getChannel(id, categoryId)
            .then(function (channel) { return _this.channel = channel; });
    };
    ChannelComponent.prototype.goBack = function () {
        window.history.back();
    };
    ChannelComponent = __decorate([
        core_1.Component({
            selector: 'my-channel',
            templateUrl: 'templates/channel.component.html',
            directives: [router_deprecated_1.ROUTER_DIRECTIVES],
        }), 
        __metadata('design:paramtypes', [router_deprecated_1.RouteParams, channel_service_1.ChannelService])
    ], ChannelComponent);
    return ChannelComponent;
}());
exports.ChannelComponent = ChannelComponent;
//# sourceMappingURL=channel.component.js.map