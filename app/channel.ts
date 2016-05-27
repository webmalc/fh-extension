export class Category {
    public id: number;
    public name: string;
    public icon: string;
    public channels: Channel[]
}

export class Channel {
    public id: number;
    public name: string;
    public session: string;
    public alternativePlayer: string;

    public constructor(id, name, session, alternativePlayer = '') {
        this.id = id
        this.name = name
        this.session = session
        this.alternativePlayer = alternativePlayer
    }
    
    public get playerCode(): string {
        if (this.alternativePlayer) {
            return this.alternativePlayer
        }
        return `http://clients.cdnet.tv/flashbroadcast.php?channel=${ this.id }&session=${ this.session }`
    }
}