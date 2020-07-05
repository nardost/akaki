// core components
import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { PropTypes } from 'prop-types';
import axios from 'axios';
import { useDispatch } from 'react-redux';

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";

// @material-ui/icons
import Icon from "@material-ui/core/Icon";
import EmailIcon from "@material-ui/icons/Email";
import PhoneIcon from '@material-ui/icons/Phone';
import MyLocationIcon from '@material-ui/icons/MyLocation';
import PersonIcon from '@material-ui/icons/Person';

import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/workStyle.js";

import { register } from '../../../actions';

const useStyles = makeStyles(styles);

export default function RegistrationSection(props) {

    /**
     * State
     */
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [country, setCountry] = useState('');
    const [password, setPassword] = useState('');
    const [pass2, setPass2] = useState('');

    const dispatch = useDispatch();
    const history = useHistory();

    const handleChange = (target) => {
        if (target.id === 'name') setName(target.value)
        if (target.id === 'email') setEmail(target.value)
        if (target.id === 'phone') setPhone(target.value)
        if (target.id === 'country') setCountry(target.value)
        if (target.id === 'password') setPassword(target.value)
        if (target.id === 'pass2') setPass2(target.value)
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
            data: {
                name,
                email,
                phone,
                country,
                password,
                pass2
            }
        }
        axios(options)
            .then(({ config }) => {
                console.log(config)
                dispatch(register(options.data))
                //return <Redirect to="/confirm" />
                history.push('/confirm')
            })
            .catch(err => {
                console.log(err)
            })
    }

    useEffect(() => {
        /*
         * Do something when [email, ...] change.
         */
    }, [name, email, phone, country, password, pass2]);

    const classes = useStyles();

    return (
        <div className={classes.section}>
            <GridContainer justify="center">
                <GridItem cs={12} sm={12} md={8}>
                    <h2 className={classes.title}>የምዝገባ ቅጽ።</h2>
                    <h4 className={classes.description}>ለመመዝገብ ስም ፣ ኢሜይል ፣ ስልክ ፣ መኖሪያ አገር እና የምስጢር ቃል ያስገቡ።</h4>
                    <form className={classes.form} onSubmit={handleSubmit}>
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
                                        onChange: ({ target }) => handleChange(target),
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
                                        onChange: ({ target }) => handleChange(target),
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
                                        onChange: ({ target }) => handleChange(target),
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
                                        onChange: ({ target }) => handleChange(target),
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
                                        value: password,
                                        onChange: ({ target }) => handleChange(target),
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
                                        value: pass2,
                                        onChange: ({ target }) => handleChange(target),
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
    history: PropTypes.object
}
