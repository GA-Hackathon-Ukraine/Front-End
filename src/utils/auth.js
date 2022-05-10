import { supabase } from './supabaseClient';
import { useState, useEffect, useContext, createContext } from 'react';

const authContext = createContext();

export const AuthProvider = ({ children }) => {
	const auth = useProvideAuth();
	return <authContext.Provider value={auth}>{children}</authContext.Provider>;
};

export const useAuth = () => {
	return useContext(authContext);
};

const useProvideAuth = () => {
	const [ user, setUser ] = useState(null);

	const login = async (email, password) => {
		const { user, session, error } = await supabase.auth.signIn({ email: email, password: password });

		if (error) {
			console.log(error);
		}

		return { user, session, error };
	};

	const logout = async () => {
		const { error } = await supabase.auth.signOut();

		if (error) {
			console.log(error);
		}

		setUser(null);
	};

	useEffect(() => {
		const user = supabase.auth.user();
		setUser(user);

		const auth = supabase.auth.onAuthStateChange((event, session) => {
			if (event === 'SIGNED_IN') {
				setUser(session.user);
			}

			if (event === 'SIGNED_OUT') {
				setUser(null);
			}
		});

		return () => auth.data.unsubscribe();
	}, []);

	return {
		user,
		login,
		logout
	};
};
