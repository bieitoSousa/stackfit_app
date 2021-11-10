export class coordinateModel {
    latitude;
    latitude;

    constructor(res) {
        this.latitude = res.latitude || '';
        this.longitude = res.longitude || '';
    }
}


export class marketModel {
    coordinate;
    title;
    description;
    ratings;
    hours;
    location;
    cp;
    city;
    province;
    phone;
    email;
    web;



    constructor(res) {
        this.coordinate = res.coordinate || '';
        this.title = res.title || '';
        this.description = res.description || '';
        this.ratings = res.ratings || '';
        this.hours = res.hours || '';
        this.location = res.location || '';
        this.cp =res.cp || '';
        this.city =res.city || '';
        this.province =res.province || '';
        this.phone = res.phone || '';
        this.email = res.email || '';
        this.web = res.web || '';
    }
}
/*
  {
            coordinate:{
                'latitude': 42.2314,
                'latitude': -8.71245
            },
            title:'Vigo',
            description:'City ​​of Vigo'
        },
*/