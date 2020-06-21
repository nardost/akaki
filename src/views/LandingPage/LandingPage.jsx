import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";

import styles from "assets/jss/material-kit-react/views/landingPage.js";

// Sections for this page
import ProductSection from "./Sections/ProductSection.js";
import WorkSection from "./Sections/WorkSection.js";
import MembersList from "./Sections/MembersList.jsx";

import man from "assets/img/faces/man.png";
import woman from "assets/img/faces/woman.png";

const dashboardRoutes = [];

const useStyles = makeStyles(styles);

export default function LandingPage(props) {
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
  const { ...rest } = props;
  return (
    <div>
      <Header
        color="transparent"
        routes={dashboardRoutes}
        href="/"
        brand="የአቃቂ ልጆች ሕብረት"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 400,
          color: "white",
        }}
        {...rest}
      />
      <Parallax filter image={require("assets/img/akaki.jpg")}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <h1 className={classes.title}>የአቃቂ ልጆች ሕብረት</h1>
              <h4>
                እዚህጋ የአቃቂ ልጆች ሕብረትን ዓላማ የሚገልጽ አጠር ያለ ግን መስህብ ያለው ዓረፍተ-ነገር ወይም
                ሐረግ ይጻፋል።
              </h4>
              <br />
              <Button
                color="danger"
                size="lg"
                href="https://www.youtube.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fas fa-play" />
                ሰሞነኛ ቪዲዮ
              </Button>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <ProductSection />
          <MembersList members={members} />
          <WorkSection />
        </div>
      </div>
      <Footer />
    </div>
  );
}
