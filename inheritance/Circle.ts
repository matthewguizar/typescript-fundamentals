import {Shape} from './Shape';

export class Circle extends Shape {
    
    constructor(x: number, y: number, private _radius: number){
        super(x, y);
    }


    get radius(): number {
        return this._radius;
    }
    set radius(radius: number){
        this._radius = radius;
    }

    

    getInfo(): string {
        return super.getInfo() + `, radius=${this._radius}`;
    }
}