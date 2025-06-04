import MainIcon from "@/assets/42.png"

import { ThemeProvider } from "@/components/theme-provider"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

function Home() {
	return (
		<ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
				<div className="grid place-items-center mt-20">
					<div className="relative grid place-items-center w-fit h-full p-10">
						<div
							id="grid"
							className="absolute inset-0 w-full h-full bg-[url('data:image/svg+xml,...')] opacity-5 pointer-events-none "
							style={{
								maskImage: `linear-gradient(to right, transparent, black 20%, black 80%, transparent),
								linear-gradient(to bottom, transparent, black 20%, black 80%, transparent)`,
								WebkitMaskImage: `linear-gradient(to right, transparent, black 20%, black 80%, transparent),
								linear-gradient(to bottom, transparent, black 20%, black 80%, transparent)`,
								maskComposite: 'intersect',
								WebkitMaskComposite: 'destination-in',
							}}
						/>
						<span
							className="absolute top-1/2 left-1/2 w-80 h-20 bg-emerald-400 blur-[100px] -translate-x-1/2 -translate-y-1/2 opacity-50"
						/>
						<div className="dark:bg-input/30 size-14 border rounded-xl p-3">
							<img className="drop-shadow-lg drop-shadow-emerald-400/50" src={MainIcon} alt="42 Icon" />
						</div>
							<h2 className="scroll-m-20 text-3xl font-semibold tracking-tight mt-3">
							Webserv
						</h2>
						<p className="leading-7 font-light max-w-3xl text-center opacity-90">
							A lightweight HTTP webserver implemented from scratch in C++98, with custom configuration.
							Handles basic HTTP/1.1 requests and serves static files and directories from a configured root directory.
						</p>
					</div>
				</div>
				<div className="w-2xl h-fit">
					    <Accordion
      type="single"
      collapsible
      className="w-full"
      defaultValue="item-1"
    >
      <AccordionItem value="item-1">
        <AccordionTrigger>Product Information</AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-balance">
          <p>
            Our flagship product combines cutting-edge technology with sleek
            design. Built with premium materials, it offers unparalleled
            performance and reliability.
          </p>
          <p>
            Key features include advanced processing capabilities, and an
            intuitive user interface designed for both beginners and experts.
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Shipping Details</AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-balance">
          <p>
            We offer worldwide shipping through trusted courier partners.
            Standard delivery takes 3-5 business days, while express shipping
            ensures delivery within 1-2 business days.
          </p>
          <p>
            All orders are carefully packaged and fully insured. Track your
            shipment in real-time through our dedicated tracking portal.
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Return Policy</AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-balance">
          <p>
            We stand behind our products with a comprehensive 30-day return
            policy. If you&apos;re not completely satisfied, simply return the
            item in its original condition.
          </p>
          <p>
            Our hassle-free return process includes free return shipping and
            full refunds processed within 48 hours of receiving the returned
            item.
          </p>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
				</div>
			</ThemeProvider>
	)
}

export default Home

// inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive bg-primary text-primary-foreground shadow-xs hover:bg-primary/90 h-9 px-4 py-2 has-[>svg]:px-3

// absolute inset-0 mx-auto my-auto w-full h-full bg-transparent opacity-20 pointer-events-none
