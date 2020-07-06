// core components
import React from "react";
import { PropTypes } from 'prop-types';

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";

// @material-ui/icons
import Icon from "@material-ui/core/Icon";
import EmailIcon from "@material-ui/icons/Email";
import PhoneIcon from '@material-ui/icons/Phone';
import MyLocationIcon from '@material-ui/icons/MyLocation';
import PersonIcon from '@material-ui/icons/Person';
import Warning from "@material-ui/icons/Warning";

import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";
import SnackbarContent from "components/Snackbar/SnackbarContent.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/workStyle.js";

const useStyles = makeStyles(styles);

export default function RegistrationSection(props) {

    const classes = useStyles();

    return (
        <div className={classes.section}>
            <GridContainer justify="center">
                <GridItem cs={12} sm={12} md={8}>
                    <h2 className={classes.title}>የምዝገባ ቅጽ።</h2>
                    <h4 className={classes.description}>ለመመዝገብ ስም ፣ ኢሜይል ፣ ስልክ ፣ መኖሪያ አገር እና የምስጢር ቃል ያስገቡ።</h4>
                    {
                        props.submissionError &&
                        <SnackbarContent
                            message={
                                <span>
                                    <b>ምዝገባው አልተሳካም። ምክንያቱ ከስር ተዘርዝሯል። ስህተቱን አስተካክለው እንደገና ይሞክሩ።</b><br />
                                    {props.submissionError.message}
                                </span>
                            }
                            close
                            color="danger"
                            icon={Warning} />
                    }
                    <form className={classes.form} onSubmit={props.submitForm}>
                        <GridContainer>
                            <GridItem xs={12} sm={12} md={6}>
                                <CustomInput
                                    labelText="ሙሉ ስም"
                                    id="name"
                                    formControlProps={{
                                        fullWidth: true,
                                    }}
                                    inputProps={{
                                        value: props.data.name,
                                        onChange: ({ target }) => props.changeState(target),//handleStateChange(target),
                                        endAdornment: (
                                            <InputAdornment position="end">
                                                <PersonIcon className={classes.inputIconsColor} />
                                            </InputAdornment>
                                        ),
                                    }}
                                />
                            </GridItem>
                            <GridItem xs={12} sm={12} md={6}>
                                <CustomInput
                                    labelText="ኢሜይል አድራሻ"
                                    id="email"
                                    formControlProps={{
                                        fullWidth: true,
                                    }}
                                    inputProps={{
                                        type: "email",
                                        value: props.data.email,
                                        onChange: ({ target }) => props.changeState(target),
                                        endAdornment: (
                                            <InputAdornment position="end">
                                                <EmailIcon className={classes.inputIconsColor} />
                                            </InputAdornment>
                                        ),
                                    }}
                                />
                            </GridItem>
                            <GridItem xs={12} sm={12} md={6}>
                                <CustomInput
                                    labelText="መኖርያ አገር"
                                    id="country"
                                    formControlProps={{
                                        fullWidth: true,
                                    }}
                                    inputProps={{
                                        value: props.data.country,
                                        onChange: ({ target }) => props.changeState(target),
                                        endAdornment: (
                                            <InputAdornment position="end">
                                                <MyLocationIcon className={classes.inputIconsColor} />
                                            </InputAdornment>
                                        ),
                                    }}
                                />
                            </GridItem>
                            <GridItem xs={12} sm={12} md={6}>
                                <CustomInput
                                    labelText="ስልክ ከነ አገር ኮድ (ለምሳሌ፦ +2519111234567)"
                                    id="phone"
                                    formControlProps={{
                                        fullWidth: true,
                                    }}
                                    inputProps={{
                                        type: "tel",
                                        value: props.data.phone,
                                        onChange: ({ target }) => props.changeState(target),
                                        endAdornment: (
                                            <InputAdornment position="end">
                                                <PhoneIcon className={classes.inputIconsColor} />
                                            </InputAdornment>
                                        ),
                                    }}
                                />
                            </GridItem>
                            <GridItem xs={12} sm={12} md={6}>
                                <CustomInput
                                    labelText="የምስጢር ቃል"
                                    id="password"
                                    type="password"
                                    inputProps={{
                                        type: "password",
                                        value: props.data.password,
                                        onChange: ({ target }) => props.changeState(target),
                                        endAdornment: (
                                            <InputAdornment position="end">
                                                <Icon className={classes.inputIconsColor}>lock_outline</Icon>
                                            </InputAdornment>
                                        ),
                                        autoComplete: "off",
                                    }}
                                    formControlProps={{
                                        fullWidth: true,
                                    }}
                                />
                            </GridItem>
                            <GridItem xs={12} sm={12} md={6}>
                                <CustomInput
                                    labelText="የምስጢር ቃል በድጋሚ"
                                    id="pass2"
                                    type="password"
                                    inputProps={{
                                        type: "password",
                                        value: props.data.pass2,
                                        onChange: ({ target }) => props.changeState(target),
                                        endAdornment: (
                                            <InputAdornment position="end">
                                                <Icon className={classes.inputIconsColor}>lock_outline</Icon>
                                            </InputAdornment>
                                        ),
                                        autoComplete: "off",
                                    }}
                                    formControlProps={{
                                        fullWidth: true,
                                    }}
                                />
                            </GridItem>
                            <GridItem xs={12} sm={12} md={4}>
                                <Button color="primary" type="submit">ለመመዝገብ ይህን ይጫኑ</Button>
                            </GridItem>
                        </GridContainer>
                    </form>
                </GridItem>
            </GridContainer>
        </div>
    );
}

RegistrationSection.propTypes = {
    changeState: PropTypes.func,
    submitForm: PropTypes.func,
    data: PropTypes.object,
    submissionError: PropTypes.object,
}
