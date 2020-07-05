/*eslint-disable*/
import React from "react";
// react components for routing our app without refresh
import { Link } from "react-router-dom";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";

// @material-ui/icons
import { Apps } from "@material-ui/icons";
import SupervisedUserCircleIcon from "@material-ui/icons/SupervisedUserCircle";
import InfoIcon from "@material-ui/icons/Info";
import LiveHelpIcon from '@material-ui/icons/LiveHelp';
import FeedbackIcon from '@material-ui/icons/Feedback';

// core components
import CustomDropdown from "components/CustomDropdown/CustomDropdown.js";
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/material-kit-react/components/headerLinksStyle.js";

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
  const classes = useStyles();
  const isLoggedIn = localStorage.getItem('authToken') ? true : false;
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <Button color="transparent" className={classes.navLink}>
          <Link to="/" style={{ color: 'inherit' }}>
            <LiveHelpIcon className={classes.icons} /> ስለ ሕብረታችን
          </Link>
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button color="transparent" className={classes.navLink}>
          <Link to="/feedback" style={{ color: 'inherit' }}>
            <FeedbackIcon className={classes.icons} /> ነፃ አስተያየት
          </Link>
        </Button>
      </ListItem>
      {!isLoggedIn &&
        <ListItem className={classes.listItem}>
          <Button color="transparent" className={classes.navLink}>
            <Link to="/register" style={{ color: 'inherit' }}>
              <SupervisedUserCircleIcon className={classes.icons} /> ለመመዝገብ
          </Link>
          </Button>
          <Button color="transparent" className={classes.navLink}>
            <Link to="/login" style={{ color: 'inherit' }}>
              <SupervisedUserCircleIcon className={classes.icons} /> ለቋሚ አባላት
          </Link>
          </Button>
        </ListItem>
      }
      {isLoggedIn &&
        <ListItem className={classes.listItem}>
          <CustomDropdown
            noLiPadding
            buttonText="ተጨማሪ ገጾች"
            buttonProps={{
              className: classes.navLink,
              color: "transparent",
            }}
            buttonIcon={Apps}
            dropdownList={[
              <Link to="/profile" className={classes.dropdownLink}>
                የግል ገጽ
              </Link>,
              <Link to="/" className={classes.dropdownLink}>
                መዋጮ ለመክፈል...
              </Link>,
              <Link to="/" className={classes.dropdownLink}>
                ለጸሃፊዎች...
            </Link>,
              <Link to="/" className={classes.dropdownLink} onClick={() => localStorage.removeItem('authToken')}>
                ለመውጣት
            </Link>,
            ]}
          />
        </ListItem>
      }
      <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-twitter"
          title="Follow us on twitter"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            href="https://twitter.com/"
            target="_blank"
            color="transparent"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fab fa-twitter"} />
          </Button>
        </Tooltip>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-facebook"
          title="Follow us on facebook"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="transparent"
            href="https://www.facebook.com/"
            target="_blank"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fab fa-facebook"} />
          </Button>
        </Tooltip>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-tooltip"
          title="Follow us on instagram"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="transparent"
            href="https://www.instagram.com/"
            target="_blank"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fab fa-instagram"} />
          </Button>
        </Tooltip>
      </ListItem>
    </List>
  );
}
