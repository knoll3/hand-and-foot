import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => {
    return {
        root: {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "100vh",
            background: theme.palette.background.default,
        },
    };
});

export { useStyles };
