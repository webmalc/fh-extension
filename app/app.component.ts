import { Component } from '@angular/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';
import { DashboardComponent } from './dashboard.component';
import { ChannelComponent } from './channel.component';
import {ChannelService} from './channel.service'

@Component({
    selector: 'my-app',
    templateUrl: 'templates/app.component.html',
    directives: [ROUTER_DIRECTIVES],
    providers: [
        ROUTER_PROVIDERS,
        ChannelService
    ]
})
@RouteConfig([
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: DashboardComponent,
        useAsDefault: true
    },
    {
        path: '/channel/:categoryId/:id',
        name: 'ChannelDetail',
        component: ChannelComponent
    },
])
export class AppComponent {}
