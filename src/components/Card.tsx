import React, { RefObject, useEffect } from "react";
import { Container, Graphics, Sprite } from "@inlet/react-pixi";
import CardBackground from "components/CardBackground";

interface CardProps {
    pos: { x: number; y: number };
    name: string;
}

const Card: React.FC<CardProps> = ({ pos, name }) => {
    const SCALE = { x: 0.5, y: 0.5 };
    const ANCHOR = 0.5;

    const containerRef = React.createRef<any>();

    const [faceDown, setFaceDown] = React.useState(false);
    const [hover, setHover] = React.useState(false);

    const onPointerUp = () => {
        setFaceDown(!faceDown);
    };

    const onPointerEnter = () => {
        setHover(true);
    };

    const onPointerExit = () => {
        setHover(false);
    };

    useEffect(() => {
        if (!containerRef || !containerRef.current) return;
        const container = containerRef.current;
        container.on("pointerup", onPointerUp);
        container.on("pointerover", onPointerEnter);
        container.on("pointerout", onPointerExit);

        return () => {
            container.removeAllListeners();
        };
    }, [containerRef]);

    return (
        <Container ref={containerRef} interactive>
            <CardBackground pos={pos} scale={SCALE} hover={hover} />
            <Sprite
                image={
                    require(`../assets/${faceDown ? "back" : name}.png`).default
                }
                scale={{ x: SCALE.x, y: SCALE.y }}
                anchor={ANCHOR}
                x={pos.x}
                y={pos.y}
            />
        </Container>
    );
};

export default Card;
