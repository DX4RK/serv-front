import type React from "react"
import { useState } from "react"

import { Button } from "@/components/ui/button"
import { ToastContainer, toast } from 'react-toastify';
import { Bounce } from 'react-toastify';

import { ThemeProvider } from "@/components/theme-provider"

function Upload() {
	const [file, setFile] = useState<File | null>(null);

	const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (e.target.files) {
			setFile(e.target.files[0]);
		}
	}

	const handleUpload = async () => {
		if (file) {
			console.log('Uploading file...');

			const formData = new FormData();
			formData.append('file', file);

			try {
				const result = await fetch('/cgi-bin/upload.py', {
					method: 'POST',
					body: formData,
			});

			const data = await result.json();

			console.log(data);
			toast.success('Successfully uploaded file!', {
				position: "top-right",
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: false,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
				theme: "colored",
				transition: Bounce,
				});
			} catch (error) {
				toast.error(`Error while uploading file, something wrong happened.`, {
					position: "top-right",
					autoClose: 5000,
					hideProgressBar: false,
					closeOnClick: false,
					pauseOnHover: true,
					draggable: true,
					progress: undefined,
					theme: "colored",
					transition: Bounce,
				});
				console.error(error);
			}
		} else {
			toast.warn('You need to select a file.', {
				position: "top-right",
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: false,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
				theme: "colored",
				transition: Bounce,
			});
		}
	};

	return (
		<ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
			<div className="flex h-full items-center justify-center">
				<div className="grid gap-3">
					<div className="relative flow h-[150px] w-[300px] items-center content-center text-center justify-center rounded-md border border-dashed text-sm">
						<p className="text-base m-0 font-normal">Upload file here</p>
						<p className="text-sm m-0 opacity-50 font-light">You can only upload 1 file per time</p>
						<input className="absolute inset-0 h-[150px] w-[300px] opacity-0" id="file" type="file" onChange={handleFileChange} />
						{file && (
							<p className="text-sm m-0 opacity-80 font-normal">{file.name}</p>
						)}
					</div>
					<Button className="w-[300px]" onClick={handleUpload}>Upload</Button>
				</div>
			</div>

			<ToastContainer
				position="top-right"
				autoClose={5000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick={false}
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
				theme="colored"
				transition={Bounce}
			/>
		</ThemeProvider>
)}

export default Upload
