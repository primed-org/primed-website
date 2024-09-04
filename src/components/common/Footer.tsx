import { Nunito } from "next/font/google";

const nunito = Nunito({ subsets: [ "latin" ], display: "swap" });

export function Footer () {
	return ( 
	<footer className="w-full h-full bg-[#272727] text-white py-4 bottom-0">
		<div className="container mx-auto px-4 text-[16px] mt-5">
			<div className="grid grid-cols-2 gap-10 justify-items-center text-center lg:text-start lg:gap-0 lg:grid-cols-4 ">
				<div className="w-full md:w-auto flex flex-col leading-10  ">
					<div className="text-[18px] font-bold ">About</div>
					<div className="hover:text-primary cursor-pointer">Who we are</div>
					<div className="hover:text-primary cursor-pointer">Contact Us</div>
					<div className="hover:text-primary cursor-pointer">Terms & Conditions</div>
					<div className="hover:text-primary cursor-pointer">Reviews</div>
				</div>
				<div className="w-full md:w-auto flex flex-col leading-10">
					<div className="text-[18px] font-bold ">Solutions</div>
					<div className="hover:text-primary cursor-pointer">Organizations</div>
					<div className="hover:text-primary cursor-pointer">Patient</div>
					<div className="hover:text-primary cursor-pointer">Developers</div>
				</div>
				<div className="w-full md:w-auto flex flex-col leading-10">
					<div className="text-[18px] font-bold ">Products</div>
					<div className="hover:text-primary cursor-pointer">Patient App</div>
					<div className="hover:text-primary cursor-pointer">EMR</div>
					<div className="hover:text-primary cursor-pointer">Smart Card</div>
				</div>
				<div className="w-full md:w-auto flex flex-col leading-10">
					<div className="text-[18px] font-bold">Help</div>
					<div className="hover:text-primary cursor-pointer">Need help?</div>
					<div className="hover:text-primary cursor-pointer">Contact</div>
				</div>
			</div>
			<div className="flex justify-center mt-12 lg:mt-6">
				<div className="mx-2 hover:text-primary cursor-pointer">Twitter</div>
				<div className="mx-2 hover:text-primary cursor-pointer">Instagram</div>
				<div className="mx-2 hover:text-primary cursor-pointer">LinkedIn</div>
			</div>
			<div className="flex justify-center mt-4 cursor-pointer">
				<img className="w-8 h-8" alt="Group" src="/images/icon.svg"/>
				<div className="ml-2">Primed E-Health</div>
			</div>
		</div>
	</footer> )
}
