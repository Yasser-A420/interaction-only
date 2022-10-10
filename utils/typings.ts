interface User {
    avatar: string;
    id: string;
    discriminator: string;
    avatar_decoration: string | null;
    username: string;
}
interface Member {
    avatar: string | null;
    communication_disabled_until: Date | null;
    deaf: boolean;
    flags: number;
    is_pending: Boolean;
    joined_at: Date;
    mute: boolean;
    nick: string | null;
    pending: boolean;
    permissions: string;
    premium_since: Date;
    roles: Array<string>;
    user: User;
}
interface Embed {
    title?: string;
    description?: string;
    color?: string;
    author?: object;
    footer?: object;
    url?: string;
    fields?: Array<object>;
    image?: {url: string};
    thumbnail?: {url: string};
}
interface Modal {
    title?: string;
    custom_id?: string;
    components?: Array<any>;
}
interface Button {
    label?: string;
    custom_id?: string;
    url?: string;
    disabled?: Boolean
    type: Number;
    style?: Number;
}
export type {Member, User, Embed, Modal, Button};