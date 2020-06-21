import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import Member from "../../LandingPage/Sections/Member";

import styles from "assets/jss/material-kit-react/views/landingPageSections/teamStyle.js";

import man from "assets/img/faces/man.png";
import woman from "assets/img/faces/woman.png";

const useStyles = makeStyles(styles);

export default function MembersList() {
  //Get this from the backend service
  const members = [
    {
      id: 1,
      image: man,
      name: "መስፍን ኃይሉ",
      role: "ሊቀ-መንበር/ፀሐፊ/የሕዝብ ግንኙነት ኃላፊ",
      description: "አኚህ ግለሰብ ለአቃቂ ልጆች ሕብረት እያደረጉት ያለው አስተዋጽኦ እዚህጋ በዝርዝር ይጻፋል።",
    },
    {
      id: 2,
      image: woman,
      name: "ቀሲስ ዶክተር ሰለሞን",
      role: "ሊቀ-መንበር/ፀሐፊ/የሕዝብ ግንኙነት ኃላፊ",
      description: "አኚህ ግለሰብ ለአቃቂ ልጆች ሕብረት እያደረጉት ያለው አስተዋጽኦ እዚህጋ በዝርዝር ይጻፋል።",
    },
    {
      id: 3,
      image: man,
      name: "ማህሌት ከበደ",
      role: "ሊቀ-መንበር/ፀሐፊ/የሕዝብ ግንኙነት ኃላፊ",
      description: "አኚህ ግለሰብ ለአቃቂ ልጆች ሕብረት እያደረጉት ያለው አስተዋጽኦ እዚህጋ በዝርዝር ይጻፋል።",
    },
    {
      id: 4,
      image: man,
      name: "ኤፍሬም ደጉ",
      role: "ሊቀ-መንበር/ፀሐፊ/የሕዝብ ግንኙነት ኃላፊ",
      description: "አኚህ ግለሰብ ለአቃቂ ልጆች ሕብረት እያደረጉት ያለው አስተዋጽኦ እዚህጋ በዝርዝር ይጻፋል።",
    },
  ];
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
