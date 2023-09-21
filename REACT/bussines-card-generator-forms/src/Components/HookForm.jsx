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
				name="companyName" 
				id="companyNameInput" 
				value={formValues.companyName} 
				onChange={onInputChange} 
			/>
			<label htmlFor="phoneNumberInput">Phone Number</label>
			<input 
				type="tel" 
				name="phoneNumber" 
				id="phoneNumberInput" 
				value={formValues.phoneNumber} 
				onChange={onInputChange} 
			/>
			</div>
			<div>
			<label htmlFor="emailInput">Email</label>
			<input 
				type="email" 
				name="email" 
				id="emailInput" 
				value={formValues.email} 
				onChange={onInputChange} 
			/>
			</div>
			<div>
			<label htmlFor="descriptionInput">Description</label>
			<input 
				type="text" 
				name="description" 
				id="descriptionInput" 
				value={formValues.description} 
				onChange={onInputChange} 
			/>
			</div>
			<div>
				<button disabled={!isValid}>Save</button>
			</div>
		</form>
		</>
	);
};

export default HookForm;