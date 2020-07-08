import React, { useState, useEffect } from "react";
import { useHistory, Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';

// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons

// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import Button from "components/CustomButtons/Button.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";

import avatar from "assets/img/faces/man.png";

import styles from "assets/jss/material-kit-react/views/profilePage.js";

const useStyles = makeStyles(styles);

export default function ProfilePage(props) {
  const classes = useStyles();
  const history = useHistory();

  const { ...rest } = props;

  const [profile, setProfile] = useState({
    name: '',
    email: '',
    phone: '',
    country: '',
  });
  const authToken = localStorage.getItem('authToken')
  useEffect(() => {

    if (!authToken) {
      return history.push('/login')
    }
    const options = {
      url: `${process.env.REACT_APP_AKAKI_API_BASE_URL}/members/profile`,
      method: 'get',
      headers: {
        'Accept': 'application/json',
        'x-auth-token': authToken,
      }
    }
    axios(options)
      .then(result => {
        setProfile(result.data)
      })
      .catch(err => {
        console.log(err)
      })
  }, []);

  const { name, email, phone, country } = profile

  console.log(name)

  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );

  return (
    <div>

      <Header
        color="transparent"
        brand="የአቃቂ ልጆች ኅብረት"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 200,
          color: "white",
        }}
        {...rest}
      />
      <Parallax small filter image={require("assets/img/akaki.jpg")} />
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div>
          <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={6}>
                <div className={classes.profile}>
                  <div>
                    <img src={avatar} alt="..." className={imageClasses} />
                  </div>
                  <div className={classes.name}>
                    <h3 className={classes.title}>{name}</h3>
                    <h6>{email}</h6>
                    <Button justIcon link className={classes.margin5}>
                      <i className={"fab fa-twitter"} />
                    </Button>
                    <Button justIcon link className={classes.margin5}>
                      <i className={"fab fa-instagram"} />
                    </Button>
                    <Button justIcon link className={classes.margin5}>
                      <i className={"fab fa-facebook"} />
                    </Button>
                  </div>
                </div>
              </GridItem>
            </GridContainer>
            <div className={classes.description}>
              <p>
                የቋሚ አባል የግል ገጽ። አሁን ገና አዲስ ገጽ ስለሆነ ባዶ ገጽ ነው። ወደፊት ወርሃዊ መዋጮ እና ሌሎች እንቅስቃሴዎች ሲጀመሩ አባሉን የሚመለከቱ መረጃዎች እዚህ ጋር ይዘረዘራሉ... {" "}
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
