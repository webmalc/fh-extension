export class Category {
    id: number;
    name: string;
    icon: string;
    channels: Channel[]
}

export class Channel {
    id: number;
    name: string;
    session: string;
}