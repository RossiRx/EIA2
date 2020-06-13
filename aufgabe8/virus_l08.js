"use strict";
var virus_l08;
(function (virus_l08) {
    window.addEventListener("load", handleLoad);
    let crc;
    function handleLoad() {
        console.log("init");
        let canvas = document.querySelector("canvas");
        if (!canvas)
            return;
        crc = canvas.getContext("2d");
        drawBackground(canvas);
        drawCells({ x: 120, y: 400 }, { x: 27, y: 200 });
        drawDefense({ x: 50, y: 400 }, { x: 70, y: 100 });
        drawVirus({ x: 100, y: 400 }, { x: 220, y: 50 });
        drawParticles({ x: 650, y: 400 }, { x: 0, y: 30 });
    }
    function drawBackground(_canvas) {
        console.log("background");
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
        crc.fillStyle = crc.createPattern(pattern.canvas, "repeat");
        crc.fillRect(0, 0, _canvas.width, _canvas.height);
    }
    function drawCells(_position, _area) {
        console.log("cells");
        let randomRotation = Math.random() * 10;
        let r1 = 250;
        let r2 = 30;
        let gradientCells = crc.createRadialGradient(0, 0, r1, 0, 0, r2);
        let nCells = 7;
        let cellPath = new Path2D();
        console.log(randomRotation);
        gradientCells.addColorStop(0, "rgb(49, 49, 29)");
        gradientCells.addColorStop(0.4, "rgb(240, 240, 197)");
        crc.fillStyle = gradientCells;
        cellPath.ellipse(_area.x, _area.y, 45, r2, randomRotation, 0, Math.PI * 2);
        // void ctx.ellipse(x, y, radiusX, radiusY, rotation, startAngle, endAngle [, anticlockwise]);
        crc.save();
        crc.translate(_area.x, _area.y);
        for (let drawn = 0; drawn < nCells; drawn++) {
            crc.save();
            let x = (Math.random() - 0.5) * _position.x;
            let y = -Math.random() * _position.y;
            crc.translate(x, y);
            crc.fill(cellPath);
            crc.restore();
        }
    }
    function drawDefense(_position, _area) {
        let nDefense = 10;
        let defensePath = new Path2D();
        let r1 = 170;
        let r2 = 15;
        let gradientDefense = crc.createRadialGradient(0, 0, r1, 0, 0, r2);
        gradientDefense.addColorStop(0, "rgb(0, 0, 0)");
        gradientDefense.addColorStop(0.4, "rgb(79, 68, 200)");
        crc.fillStyle = gradientDefense;
        defensePath.arc(_area.x, _area.y, r2, 0, 2 * Math.PI);
        // void ctx.arc(x, y, radius, startAngle, endAngle [, anticlockwise]);
        crc.save();
        crc.translate(_area.x, _area.y);
        for (let drawn = 0; drawn < nDefense; drawn++) {
            crc.save();
            let x = (Math.random() - 0.5) * _position.x;
            let y = -Math.random() * _position.y;
            crc.translate(x, y);
            crc.fill(defensePath);
            crc.restore();
        }
    }
    function drawVirus(_position, _area) {
        console.log("virus");
        let nVirus = 7;
        let virusPath = new Path2D();
        crc.fillStyle = "green";
        virusPath.arc(_area.x, _area.y, 25, 0, 2 * Math.PI);
        // void ctx.arc(x, y, radius, startAngle, endAngle [, anticlockwise]);
        crc.save();
        crc.translate(_area.x, _area.y);
        for (let drawn = 0; drawn < nVirus; drawn++) {
            crc.save();
            let x = (Math.random() - 0.5) * _position.x;
            let y = -Math.random() * _position.y;
            crc.translate(x, y);
            crc.fill(virusPath);
            crc.restore();
        }
    }
    function drawParticles(_position, _area) {
        console.log("particles");
        let nParticles = 250;
        let particlesPath = new Path2D();
        crc.fillStyle = "rgba(202, 183, 183, 0.1)";
        particlesPath.arc(_area.x, _area.y, 25, 0, 2 * Math.PI);
        // void ctx.arc(x, y, radius, startAngle, endAngle [, anticlockwise]);
        crc.save();
        crc.translate(_area.x, _area.y);
        for (let drawn = 0; drawn < nParticles; drawn++) {
            crc.save();
            let x = (Math.random() - 0.5) * _position.x;
            let y = -Math.random() * _position.y;
            crc.translate(x, y);
            crc.fill(particlesPath);
            crc.restore();
        }
    }
})(virus_l08 || (virus_l08 = {}));
//# sourceMappingURL=virus_l08.js.map