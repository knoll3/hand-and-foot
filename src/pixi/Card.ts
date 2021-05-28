import { Sprite } from "pixi.js";

class Card {
    public sprite: Sprite;

    private image: string;
    private rank: string;
    private suit: string;

    constructor(rank: string, suit: string, image: string) {
        this.rank = rank;
        this.suit = suit;
        this.image = image;

        this.sprite = Sprite.from(this.image);
        this.sprite.anchor.set(0);
        this.sprite.x = 500;
        this.sprite.y = 300;
    }

    draw() {
        //
    }
}

export default Card;
