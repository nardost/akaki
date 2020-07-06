import React from "react";
import { Redirect } from "react-router-dom";
import { useSelector } from 'react-redux';
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";

import styles from "assets/jss/material-kit-react/views/landingPage.js";

// Sections for this page
import ConfirmationSection from "./Sections/ConfirmationSection.jsx";

const dashboardRoutes = [];

const useStyles = makeStyles(styles);

export default function ConfirmationPage(props) {
    const classes = useStyles();
    const { ...rest } = props;

    const isRegistered = useSelector(state => state.registration.isRegistered)

    return (
        <div>
            <Header
                color="transparent"
                routes={dashboardRoutes}
                href="/"
                brand="የአቃቂ ልጆች ኅብረት"
                rightLinks={<HeaderLinks />}
                fixed
                changeColorOnScroll={{
                    height: 400,
                    color: "white",
                }}
                {...rest}
            />
            <Parallax small filter image={require("assets/img/akaki.jpg")} />
            <div className={classNames(classes.main, classes.mainRaised)}>
                <div className={classes.container}>
                    {isRegistered && <ConfirmationSection />}
                    {!isRegistered && <Redirect to="/" />}
                </div>
            </div>
            <Footer />
        </div>
    );
}
