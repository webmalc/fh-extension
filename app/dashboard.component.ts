import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router-deprecated';
import { ChannelService } from './channel.service';
import { Category, Channel } from './channel';

@Component({
    selector: 'my-dashboard',
    templateUrl: 'templates/dashboard.component.html',
    styleUrls: ['styles/dashboard.component.css']
})

export class DashboardComponent implements OnInit {
    channels: Category[] = [];

    constructor(
        private router: Router,
        private channelService: ChannelService) {
    }

    ngOnInit() {
        this.channelService.getChannels()
            .then(channels => this.channels = channels);
    }

    gotoDetail(category: Category, channel: Channel) {
        this.router.navigate(['ChannelDetail', { id: channel.id, categoryId: category.id }]);
    }
}
