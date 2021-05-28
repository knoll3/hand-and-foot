import React from "react";
import { Graphics } from "@inlet/react-pixi";

interface CardBackgroundProps {
    pos: { x: number; y: number };
    scale: { x: number; y: number };
}

const CardBackground: React.FC<CardBackgroundProps> = ({ pos, scale }) => {
    const CARD_PADDING = 5;
    const RECT_RADIUS = 5;
    const BACKGROUND_COLOR = 0xffffff;

    // Do not edit
    const WIDTH = 222;
    const HEIGHT = 323;

    const draw = React.useCallback((g) => {
        g.clear();
        g.beginFill(BACKGROUND_COLOR);
        g.drawRoundedRect(
            pos.x - (WIDTH * scale.x) / 2 - CARD_PADDING / 2,
            pos.y - (HEIGHT * scale.y) / 2 - CARD_PADDING / 2,
            WIDTH * scale.x + CARD_PADDING,
            HEIGHT * scale.y + CARD_PADDING,
            RECT_RADIUS
        );
        g.endFill();
    }, []);
    return <Graphics draw={draw} />;
};

export default CardBackground;
