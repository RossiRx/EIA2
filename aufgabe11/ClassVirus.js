"use strict";
var virus_l11;
(function (virus_l11) {
    class Virus extends virus_l11.Moveable {
        constructor(_position) {
            super(_position);
            //console.log("Virus Constructor");
            this.position = new virus_l11.Vector(0, 0);
            this.velocity = new virus_l11.Vector(0, 0);
            this.velocity.random(20, 50); //Zufällige Geschwindigkeit mit angegebenem Min- und Maxwert
        }
        draw() {
            //console.log("virus");
            let virusPath = new Path2D();
            virus_l11.crc.save();
            //crc.translate(this.position.x, this.position.y);
            virus_l11.crc.fillStyle = "green";
            virusPath.arc(this.position.x, this.position.y, 20, 0, 2 * Math.PI);
            // void ctx.arc(x, y, radius, startAngle, endAngle [, anticlockwise]);
            virus_l11.crc.fill(virusPath);
            virus_l11.crc.restore();
        }
    }
    virus_l11.Virus = Virus;
})(virus_l11 || (virus_l11 = {}));
//# sourceMappingURL=ClassVirus.js.map