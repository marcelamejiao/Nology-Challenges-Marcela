import { useEffect } from "react";
import { useForm } from "react-hook-form";

const HookForm = ({ formSubmit }) => {


	const {
		register,
		reset, 
		formState: { errors, isSubmitSuccessful},
		handleSubmit,
	} = useForm();

	useEffect(() => {
		reset();
	}, [isSubmitSuccessful])

	return (
		<>
		<form onSubmit={handleSubmit(formSubmit)}>
			<div>
			<label htmlFor="companyNameInput">Company Name</label>
			<input 
				type="text"  
				id="companyNameInput"
				{...register("companyName")}
			/>
			<label htmlFor="phoneNumberInput">Phone Number</label>
			<input 
				type="tel" 
				id="phoneNumberInput" 
				{...register("phoneNumber")}
			/>
			</div>
			<div>
			<label htmlFor="emailInput">Email</label>
			<input 
				type="email" 
				id="emailInput"
				{...register("email")}
			/>
			</div>
			<div>
			<label htmlFor="descriptionInput">Description</label>
			<input 
				type="text" 
				id="descriptionInput" 
				{...register("description")}
			/>
			</div>
			<div>
				<input value="Save" type="submit" />
			</div>
		</form>
		</>
	);
};

export default HookForm;