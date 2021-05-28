import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        flexDirection: "column",
    },
    formControl: {
        margin: theme.spacing(1),
        width: 120,
    },
    label: {
        color: "white",
        fontSize: 22,
    },
    selectorContainer: {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-end",
        marginBottom: theme.spacing(2),
    },
    select: {
        width: 120,
    },
    stage: {
        border: "3px solid #666",
        borderRadius: 5,
        boxShadow: "5px 5px 20px 0px rgba(0,0,0,0.75)",
    },
}));

export { useStyles };
