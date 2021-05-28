class Vector {
    x: number;
    y: number;

    static Zero = new Vector(0, 0);
    static Up = new Vector(0, -1);
    static Right = new Vector(1, 0);
    static Down = new Vector(0, 1);
    static Left = new Vector(-1, 0);

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }
}

export default Vector;
