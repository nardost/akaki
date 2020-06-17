import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/teamStyle.js";

import man from "assets/img/faces/man.png";
import woman from "assets/img/faces/woman.png";

const useStyles = makeStyles(styles);

export default function TeamSection() {
  const classes = useStyles();
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  return (
    <div className={classes.section}>
      <h2 className={classes.title}>መስራች አባላት / አስተባባሪዎች</h2>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={man} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
                መስፍን ኃይሉ
                <br />
                <small className={classes.smallTitle}>
                  ሊቀ-መንበር/ፀሐፊ/የሕዝብ ግንኙነት ኃላፊ
                </small>
              </h4>
              <CardBody>
                <p className={classes.description}>
                  አኚህ ግለሰብ ለአቃቂ ልጆች ሕብረት እያደረጉት ያለው አስተዋጽኦ እዚህጋ በዝርዝር ይጻፋል።
                </p>
              </CardBody>
              <CardFooter className={classes.justifyCenter}>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-twitter"} />
                </Button>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-instagram"} />
                </Button>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-facebook"} />
                </Button>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={man} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
                ቀሲስ ዶክተር ሰለሞን
                <br />
                <small className={classes.smallTitle}>
                  ሊቀ-መንበር/ፀሐፊ/የሕዝብ ግንኙነት ኃላፊ
                </small>
              </h4>
              <CardBody>
                <p className={classes.description}>
                  አኚህ ግለሰብ ለአቃቂ ልጆች ሕብረት እያደረጉት ያለው አስተዋጽኦ እዚህጋ በዝርዝር ይጻፋል።
                </p>
              </CardBody>
              <CardFooter className={classes.justifyCenter}>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-twitter"} />
                </Button>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-linkedin"} />
                </Button>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={woman} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
                ማህሌት ከበደ
                <br />
                <small className={classes.smallTitle}>
                  ሊቀ-መንበር/ፀሐፊ/የሕዝብ ግንኙነት ኃላፊ
                </small>
              </h4>
              <CardBody>
                <p className={classes.description}>
                  አኚህ ግለሰብ ለአቃቂ ልጆች ሕብረት እያደረጉት ያለው አስተዋጽኦ እዚህጋ በዝርዝር ይጻፋል።
                </p>
              </CardBody>
              <CardFooter className={classes.justifyCenter}>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-twitter"} />
                </Button>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-instagram"} />
                </Button>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-facebook"} />
                </Button>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={man} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
                ኤፍሬም ደጉ
                <br />
                <small className={classes.smallTitle}>
                  ሊቀ-መንበር/ፀሐፊ/የሕዝብ ግንኙነት ኃላፊ
                </small>
              </h4>
              <CardBody>
                <p className={classes.description}>
                  አኚህ ግለሰብ ለአቃቂ ልጆች ሕብረት እያደረጉት ያለው አስተዋጽኦ እዚህጋ በዝርዝር ይጻፋል።
                </p>
              </CardBody>
              <CardFooter className={classes.justifyCenter}>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-twitter"} />
                </Button>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-instagram"} />
                </Button>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-facebook"} />
                </Button>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={man} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
                ሳሙኤል ከበደ
                <br />
                <small className={classes.smallTitle}>
                  ሊቀ-መንበር/ፀሐፊ/የሕዝብ ግንኙነት ኃላፊ
                </small>
              </h4>
              <CardBody>
                <p className={classes.description}>
                  አኚህ ግለሰብ ለአቃቂ ልጆች ሕብረት እያደረጉት ያለው አስተዋጽኦ እዚህጋ በዝርዝር ይጻፋል።
                </p>
              </CardBody>
              <CardFooter className={classes.justifyCenter}>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-twitter"} />
                </Button>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-instagram"} />
                </Button>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-facebook"} />
                </Button>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={man} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
                ብርሃኑ ክብረት
                <br />
                <small className={classes.smallTitle}>
                  ሊቀ-መንበር/ፀሐፊ/የሕዝብ ግንኙነት ኃላፊ
                </small>
              </h4>
              <CardBody>
                <p className={classes.description}>
                  አኚህ ግለሰብ ለአቃቂ ልጆች ሕብረት እያደረጉት ያለው አስተዋጽኦ እዚህጋ በዝርዝር ይጻፋል።
                </p>
              </CardBody>
              <CardFooter className={classes.justifyCenter}>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-twitter"} />
                </Button>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-instagram"} />
                </Button>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-facebook"} />
                </Button>
              </CardFooter>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
