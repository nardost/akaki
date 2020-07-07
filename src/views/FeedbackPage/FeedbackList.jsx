import React, { useState, useEffect } from "react";
import axios from 'axios';
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "../../components/Grid/GridContainer.js";
import Feedback from "./Sections/Feedback";

import styles from "../../assets/jss/material-kit-react/views/landingPageSections/teamStyle.js";

const useStyles = makeStyles(styles);

export default function FeedbackList() {
    const classes = useStyles();

    //const feedback = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const [feedback, setFeedback] = useState([]);

    useEffect(() => {
        const options = {
            url: `${process.env.REACT_APP_AKAKI_API_BASE_URL}/feedback/list`,
            method: 'get',
            headers: {
                'Accept': 'application/json',
            }
        }
        axios(options)
            .then((list) => {
                setFeedback(list.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, []);
    return (
        <div className={classes.section}>
            <h2 className={classes.title}>እስካሁን የተሰጡ አስተያየቶች</h2>
            <div>
                <GridContainer style={{ marginTop: 15 }}>
                    {feedback.map((f) => (<Feedback key={f._id} feedback={f} />))}
                </GridContainer>
            </div>
        </div>
    );
}