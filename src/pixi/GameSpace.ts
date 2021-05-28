import { PixiComponent } from "@inlet/react-pixi";
import { Container, Graphics, Sprite } from "pixi.js";
import PIXI from "pixi.js";
import Deck from "pixi/Deck";
import Card from "pixi/Card";

export default PixiComponent<{}, Container>("GameSpace", {
    create: (props) => {
        const gameSpace = new Container();

        // const card = new Card("10", "clubs", "10_of_clubs.png");

        const bunny = Sprite.from("../assets/10_of_clubs.png");

        // center the sprite's anchor point
        bunny.anchor.set(0.5);

        // move the sprite to the center of the screen
        bunny.x = 500;
        bunny.y = 500;

        gameSpace.addChild(bunny);

        console.log(gameSpace);

        // Listen for animate update
        // app.ticker.add((delta) => {
        // // just for fun, let's rotate mr rabbit a little
        // // delta is 1 if running at 100% performance
        // // creates frame-independent transformation
        // bunny.rotation += 0.1 * delta;
        // });

        return gameSpace;
    },
});
