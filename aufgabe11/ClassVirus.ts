namespace virus_l11 {


    export class Virus extends Moveable {

      
        public constructor(_position?: Vector) {

            super(_position);

            //console.log("Virus Constructor");

            this.position = new Vector(0, 0);
            this.velocity = new Vector(0, 0);
            this.velocity.random(20, 50);  //Zufällige Geschwindigkeit mit angegebenem Min- und Maxwert
        }

        

        public draw(): void {
            //console.log("virus");

            let virusPath: Path2D = new Path2D();

            crc.save();
            //crc.translate(this.position.x, this.position.y);
           
            crc.fillStyle = "green";
            virusPath.arc(this.position.x, this.position.y, 20, 0, 2 * Math.PI);
            // void ctx.arc(x, y, radius, startAngle, endAngle [, anticlockwise]);



            crc.fill(virusPath);
            crc.restore();
        }

    }
}