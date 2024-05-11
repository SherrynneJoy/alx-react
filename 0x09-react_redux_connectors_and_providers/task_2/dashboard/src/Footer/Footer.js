import React from 'react';
import './Footer.css';
import { getFullYear, getFooterCopy } from '../utils/utils';

function Footer(props) {
	const user = props.user;
  return (
    <AppContext.Consumer>
    {(context) => (
      <footer className='footer'>
        <p>
          Copyright {getFullYear()} - {getFooterCopy(true)}
        </p>
	{context.user.isLoggedIn && (
	  <p className={css(styles.paragraph)}>
	    <a>Contact us</a>
	  </p>
	)}
      </footer>
    )}
    </AppContext.Consumer >
  );
}

export default function mapStateToProps(state) {
	return {
		user: state.get('user')
	};
}

export default connect(mapStateToProps)(Footer)
export default Footer;
