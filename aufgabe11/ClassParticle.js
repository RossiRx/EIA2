"use strict";
var virus_l11;
(function (virus_l11) {
    class Particle extends virus_l11.Moveable {
        constructor(_position) {
            super(_position);
            //console.log("Particle Constructor");
            this.position = new virus_l11.Vector(0, 0);
            this.velocity = new virus_l11.Vector(0, 0);
            this.velocity.random(100, 170); //Zufällige Geschwindigkeit mit angegebenem Min- und Maxwert
        }
        draw() {
            //console.log("particle drawn" + this.position.x + this.position.y);
            let particlesPath = new Path2D();
            virus_l11.crc.save();
            //crc.translate(this.position.x, this.position.y);
            virus_l11.crc.fillStyle = "rgba(202, 183, 183, 0.1)";
            particlesPath.arc(this.position.x, this.position.y, 35, 0, 2 * Math.PI);
            virus_l11.crc.fill(particlesPath);
            virus_l11.crc.restore();
        }
    }
    virus_l11.Particle = Particle;
})(virus_l11 || (virus_l11 = {}));
//# sourceMappingURL=ClassParticle.js.map