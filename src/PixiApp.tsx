import React from "react";
import "./App.css";
import ProjectSpace from "./components/ProjectSpace";
import { useStyles } from "./styles";

const PixiApp = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <ProjectSpace />
        </div>
    );
};

export default PixiApp;
