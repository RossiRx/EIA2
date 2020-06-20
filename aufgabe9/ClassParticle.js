"use strict";
var virus_l09;
(function (virus_l09) {
    class Particle {
        constructor() {
            console.log("Particle Constructor");
            this.position = new virus_l09.Vector(0, 0);
            this.velocity = new virus_l09.Vector(0, 0);
            this.velocity.random(100, 200); //Zufällige Geschwindigkeit mit angegebenem Min- und Maxwert
        }
        move(_timeslice) {
            console.log("Particle Move");
            let offset = new virus_l09.Vector(this.velocity.x, this.velocity.y); //Weg wird als neuer Velocity-Vektor definiert
            offset.scale(_timeslice); //Durch Scale-Funktion wird der der Vektor mit der Zeit multipliziert
            this.position.add(offset); //Verschiebung in der Zeit wird auf die Position addiert  
            if (this.position.x < 0) //Bedingungen für Verlassen des Canvas-Felds
                this.position.x += virus_l09.crc.canvas.width;
            if (this.position.y < 0)
                this.position.y += virus_l09.crc.canvas.height;
            if (this.position.x > virus_l09.crc.canvas.width)
                this.position.x -= virus_l09.crc.canvas.width;
            if (this.position.y > virus_l09.crc.canvas.height)
                this.position.y -= virus_l09.crc.canvas.height;
        }
        draw() {
            console.log("particle drawn" + this.position.x + this.position.y);
            let particlesPath = new Path2D();
            virus_l09.crc.save();
            virus_l09.crc.translate(this.position.x, this.position.y);
            virus_l09.crc.fillStyle = "rgba(202, 183, 183, 0.1)";
            particlesPath.arc(this.position.x, this.position.y, 25, 0, 2 * Math.PI);
            virus_l09.crc.fill(particlesPath);
            virus_l09.crc.restore();
        }
    }
    virus_l09.Particle = Particle;
})(virus_l09 || (virus_l09 = {}));
/*
             let nParticles: number = 250;
             let particlesPath: Path2D = new Path2D();
         
             crc.fillStyle = "rgba(202, 183, 183, 0.1)";
             particlesPath.arc(_area.x, _area.y, 25, 0, 2 * Math.PI);
         
             crc.save();
             crc.translate(_area.x, _area.y);
         
             for (let drawn: number = 0; drawn < nParticles; drawn++) {
                 crc.save();
                 let x: number = (Math.random() - 0.5) * _position.x;
                 let y: number = - Math.random() * _position.y;
                 crc.translate(x, y);
                 crc.fill(particlesPath);
                 crc.restore();
            
          */
/*
  let offset: Vector = new Vector(this.velocity.x, this.velocity.y);  //Weg wird als neuer Velocity-Vektor definiert
  offset.scale(_timeslice);                   //Durch Scale-Funktion wird der der Vektor mit der Zeit multipliziert
  this.position.add(offset);                  //Verschiebung in der Zeit wird auf die Position addiert

  if (this.position.x < 0)                    //Bedingungen für Verlassen des Canvas-Felds
      this.position.x += crc.canvas.width;

  if (this.position.y < 0)
      this.position.y += crc.canvas.height;

  if (this.position.x > crc.canvas.width)
      this.position.x -= crc.canvas.width;

  if (this.position.y > crc.canvas.height)
      this.position.y -= crc.canvas.height; */
//# sourceMappingURL=ClassParticle.js.map