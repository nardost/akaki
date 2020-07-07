import React, { useState } from "react";
import { useHistory, Redirect } from 'react-router-dom';
import axios from 'axios';
import { useDispatch } from 'react-redux';
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
import RegistrationSection from "./Sections/RegistrationSection.jsx";

import { register } from '../../actions';

const dashboardRoutes = [];

const useStyles = makeStyles(styles);

export default function RegistrationPage(props) {

    const dispatch = useDispatch();
    const history = useHistory();
    const classes = useStyles();

    const { ...rest } = props;

    /**
     * State
     */
    const [state, setState] = useState({
        name: '',
        email: '',
        phone: '',
        country: '',
        password: '',
        pass2: ''
    });
    const [submissionError, setSubmissionError] = useState();
    const handleChange = (target) => {
        setState({
            ...state,
            [target.id]: target.value
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const options = {
            url: `${process.env.REACT_APP_AKAKI_API_BASE_URL}/members/register`,
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            data: { ...state }
        }
        axios(options)
            .then(({ config }) => {
                dispatch(register(options.data))
                history.push('/confirm')
            })
            .catch(err => {
                setSubmissionError({ message: err.response.data })
            })
    }

    return (
        <div>
            {localStorage.getItem('authToken') && <Redirect to="/profile" />}
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
                    <RegistrationSection
                        data={{ ...state }}
                        changeState={handleChange}
                        submitForm={handleSubmit}
                        submissionError={submissionError} />
                </div>
            </div>
            <Footer />
        </div>
    );
}
