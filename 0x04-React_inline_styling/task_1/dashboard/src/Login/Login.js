import React from 'react';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
	login: {
		margin: "10px 10px"
	}
});

function Login() {
  return (
    <main role='main' className={css(styles.login)}>
      <p>Login to access the full dashboard</p>
      <label htmlFor='email'>Email</label>
      <input type='email' name='email' id='email' />
      <label htmlFor='password'>Password</label>
      <input type='password' name='password' id='password' />
      <button type='button'>OK</button>
    </main>
  );
}

export default Login;
