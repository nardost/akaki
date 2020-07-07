import React, { useState } from "react";
import { useHistory } from 'react-router-dom';
import axios from 'axios';
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
import FeedbackForm from "./Sections/FeedbackForm.jsx";

const dashboardRoutes = [];

const useStyles = makeStyles(styles);

export default function FeedbackPage(props) {
    const classes = useStyles();
    const history = useHistory();

    const { ...rest } = props;
    const authToken = localStorage.getItem('authToken')
    const isLoggedIn = authToken ? true : false;
    const MESSAGE_MAX_LENGTH = 200;

    const [state, setState] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
    })

    const handleChange = (target) => {
        setState({
            ...state,
            [target.id]: target.value
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const auth = authToken ? { 'x-auth-token': authToken } : {}
        const options = {
            url: `${process.env.REACT_APP_AKAKI_API_BASE_URL}/feedback/post`,
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                ...auth,
            },
            data: { ...state, message: state.message.substring(0, MESSAGE_MAX_LENGTH) }
        }
        axios(options)
            .then(({ config }) => {
                history.push('/')
            })
            .catch(err => {
                history.push('/error')
            })
    }

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
                    <FeedbackForm
                        isMember={isLoggedIn}
                        changeState={handleChange}
                        submitForm={handleSubmit}
                        data={{ ...state }}
                        maxLength={MESSAGE_MAX_LENGTH} />
                </div>
            </div>
            <Footer />
        </div>
    );
}
