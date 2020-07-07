import React from "react";
import { PropTypes } from 'prop-types';
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/workStyle.js";

const useStyles = makeStyles(styles);

export default function FeedbackSection(props) {
    const classes = useStyles();
    return (
        <div className={classes.section}>
            <GridContainer justify="center">
                <GridItem cs={12} sm={12} md={8}>
                    <h2 className={classes.title}>አስተያየትዎን ይስጡን።</h2>
                    <h5 className={classes.description}>
                        ከዓላማችን ጋር የተያያዘ ጥቆማ ፣ መስተካከል ያለበት ጉዳይ እንዲሁም ገንቢ የሆነ አስተያት ካለዎት ከዚህ
                        በታች ይጻፉልን።
                    </h5>
                    <form onSubmit={props.submitForm}>
                        <GridContainer>
                            {!props.isMember &&
                                <>
                                    <GridItem xs={12} sm={12} md={6}>
                                        <CustomInput
                                            labelText="ሙሉ ስም"
                                            id="name"
                                            formControlProps={{
                                                fullWidth: true,
                                            }}
                                            inputProps={{
                                                onChange: ({ target }) => props.changeState(target)
                                            }}
                                        />
                                    </GridItem>
                                    <GridItem xs={12} sm={12} md={6} />
                                    <GridItem xs={12} sm={12} md={6}>
                                        <CustomInput
                                            labelText="ኢሜይል አድራሻ"
                                            id="email"
                                            inputProps={{
                                                type: "email",
                                                onChange: ({ target }) => props.changeState(target)
                                            }}
                                            formControlProps={{
                                                fullWidth: true,
                                            }}
                                        />
                                    </GridItem>
                                    <GridItem xs={12} sm={12} md={6}>
                                        <CustomInput
                                            labelText="ስልክ ቁጥር"
                                            id="phone"
                                            inputProps={{
                                                type: "tel",
                                                onChange: ({ target }) => props.changeState(target)
                                            }}
                                            formControlProps={{
                                                fullWidth: true,
                                            }}
                                        />
                                    </GridItem>
                                </>
                            }
                            <CustomInput
                                labelText="አስተያየት / መልእክት / ጥቆማ (ከ 200 ፊደል ያልበለጠ)"
                                id="message"
                                formControlProps={{
                                    fullWidth: true,
                                    className: classes.textArea,
                                }}
                                inputProps={{
                                    multiline: true,
                                    rows: 2,
                                    maxLength: props.maxLength,
                                    onChange: ({ target }) => props.changeState(target)
                                }}
                            />
                            <GridItem xs={12} sm={12} md={4}>
                                <Button color="primary" type="submit">ለመላክ ይህን ይጫኑ</Button>
                            </GridItem>
                        </GridContainer>
                    </form>
                </GridItem>
            </GridContainer>
        </div>
    );
}

FeedbackSection.propTypes = {
    isMember: PropTypes.bool,
    submitForm: PropTypes.func,
    changeState: PropTypes.func,
    data: PropTypes.object,
    maxLength: PropTypes.number
}
