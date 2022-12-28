import {Shape} from './Shape';

export class Circle extends Shape {
    calculateArea(): number {
        return Math.PI * Math.pow(this._radius, 2);
    }
    
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