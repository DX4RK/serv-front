import { LoginForm } from "@/components/login-form"
import { Server } from "lucide-react"

import { ThemeProvider } from "@/components/theme-provider"

function Upload() {
	return (
		<ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
			<div className="flex min-h-svh justify-center items-center">
				<div className="flow h-[150px] w-[300px] items-center content-center text-center justify-center rounded-md border border-dashed text-sm">
					<p className="text-base m-0 font-normal">Upload file here</p>
					<p className="text-sm m-0 opacity-50 font-light">You can only upload 1 file per time</p>
				</div>
			</div>
		</ThemeProvider>
)}

export default Upload
