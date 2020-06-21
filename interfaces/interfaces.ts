export interface IAddress {
    city: string;
    geo: {
        lat: string;
        lng: string;
    };
    street: string;
    suite: string;
    zipcode: string;
}

export interface ICompany {
    bs: string;
    catchPhrase: string;
    name: string;
}

export interface IUser {
    address: IAddress;
    company: ICompany;
    email: string;
    id: number;
    name: string;
    username: string;
    website: string;
}

export interface IEditUser {
    name: string;
    email: string;
    city: string;
    street: string;
    suite: string;
}

export interface IPost {
    userId: number;
    id: number;
    title: string;
    body: string;
}

export interface IUserWithPosts extends IUser {
    phone: string;
    posts: IPost[];
}
