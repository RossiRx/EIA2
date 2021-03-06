"use strict";
var virus_l11;
(function (virus_l11) {
    window.addEventListener("load", handleLoad);
    let moveableArray = [];
    let backgroundImage;
    function handleLoad() {
        console.log("init");
        let canvas = document.querySelector("canvas");
        if (!canvas)
            return;
        virus_l11.crc = canvas.getContext("2d");
        drawBackground(canvas);
        drawCells({ x: 120, y: 400 }, { x: 27, y: 200 });
        drawDefense({ x: 50, y: 400 }, { x: 70, y: 200 });
        createVirus(20);
        //drawParticles({ x: 650, y: 400 }, { x: 0, y: 30 });
        createParticles(150);
        window.setInterval(update, 20);
    }
    function drawBackground(_canvas) {
        //console.log("background");
        let pattern = document.createElement("canvas").getContext("2d");
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
        virus_l11.crc.fillStyle = virus_l11.crc.createPattern(pattern.canvas, "repeat");
        virus_l11.crc.fillRect(0, 0, _canvas.width, _canvas.height);
    }
    function drawCells(_position, _area) {
        //consconsole.log("cells");
        let randomRotation = Math.random() * 10;
        let r1 = 240;
        let r2 = 30;
        let gradientCells = virus_l11.crc.createRadialGradient(0, 0, r1, 0, 0, r2);
        let nCells = 7;
        let cellPath = new Path2D();
        //console.log(randomRotation);
        gradientCells.addColorStop(0, "rgb(49, 49, 29)");
        gradientCells.addColorStop(0.4, "rgb(240, 240, 197)");
        virus_l11.crc.fillStyle = gradientCells;
        cellPath.ellipse(_area.x, _area.y, 45, r2, randomRotation, 0, Math.PI * 2);
        // void ctx.ellipse(x, y, radiusX, radiusY, rotation, startAngle, endAngle [, anticlockwise]);
        virus_l11.crc.save();
        virus_l11.crc.translate(_area.x, _area.y);
        for (let drawn = 0; drawn < nCells; drawn++) {
            virus_l11.crc.save();
            let x = (Math.random() - 0.5) * _position.x;
            let y = -Math.random() * _position.y;
            virus_l11.crc.translate(x, y);
            virus_l11.crc.fill(cellPath);
            virus_l11.crc.restore();
        }
        virus_l11.crc.restore();
    }
    function drawDefense(_position, _area) {
        let nDefense = 10;
        let defensePath = new Path2D();
        virus_l11.crc.save();
        virus_l11.crc.translate(_area.x, _area.y);
        let r1 = 280;
        let r2 = 15;
        let gradientDefense = virus_l11.crc.createRadialGradient(0, 0, r1, 0, 0, r2);
        gradientDefense.addColorStop(1, "rgb(0, 0, 0)");
        gradientDefense.addColorStop(0, "rgb(79, 68, 200)");
        virus_l11.crc.fillStyle = gradientDefense;
        defensePath.arc(_area.x, _area.y, r2, 0, 2 * Math.PI);
        // void ctx.arc(x, y, radius, startAngle, endAngle [, anticlockwise]);
        for (let drawn = 0; drawn < nDefense; drawn++) {
            virus_l11.crc.save();
            let x = (Math.random() - 0.5) * _position.x;
            let y = -Math.random() * _position.y;
            virus_l11.crc.translate(x, y);
            virus_l11.crc.fill(defensePath);
            virus_l11.crc.restore();
        }
        virus_l11.crc.restore();
        backgroundImage = virus_l11.crc.getImageData(0, 0, virus_l11.crc.canvas.width, virus_l11.crc.canvas.height);
    }
    function createVirus(_nVirus) {
        console.log("Create Virus");
        for (let i = 0; i < _nVirus; i++) {
            let virus = new virus_l11.Virus();
            moveableArray.push(virus);
        }
    }
    function createParticles(_nParticles) {
        console.log("Create Particles");
        for (let i = 0; i < _nParticles; i++) {
            let particle = new virus_l11.Particle();
            moveableArray.push(particle);
        }
    }
    function update() {
        virus_l11.crc.putImageData(backgroundImage, 0, 0);
        for (let virus of moveableArray) {
            virus.move(1 / 400);
            virus.draw();
        }
        for (let particle of moveableArray) {
            particle.move(1 / 100);
            particle.draw();
        }
    }
})(virus_l11 || (virus_l11 = {}));
//# sourceMappingURL=Main.js.map