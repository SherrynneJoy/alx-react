import React from 'react';
iimport { StyleSheet, css };

const styles = StyleSheet.create({
	login : {
		margin: "10px 10px"
	}
	screenSize : {
		'@media (max-width: 900px)': {
			display: 'block',
			marginTop: '5px',
			marginBottom: '10px'
		}
	}
});

function Login() {
  return (
    <main role='main' className={css(styles.login, styles.screenSize)}>
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
