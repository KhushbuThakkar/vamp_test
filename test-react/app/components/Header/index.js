import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';
import A from './A';
import Img from './Img';
import NavBar from './NavBar';
import HeaderLink from './HeaderLink';
import Banner from './banner.jpg';
import messages from './messages';
import Button from '../Button';

function Header() {
  return (
    <div>
      {/* <A href="https://www.reactboilerplate.com/">
        <Img src={Banner} alt="react-boilerplate - Logo" />
      </A> */}
      <NavBar>
        <Button as={Link} to="/" variant="primary" mr={2}>
          <FormattedMessage {...messages.home} />
        </Button>
        <Button as={Link} to="/features" variant="secondary">
          <FormattedMessage {...messages.features} />
        </Button>
      </NavBar>
    </div>
  );
}

export default Header;
