import { Nunito } from "next/font/google";

const nunito = Nunito({ subsets: [ "latin" ], display: "swap" });

export function Footer () {
	return ( <footer className="w-full bg-gray-800 text-white py-4 bottom-0">
		<div className="container mx-auto px-4">
			<div className="flex justify-between">
				<div className="flex flex-col">
					<div>About</div>
					<div>Who we are</div>
					<div>Contact Us</div>
					<div>Terms & Conditions</div>
					<div>Reviews</div>
				</div>
				<div className="flex flex-col">
					<div>Solutions</div>
					<div>Organizations</div>
					<div>Patient</div>
					<div>Developers</div>
				</div>
				<div className="flex flex-col">
					<div>Products</div>
					<div>Patient App</div>
					<div>EMR</div>
					<div>Smart Card</div>
				</div>
				<div className="flex flex-col">
					<div>Help</div>
					<div>Need help?</div>
					<div>Contact</div>
				</div>
			</div>
			<div className="flex justify-center mt-4">
				<div className="mx-2">Twitter</div>
				<div className="mx-2">Instagram</div>
				<div className="mx-2">LinkedIn</div>
			</div>
			<div className="flex justify-center mt-4">
				<img className="w-8 h-8" alt="Group" src="/images/icon.svg"/>
				<div className="ml-2">Primed E-Health</div>
			</div>
		</div>
	</footer> )
}
