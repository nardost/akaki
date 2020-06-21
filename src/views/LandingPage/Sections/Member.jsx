import React from "react";
import GridItem from "../../../components/Grid/GridItem";
import Card from "../../../components/Card/Card";
import CardBody from "../../../components/Card/CardBody";
import CardFooter from "../../../components/Card/CardFooter";
import Button from "components/CustomButtons/Button.js";
import classNames from "classnames";
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";

import styles from "assets/jss/material-kit-react/views/landingPageSections/teamStyle.js";

const useStyles = makeStyles(styles);

export default function Member(props) {
  const { member } = props;
  const classes = useStyles();
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  return (
    <GridItem xs={12} sm={12} md={4}>
      <Card plain>
        <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
          <img src={member.image} alt="..." className={imageClasses} />
        </GridItem>
        <h4 className={classes.cardTitle}>
          {member.name}
          <br />
          <small className={classes.smallTitle}>{member.role}</small>
        </h4>
        <CardBody>
          <p className={classes.description}>{member.description}</p>
        </CardBody>
        <CardFooter className={classes.justifyCenter}>
          <Button justIcon color="transparent" className={classes.margin5}>
            <i className={classes.socials + " fab fa-twitter"} />
          </Button>
          <Button justIcon color="transparent" className={classes.margin5}>
            <i className={classes.socials + " fab fa-instagram"} />
          </Button>
          <Button justIcon color="transparent" className={classes.margin5}>
            <i className={classes.socials + " fab fa-facebook"} />
          </Button>
        </CardFooter>
      </Card>
    </GridItem>
  );
}

Member.propTypes = {
  member: PropTypes.object.isRequired,
};
