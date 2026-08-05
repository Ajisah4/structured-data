const updatedUser: User = {
	...user,
	email: 'alice.new@example.com',
}

const finalConfig: Config = {
	...defaultConfig,
	...userConfig,
}

const userWithDarkMode: User = {
	...user,
	settings: {
		...user.settings,
		theme: 'dark',
	},
}

export { updatedUser, user, finalConfig, userWithDarkMode }