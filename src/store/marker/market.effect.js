import { emmitErrorAction } from "../app/app.actions";
import {
    // STAROILD
    getMarketStaroildLoadingAction,
    getMarketStaroildLoadedAction,
    getMarketStaroildFailAction,
    
    //WORKSHOPS
    getMarketWorkshopsLoadingAction,
    getMarketWorkshopsLoadedAction,
    getMarketWorkshopsFailAction,
     
    //RESTAURANT
    getMarketRestaurantLoadingAction,
    getMarketRestaurantLoadedAction,
    getMarketRestaurantFailAction,
      
    //HOTEL
    getMarketHotelLoadingAction,
    getMarketHotelLoadedAction,
    getMarketHotelFailAction,
     
} from "./market.actions";



// STAROIL
export function getStaroilMarketStaroilList(dispatch) {
    dispatch(getMarketStaroildLoadingAction());
    try{
        dispatch(getMarketStaroildLoadedAction(json));
    }catch(err){
        dispatch(emmitErrorAction({
            type: 'get prod list in',
            err: err,
            params: params
        }));
        dispatch(getMarketStaroildFailAction());
    }
}
// WORKSHOPS
export function getStaroilMarketWorkshopList(dispatch) {
    dispatch(getMarketWorkshopsLoadingAction());
    try{
        dispatch(getMarketWorkshopsLoadedAction(json));
    }catch(err){
        dispatch(emmitErrorAction({
            type: 'get prod list in',
            err: err,
            params: params
        }));
        dispatch(getMarketWorkshopsFailAction());
    }
}
// RESTAURANT
export function getStaroilMarketRestaurantList(dispatch) {
    dispatch(getMarketRestaurantLoadingAction());
    try{
        dispatch(getMarketRestaurantLoadedAction(json));      
    }catch(err){
        dispatch(emmitErrorAction({
            type: 'get prod list in',
            err: err,
            params: params
        }));
        dispatch(getMarketRestaurantFailAction());
    }
}
// HOTEL
export function getStaroilMarketHotelList(dispatch) {
    dispatch(getMarketHotelLoadingAction());
    try{
        dispatch(getMarketHotelLoadedAction(json));
    }catch(err){
        dispatch(emmitErrorAction({
            type: 'get prod list in',
            err: err,
            params: params
        }));
        dispatch(getMarketHotelFailAction());
    }
}





const json = 
{
    data:
    [
        {
            coordinate:{
                'latitude': 43.324192408136376,
                'longitude': -8.338752550534737,
            },
            title:'STAROIL CEPSA CORUÑA',
            description:'',
            ratings:4, 
            img:'https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=QKSdOTnAaUE3cxMWsJ2_sQ&cb_client=search.gws-prod.gps&w=408&h=240&yaw=142.46701&pitch=0&thumbfov=100', 
            hours:'LUNES a DOMINGO: 7.00 a 23.00', 
            address:'Avda. de las Mariñas, 163',
            cp:'15176',
            city: 'Oleiros', 
            province: 'A CORUÑA', 
            phone:'981 611 137', 
            email:'_____@staroil.es', 
            web:'www.staroil.es',
        },
        {
            coordinate :{
                'latitude': 42.918106619839186, 
                'longitude': -8.526568432491903,
            },
            title:'STAROIL SANTIAGO',
            description:'',
            ratings:4.3,
            img:'https://lh5.googleusercontent.com/p/AF1QipPqU4cl9u1bc-DXUT_Q9oCKprHzkOGvNUCNEm4_=w408-h271-k-no', 
            hours:'MONDAY to FRIDAY: 7:00 a.m. to 11:00 p.m. SATURDAY: 8:00 a.m. to 10:00 p.m. - SUNDAY: 9:00 a.m. to 3:00 p.m.', 
            location:'Pol. Industrial del Tambre - MERCAGALICIA,', 
            cp:'15705',
            city:'Santiago de Compostela',
            province:'A CORUÑA', 
            phone:'981 936 318', 
            email:'_____@staroil.es', 
            web:'www.staroil.es',

        },
        {
            coordinate :{
                'latitude': 42.118062495071605, 
                'longitude': -8.617955959496406,
            },
            title:'STAROIL PORRIÑO',
            description:'',
            ratings:4.4, 
            img:'https://lh5.googleusercontent.com/p/AF1QipMsaWLX8z05PbT9N-lHcdFIrRLaVGuZjslO_qaF=w408-h306-k-no',
            hours:'OPEN 24h.', 
            location:'Pol. Ind. A Granxa - C. Prolongación Paralela, 3', 
            cp:'36475',
            city:'Porriño',
            province:'PONTEVEDRA',
            phone:'902,547,780', 
            email:'_____@staroil.es', 
            web:'www.staroil.es', 
        }
    ]
}

