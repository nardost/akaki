import React, { useEffect, useState } from "react";
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Email from "@material-ui/icons/Email";
// core components
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import CardFooter from "components/Card/CardFooter.js";
import CustomInput from "components/CustomInput/CustomInput.js";

import { login } from '../../actions';

import styles from "assets/jss/material-kit-react/views/loginPage.js";

import image from "assets/img/akaki.jpg";

const useStyles = makeStyles(styles);

export default function LoginPage(props) {

  const registration = useSelector(state => state.registration)
  const eml = registration.isRegistered ? registration.member.email : '';
  /**
   * State variables
   */
  const [email, setEmail] = useState(eml);
  const [pass, setPassword] = useState();
  const [loginError, setLoginError] = useState();

  /**
   * Redux - dispatch a login/logout action and more.
   */
  const dispatch = useDispatch();

  const classes = useStyles();
  const { ...rest } = props;

  useEffect(() => {
    /*
     * Do something when [email, password] change.
     */
  }, [email, pass]);

  const handleChange = target => {
    if (target.id === 'email') setEmail(target.value);
    if (target.id === 'pass') setPassword(target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const options = {
      url: `${process.env.REACT_APP_AKAKI_API_BASE_URL}/login`,
      method: 'post',
      headers: {
        'x-auth-token': process.env.REACT_APP_AKAKI_API_KEY,
        'Content-Type': 'application/json'
      },
      data: {
        email: email,
        password: pass
      }
    };
    axios(options)
      .then(({ config }) => {
        const authToken = config.headers['x-auth-token']
        localStorage.setItem('authToken', authToken)
        dispatch(login(authToken))
        props.history.push('/profile')
      })
      .catch(err => {
        props.history.push('/login');
        setEmail('')
        setPassword('')
        setLoginError('ያስገቡት ኢሜይል ወይም የምስጢር ቃል ትክክል አይደለም።');
      });
  };

  return (
    < div >
      {localStorage.getItem('authToken') && <Redirect to="/profile" />}
      <Header
        absolute
        color="transparent"
        brand="የአቃቂ ልጆች ኅብረት"
        rightLinks={<HeaderLinks />}
        {...rest}
      />
      <div
        className={classes.pageHeader}
        style={{
          backgroundImage: "url(" + image + ")",
          backgroundSize: "cover",
          backgroundPosition: "top center",
        }}
      >
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={4}>
              <Card>
                <form className={classes.form} onSubmit={handleSubmit}>
                  <CardHeader color="primary" className={classes.cardHeader}>
                    <h4>ኢሜይል እና የምስጢር ቃልዎን ያስገቡ።</h4>
                    <div className={classes.socialLine}></div>
                  </CardHeader>
                  <CardBody>
                    <CustomInput
                      labelText="ኢሜይል..."
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
                            <Email className={classes.inputIconsColor} />
                          </InputAdornment>
                        ),
                      }}
                    />
                    <CustomInput
                      labelText="የምስጢር ቃል..."
                      id="pass"
                      formControlProps={{
                        fullWidth: true,
                      }}
                      inputProps={{
                        type: "password",
                        value: pass,
                        onChange: ({ target }) => handleChange(target),
                        endAdornment: (
                          <InputAdornment position="end">
                            <Icon className={classes.inputIconsColor}>
                              lock_outline
                            </Icon>
                          </InputAdornment>
                        ),
                        autoComplete: "off",
                      }}
                    />
                  </CardBody>
                  <CardFooter>
                    <span style={{ color: "tomato" }}>{loginError}</span>
                  </CardFooter>
                  <CardFooter className={classes.cardFooter}>
                    <Button color="primary" size="lg" type="submit">
                      ለመግባት ይህን ይጫኑ
                    </Button>
                  </CardFooter>
                </form>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
        <Footer whiteFont />
      </div>
    </div >
  );
}

LoginPage.propTypes = {
  history: PropTypes.object
}
