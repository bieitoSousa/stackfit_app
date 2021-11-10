export class regionModel {
    title;
    desc;
    latitude;
    longitude;
    latitudeDelta;
    longitudeDelta;
    
    constructor(res) {
        this.title = res.title || '';
        this.desc = res.desc || '';
        this.latitude = res.latitude || '';
        this.longitude = res.longitude || '';
        this.latitudeDelta = res.latitudeDelta || '';
        this.longitudeDelta = res.longitudeDelta || '';
    }
}
/*
 const region = {
        latitude: 40.463667,
        longitude: -3.74922,
        latitudeDelta: 10.5,
        longitudeDelta: 9,
    };
*/