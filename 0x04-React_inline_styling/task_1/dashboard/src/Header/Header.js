import React from 'react';
import './Header.css';
import logo from '../assets/holberton-logo.jpg';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
	header: {
		display: "flex",
		color: "#e0344a",
		alignItems: "center",
		borderBottom: "thick solid #e0344a"
	}
	logo: {
		display: "flex",
		marginTop: "10px"
	}
});

function Header() {
  return (
    <header className={css(styles.header)}>
      <img src={logo} className={css(styles.logo)} alt='logo' />
      <h1>School dashboard</h1>
    </header>
  );
}

export default Header;
