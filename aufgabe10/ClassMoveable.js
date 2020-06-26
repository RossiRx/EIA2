"use strict";
var virus_l10;
(function (virus_l10) {
    class Moveable {
        constructor(_position) {
            //console.log("Moveable Constructor");
            if (_position)
                this.position = new virus_l10.Vector(this.position.x, this.position.y); // alternativ: _position.copy();
            else
                this.position = new virus_l10.Vector(0, 0);
            this.velocity = new virus_l10.Vector(0, 0);
        }
        move(_timeslice) {
            //console.log(" Move");
            let offset = new virus_l10.Vector(this.velocity.x, this.velocity.y); //Weg wird als neuer Velocity-Vektor definiert
            offset.scale(_timeslice); //Durch Scale-Funktion wird der der Vektor mit der Zeit multipliziert
            this.position.add(offset); //Verschiebung in der Zeit wird auf die Position addiert  
            if (this.position.x < 0) //Bedingungen für Verlassen des Canvas-Felds
                this.position.x += virus_l10.crc.canvas.width;
            if (this.position.y < 0)
                this.position.y += virus_l10.crc.canvas.height;
            if (this.position.x > virus_l10.crc.canvas.width)
                this.position.x -= virus_l10.crc.canvas.width;
            if (this.position.y > virus_l10.crc.canvas.height)
                this.position.y -= virus_l10.crc.canvas.height;
        }
        draw() {
            //console.log("Moveable draw");
        }
    }
    virus_l10.Moveable = Moveable;
})(virus_l10 || (virus_l10 = {}));
//# sourceMappingURL=ClassMoveable.js.map