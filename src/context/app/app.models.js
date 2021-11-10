import { uuidv4 } from "../../core/Helpers";


export class AppSettingsModel {
    lng;
    currency;
    iso_code_lng;
    iso_code_currency;
    symbol_currency;
    stripe_public_key;

    constructor(res) {
        this.lng = res.lng || '';
        this.currency = res.currency || '';
        this.iso_code_lng = res.iso_code_lng || '';
        this.iso_code_currency = res.iso_code_currency || '';
        this.symbol_currency = res.symbol_currency || '';
        this.stripe_public_key = res.stripe_public_key || '';
    }
}


export class ErrorInfo {
    id;
    isActive = true;
    timer = 60;
    data;

    constructor(res) {
        this.id = uuidv4();
        this.data = res;
    }
}

