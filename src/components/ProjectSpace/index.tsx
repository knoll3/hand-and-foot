import React, { createRef, useEffect, useState } from "react";
import { Container, Graphics, Sprite, Stage } from "@inlet/react-pixi";
import { useStyles } from "./styles";
import GameSpace from "pixi/GameSpace";
import card from "assets/10_of_clubs.png";
import Card from "components/Card";

const ProjectSpace: React.FC = () => {
    const BACKGROUND_COLOR = 0x888888;
    const classes = useStyles();

    return (
        <React.Fragment>
            <Stage
                className={classes.stage}
                height={760}
                width={1280}
                options={{ backgroundColor: BACKGROUND_COLOR }}
            >
                <Card name="3_of_spades" pos={{ x: 200, y: 300 }} />
            </Stage>
        </React.Fragment>
    );
};

export default ProjectSpace;
