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
var DashboardComponent = (function () {
    function DashboardComponent(router, channelService) {
        this.router = router;
        this.channelService = channelService;
        this.channels = [];
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.channelService.getChannels()
            .then(function (categories) {
            for (var _i = 0, categories_1 = categories; _i < categories_1.length; _i++) {
                var category = categories_1[_i];
                category.channels.sort(function (a, b) {
                    if (a.name > b.name) {
                        return 1;
                    }
                    if (a.name < b.name) {
                        return -1;
                    }
                    return 0;
                });
                _this.channels.push(category);
            }
        });
    };
    DashboardComponent.prototype.gotoDetail = function (category, channel) {
        this.router.navigate(['ChannelDetail', { id: channel.id, categoryId: category.id }]);
    };
    DashboardComponent = __decorate([
        core_1.Component({
            selector: 'my-dashboard',
            templateUrl: 'templates/dashboard.component.html',
            styleUrls: ['styles/dashboard.component.css']
        }), 
        __metadata('design:paramtypes', [router_deprecated_1.Router, channel_service_1.ChannelService])
    ], DashboardComponent);
    return DashboardComponent;
}());
exports.DashboardComponent = DashboardComponent;
//# sourceMappingURL=dashboard.component.js.map