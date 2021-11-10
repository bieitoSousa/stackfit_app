export class sesionModel {
        id;
        name;
        type;
        date;
        sessionBlock = [];
    
    constructor(res) {
        this.id = res.id || -1;
        this.name = res.name || '';
        this.type = res.type || '';
        this.date = res.date || '';
        this.sessionBlock = res.sessionBlock.map((item) => new sessionBlockModel(item)) || [];
    }
}

export class sessionBlockModel {
    id;
    type;
    desc;
    img;
    timer;
    block = [];

constructor(res) {

this.id = res.id || -1;
this.type = res.type || '';
this.desc = res.desc || '';
this.img = res.img || '';
this.timer = new timerModel(res.timer) || '';
this.block = res.block.map((item) => new blockModel(item)) || []; 

}
}

export class timerModel {
    id;
    type;
    time;
    ud;
    rest;
    cda;

constructor(res) {

    this.id = res.id || -1;
    this.type = res.type || '';
    this.time = res.time || '';
    this.ud = res.ud || '';
    this.rest = res.rest || '';
    this.cda = res.cda || '';
}
}


export class blockModel {
    id;
    reps;
    exercise;
    desc;

constructor(res) {

    this.id = res.id || -1;
    this.reps = res.reps || [];
    this.exercise = res.exercise || [];
    this.desc = res.desc || [];
}
}