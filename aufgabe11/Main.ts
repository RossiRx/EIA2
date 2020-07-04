namespace virus_l11 {

    interface Vector {
        x: number;
        y: number;
    }

    window.addEventListener("load", handleLoad);

    export let crc: CanvasRenderingContext2D;
    let moveableArray: Particle[] = [];
    let backgroundImage: ImageData;
   


    function handleLoad(): void {
        console.log("init");
        let canvas: HTMLCanvasElement | null = document.querySelector("canvas");
        if (!canvas)
            return;
        crc = <CanvasRenderingContext2D>canvas.getContext("2d");


        drawBackground(canvas);

        drawCells({ x: 120, y: 400 }, { x: 27, y: 200 });

        drawDefense({ x: 50, y: 400 }, { x: 70, y: 200 });

        createVirus(20);

        //drawParticles({ x: 650, y: 400 }, { x: 0, y: 30 });

        createParticles(150);

        window.setInterval(update, 20);

    }


    function drawBackground(_canvas: HTMLCanvasElement): void {
        //console.log("background");
        let pattern: CanvasRenderingContext2D = <CanvasRenderingContext2D>document.createElement("canvas").getContext("2d");
        pattern.canvas.width = 40;
        pattern.canvas.height = 20;

        pattern.fillStyle = "rgba(138, 53, 53, 0.8)";
        pattern.fillRect(0, 0, pattern.canvas.width, pattern.canvas.height);
        pattern.moveTo(0, 10);
        pattern.lineTo(15, 10);
        pattern.lineTo(20, 0);
        pattern.lineTo(30, 0);
        pattern.lineTo(40, 10);
        pattern.lineTo(32, 20);
        pattern.lineTo(20, 20);
        pattern.lineTo(10, 10);
        pattern.stroke();


        crc.fillStyle = <CanvasPattern>crc.createPattern(pattern.canvas, "repeat");
        crc.fillRect(0, 0, _canvas.width, _canvas.height);

    }

    function drawCells(_position: Vector, _area: Vector): void {
        //consconsole.log("cells");
        let randomRotation: number = Math.random() * 10;
        let r1: number = 240;
        let r2: number = 30;
        let gradientCells: CanvasGradient = crc.createRadialGradient(0, 0, r1, 0, 0, r2);

        let nCells: number = 7;
        let cellPath: Path2D = new Path2D();

        //console.log(randomRotation);

        gradientCells.addColorStop(0, "rgb(49, 49, 29)");
        gradientCells.addColorStop(0.4, "rgb(240, 240, 197)");

        crc.fillStyle = gradientCells;


        cellPath.ellipse(_area.x, _area.y, 45, r2, randomRotation, 0, Math.PI * 2);
        // void ctx.ellipse(x, y, radiusX, radiusY, rotation, startAngle, endAngle [, anticlockwise]);

        crc.save();
        crc.translate(_area.x, _area.y);

        for (let drawn: number = 0; drawn < nCells; drawn++) {
            crc.save();

            let x: number = (Math.random() - 0.5) * _position.x;
            let y: number = - Math.random() * _position.y;
            crc.translate(x, y);
            crc.fill(cellPath);
            crc.restore();
        }

        crc.restore();

    }


    function drawDefense(_position: Vector, _area: Vector): void {

        let nDefense: number = 10;
        let defensePath: Path2D = new Path2D();

        crc.save();
        crc.translate(_area.x, _area.y);

        let r1: number = 280;
        let r2: number = 15;
        let gradientDefense: CanvasGradient = crc.createRadialGradient(0, 0, r1, 0, 0, r2);

        gradientDefense.addColorStop(1, "rgb(0, 0, 0)");
        gradientDefense.addColorStop(0, "rgb(79, 68, 200)");




        crc.fillStyle = gradientDefense;
        defensePath.arc(_area.x, _area.y, r2, 0, 2 * Math.PI);
        // void ctx.arc(x, y, radius, startAngle, endAngle [, anticlockwise]);

        for (let drawn: number = 0; drawn < nDefense; drawn++) {
            crc.save();
            let x: number = (Math.random() - 0.5) * _position.x;
            let y: number = - Math.random() * _position.y;
            crc.translate(x, y);
            crc.fill(defensePath);
            crc.restore();

        }

        crc.restore();
        backgroundImage = crc.getImageData(0, 0, crc.canvas.width, crc.canvas.height);
    }

    function createVirus(_nVirus: number): void {
        console.log("Create Virus");
        for (let i: number = 0; i < _nVirus; i++) {
            let virus: Virus = new Virus();
            moveableArray.push(virus);
        }
    }

    function createParticles(_nParticles: number): void {
        console.log("Create Particles");
        for (let i: number = 0; i < _nParticles; i++) {
            let particle: Particle = new Particle();
            moveableArray.push(particle);
        }
    }

    function update(): void {
       
        crc.putImageData(backgroundImage, 0, 0);

        for (let virus of moveableArray) {
            
            virus.move(1 / 400);
            virus.draw();
       
    }

        for (let particle of moveableArray) {
            particle.move(1 / 100);
            particle.draw();
            
        }

        
  }
}