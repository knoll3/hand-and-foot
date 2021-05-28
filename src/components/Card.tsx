import React from "react";
import { Container, Graphics, Sprite } from "@inlet/react-pixi";
import CardBackground from "components/CardBackground";

interface CardProps {
    pos: { x: number; y: number };
    name: string;
}

const Card: React.FC<CardProps> = ({ pos, name }) => {
    const SCALE = { x: 0.5, y: 0.5 };
    const ANCHOR = 0.5;

    return (
        <Container>
            <CardBackground pos={pos} scale={SCALE} />
            <Sprite
                image={require(`../assets/${name}.png`).default}
                scale={{ x: SCALE.x, y: SCALE.y }}
                anchor={ANCHOR}
                x={pos.x}
                y={pos.y}
            />
        </Container>
    );
};

export default Card;
