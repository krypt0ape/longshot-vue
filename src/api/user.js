export const GET_USER = () => ({
	path: "/auth/me",
	method: "GET",
});

export const UPDATE_USER = (updateData) => ({
	path: "/auth/me",
	method: "POST",
	data: updateData,
});

export const SIGNIN = ({ identifier, password }) => ({
	path: "/auth/signin",
	method: "POST",
	data: {
		identifier,
		password,
	},
});

export const SIGNOUT = () => ({ 
	path: "/auth/signout",
	method: "POST",
})

export const SIGNUP = ({ email, password, dob, username, signupCode, affiliateCode, acceptMarketingEmails }) => ({
	path: "/auth/signup",
	method: "POST",
	data: {
		email,
		password,
		dob,
		username,
		signupCode,
		affiliateCode,
		acceptMarketingEmails,
	},
});