import { LoginForm } from "@/components/login-form"
import { Server } from "lucide-react"

import { ThemeProvider } from "@/components/theme-provider"

function Upload() {
	return (
		<ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
			<div className="grid w-full min-h-svh">
				<div className="flex flex-col gap-4 p-6 md:p-10">
					<div className="flex justify-center gap-2 md:justify-start">
						<a href="#" className="flex items-center gap-2 font-medium">
							<div className="bg-primary text-primary-foreground flex size-6 items-center justify-center rounded-md">
								<Server className="size-4" />
							</div>
							Webserv
						</a>
					</div>
				<div className="flex flex-1 items-center justify-center">
					<div className="max-w-xs">
						<LoginForm />
					</div>
				</div>
			</div>

		</div>
	</ThemeProvider>
)}

export default Upload
