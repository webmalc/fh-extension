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
            .then((categories) => {
                for (let category of categories) {
                    category.channels.sort((a, b) => {
                        if (a.name > b.name) {
                            return 1;
                        }
                        if (a.name < b.name) {
                            return -1;
                        }
                        return 0
                    })
                    this.channels.push(category)
                }

            });
    }

    gotoDetail(category: Category, channel: Channel) {
        this.router.navigate(['ChannelDetail', { id: channel.id, categoryId: category.id }]);
    }
}
