const width = 1250;
const height = 565;

let balls;

window.setup = function () {
    this.createCanvas(1250, 565);
    this.colorMode(this.HSB);
    balls = Array.from({ length: 150 }).map(() => {
        const p = p5.Vector.fromAngle(
            this.random() * 2 * Math.PI,
            this.random() * 300
        );
        return {
            p: p.copy().add(width / 2, height / 2),
            r: 30 + this.random() * 30,
            c: this.random(255),
            v: p.copy().div(30),
        };
    });
};

window.draw = function () {
    this.background(255);
    balls.forEach(({ p, r, c, v }) => {
        this.fill(c, 255, 255);
        this.ellipse(p.x, p.y, r);
        p.add(v);

        if (p.x < 0) {
            v.x = abs(v.x);
        } else if (p.x > width) {
            v.x = -abs(v.x);
        }
        if (p.y < 0) {
            v.y = abs(v.y);
        } else if (p.y > height) {
            v.y = -abs(v.y);
        }

        v.y += 1;
    });
};
