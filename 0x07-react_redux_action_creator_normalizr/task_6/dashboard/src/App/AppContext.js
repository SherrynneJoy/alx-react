import React from 'react';

export default const user = {
	email: '',
	password: '',
	isLoggedIn: false
}

export default function logOut() {
}

export const AppContext = React.createContext({user, logOut})
