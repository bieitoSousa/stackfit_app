export interface ISesion {
    id?: number;
    img?: string;
    name?: string;
    type?: string;
    desc?:string;
    date?: string;
    sessionBlock?: ISessionBlock[];
}
export interface ISessionBlock {
    id?: number;
    name?: string;
    type?: string;
    img?: string;
    desc?: string;
    timer?:ITimer;
    block?:IBlock[];
}
export interface ITimer {
    id?: number;
    type?:string;
    time?:string;
    ud?:string;
    rest?:string;
    cda?:string;
    rounds?:number;
}
export interface IBlock {
    id?: number;
    reps?: number;
    exercise?: string;
    desc?: string;
}