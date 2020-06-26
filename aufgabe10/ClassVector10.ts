namespace virus_l10 {
    export class Vector {
        x: number;
        y: number;

        constructor(_x: number, _y: number) {
            this.set(_x, _y);
        }

        set(_x: number, _y: number): void {   //Eigenschaften x und y werden bestzt
            this.x = _x;
            this.y = _y;
        }

        scale(_factor: number): void {      //Vector wird um den Faktor skaliert
            this.x *= _factor;
            this.y *= _factor;
        }

        add(_addend: Vector): void {        //Weiterer Vektor wird aufaddiert    
            this.x += _addend.x;
            this.y += _addend.y;
        }

        random(_minLength: number, _maxLength: number): void {
            let length: number = _minLength + Math.random() * (_maxLength - _minLength);
            let direction: number = Math.random() * 2 * Math.PI;

            this.set(Math.cos(direction), Math.sin(direction));
            this.scale(length);

    }


} 
}