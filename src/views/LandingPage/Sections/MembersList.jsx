import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import Member from "../../LandingPage/Sections/Member";

import styles from "assets/jss/material-kit-react/views/landingPageSections/teamStyle.js";

const useStyles = makeStyles(styles);

export default function MembersList(props) {
  const { members } = props;
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <h2 className={classes.title}>መስራች አባላት / አስተባባሪዎች</h2>
      <div>
        <GridContainer>
          {members.map((member) => (
            <Member key={member.id} member={member} />
          ))}
        </GridContainer>
      </div>
    </div>
  );
}

MembersList.propTypes = {
  member: PropTypes.array.isRequired,
};