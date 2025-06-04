import { LoginForm } from "@/components/login-form"

import { ThemeProvider } from "@/components/theme-provider"

function Login() {
	return (
		<ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
			<div className="grid w-full min-h-svh">
				<div className="flex flex-1 items-center justify-center">
					<div className="max-w-xs">
						<LoginForm />
					</div>
				</div>
			</div>

	</ThemeProvider>
)}

export default Login
