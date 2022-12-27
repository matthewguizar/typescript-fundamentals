export class Shape {

    //defines and assigns at the same time
    constructor(private _x: number, private _y: number) {
    }

    get x(){
        return this._x;
    }

    set x (x: number){
        this.x = x;
    }

    get y(){
        return this._y;
    }

    set y(y: number){
        this.y = y;
    }


    public getInfo(): string {
        return `x=${this.x}, y=${this._y}`;
    }
}