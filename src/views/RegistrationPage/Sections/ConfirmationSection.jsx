// core components
import React from "react";
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";

// @material-ui/icons
import EmailIcon from "@material-ui/icons/Email";
import PhoneIcon from '@material-ui/icons/Phone';
import MyLocationIcon from '@material-ui/icons/MyLocation';
import PersonIcon from '@material-ui/icons/Person';

import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/workStyle.js";

const useStyles = makeStyles(styles);

export default function ConfirmationSection(props) {

    /**
     * State
     */
    const name = useSelector(state => state.registration.member.name)
    const email = useSelector(state => state.registration.member.email)
    const phone = useSelector(state => state.registration.member.phone)
    const country = useSelector(state => state.registration.member.country)

    const classes = useStyles();
    const history = useHistory();

    return (
        <div className={classes.section}>
            <GridContainer justify="center">
                <GridItem cs={12} sm={12} md={8}>
                    <h2 className={classes.title}>እንኳን ደህና መጡ።</h2>
                    <h4 className={classes.description}>ምዝገባውን ለማጠናቀቅ ወደተመዘገቡበት ኢሜይል አድራሻ መመሪያ የያዘ መልእክት ልከናል።<br />መልእክቱን ይክፈቱና መመሪያውን ይፈጽሙ።</h4>
                    <form className={classes.form}>
                        <GridContainer>
                            <GridItem xs={12} sm={12} md={6}>
                                <CustomInput
                                    labelText="ሙሉ ስም"
                                    id="name"
                                    formControlProps={{
                                        fullWidth: true,
                                    }}
                                    inputProps={{
                                        value: name,
                                        disabled: true,
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
                                        value: email,
                                        disabled: true,
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
                                        value: country,
                                        disabled: true,
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
                                        value: phone,
                                        disabled: true,
                                        endAdornment: (
                                            <InputAdornment position="end">
                                                <PhoneIcon className={classes.inputIconsColor} />
                                            </InputAdornment>
                                        ),
                                    }}
                                />
                            </GridItem>
                            <GridItem xs={12} sm={12} md={4}>
                                <Button color="primary" onClick={() => history.push('/login')}>ለመግባት ይህን ይጫኑ</Button>
                            </GridItem>
                        </GridContainer>
                    </form>
                </GridItem>
            </GridContainer>
        </div>
    );
}
