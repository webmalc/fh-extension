import {CHANNELS} from './channels';
import {Injectable} from '@angular/core';

@Injectable()
export class ChannelService {
    getChannels() {
        return Promise.resolve(CHANNELS);
    }

    getChannel(id:number, categoryId:number) {
        return Promise.resolve(CHANNELS).then(
            channels => channels.filter(category => category.id === categoryId)[0].channels.filter(channel => channel.id === id)[0]
        );
    }
}