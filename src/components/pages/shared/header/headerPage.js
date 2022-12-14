import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex", alignItems: "center"
    },
    image:{
        marginRight: 10
    }
  }));

const HeaderPage = ({textLabel, icon}) => {
    const classes = useStyles();
  return (
    <div className={classes.root}>
      <img
        width={50}
        src={icon}
        className={classes.image}
      />
      <Typography variant="h4">{textLabel}</Typography>
    </div>
  );
};

export default HeaderPage;
