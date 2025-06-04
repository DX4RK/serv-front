import { TopBar } from "@/components/ui/top-bar"

function Header() {
	return (
		<header className="flex items-center w-full h-14 ">
			<div className="flex items-center align-left w-full p-3 gap-3">
				<TopBar />
				<a className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50 h-9 px-4 py-2 has-[>svg]:px-3 absolute right-4">Login</a>
			</div>
		</header>
	)
}

export { Header }

// top-4 right-4 md:top-8 md:right-8
