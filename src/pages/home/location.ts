export interface ILocation {
    id?: any;
    userId?: number;
    latitude?: string;
    longitude?: string;
    city?: string;
    state?: string;
    creationDate?: string;
}

export class Location implements ILocation {
    constructor(
        public id?: any,
        public userId?: number,
        public latitude?: string,
        public longitude?: string,
        public city?: string,
        public state?: string,
        public creationDate?: string,
    ) {
        this.id = id ? id : null;
        this.userId = userId ? userId : null;
        this.latitude = latitude ? latitude : null;
        this.longitude = longitude ? longitude : null;
        this.city = city ? city : null;
        this.state = state ? state : null;
        this.creationDate = creationDate ? creationDate : null;

    }

}