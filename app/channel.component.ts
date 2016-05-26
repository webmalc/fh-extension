import { Component, OnInit } from '@angular/core';
import { RouteParams, ROUTER_DIRECTIVES } from '@angular/router-deprecated';
import { ChannelService } from './channel.service';
import { Channel } from './channel';

@Component({
    selector: 'my-channel',
    templateUrl: 'templates/channel.component.html',
    directives: [ROUTER_DIRECTIVES],
})

export class ChannelComponent implements OnInit {
    channel: Channel;

    constructor(
        private routeParams: RouteParams,
        private channelService: ChannelService) {
    }

    ngOnInit() {
        let id = +this.routeParams.get('id')
        let categoryId = +this.routeParams.get('categoryId')
        this.channelService.getChannel(id, categoryId)
            .then(channel => this.channel = channel);
    }

    goBack() {
        window.history.back();
    }
}
