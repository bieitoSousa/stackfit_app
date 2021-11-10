export class exerciseModel {
            id;
            name;
            longName;
            type;
            objective;
            desc;
            img;
            level;
            rating;
            variants;
            technique;
    
    constructor(res) {
        this.id = res.id || -1;
        this.name = res.name || '';
        this.longName = res.longName || '';
        this.type = res.type || '';
        this.objective = res.objective || '';
        this.desc = res.desc || '';
        this.img = res.img || '';
        this.level = res.level || -1;
        this.rating = res.rating || -1;
        this.variants = res.variants || [];
        this.technique = res.technique || [];        
    }
}
