import React, { useState, useEffect } from "react";
import axios from 'axios';
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import Member from "./Member";

import styles from "assets/jss/material-kit-react/views/landingPageSections/teamStyle.js";

import man from "assets/img/faces/man.png";
import woman from "assets/img/faces/woman.png";
import person from "assets/img/faces/person.jpg";

const useStyles = makeStyles(styles);

export default function MembersList() {
    const classes = useStyles();
    const [members, setMembers] = useState([]);
    useEffect(() => {
        const config = {
            url: `${process.env.REACT_APP_AKAKI_API_BASE_URL}/members/list`,
            method: 'GET',
            headers: {
                'x-auth-token': process.env.REACT_APP_AKAKI_API_KEY
            }
        }
        axios(config)
            .then(list => {
                setMembers(list.data)
            })
            .catch(err => {
                setMembers([
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
                ]);
            })
    }, []);
    /**
     * Post process - if images are null, set them to placeholders...
     */
    members.map(member => {
        member.image = person;
        member.role = "ሊቀ-መንበር/ፀሐፊ/የሕዝብ ግንኙነት ኃላፊ";
        member.description = "አኚህ ግለሰብ ለአቃቂ ልጆች ሕብረት እያደረጉት ያለው አስተዋጽኦ እዚህጋ በዝርዝር ይጻፋል።";
        return member;
    })
    return (
        <div className={classes.section}>
            <h2 className={classes.title}>መስራች አባላት / አስተባባሪዎች</h2>
            <div>
                <GridContainer>
                    {members.map((member) => (<Member key={member._id} member={member} />))}
                </GridContainer>
            </div>
        </div>
    );
}

MembersList.propTypes = {
    members: PropTypes.array.isRequired,
};