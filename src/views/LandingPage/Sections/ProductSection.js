import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import { Warning, SupervisedUserCircle, EventNote } from "@material-ui/icons/";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";

const useStyles = makeStyles(styles);

export default function ProductSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>የአቃቂ ልጆች ሕብረት ለምን ተመሰረተ?</h2>
          <h5 className={classes.description}>
            ይህ በጎ አድራጎት ድርጅት መቼ እና ለን እንድተመሰረት ባጭሩ እዚህ ጋር ይጻፋል።
          </h5>
        </GridItem>
      </GridContainer>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="ሕዝባችን ከባድ አደጋ አጥልቶበታል"
              description="የኮሮና ቫይረስ ወረርሽኝ በዝቅተኛ የኑሮ ደረጃ ያሉ የከተማችን  ነዋሪዎች ላይ ሊደርስ የሚችለው ጉዳት ዘርፈ ብዙ እና ከባድ ነው። ስለዚህም..."
              icon={Warning}
              iconColor="danger"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="ሕብረታችን ለወገናችን አለኝታ ይሆናል"
              description="ኃያላን አገሮች እንኳ ያልቻሉት ወረርሽኝ በከተማችን ሊያደርስ ያለውን ጉዳት ተባብረን እንመክት..."
              icon={SupervisedUserCircle}
              iconColor="success"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="ከኮሮና ወረርሽኝ ባሻገር..."
              description="ይህ ጊዚያዊ አደጋ ካለፈም በኋላ ሕብረታችን ዘላቂ በሆነ መልኩ ለወገናችን በሚያስፈልገው ቦታ ኹሉ ለመገኘት ዕቅድ አለው..."
              icon={EventNote}
              iconColor="primary"
              vertical
            />
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
