import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

const schema = yup.object({
  companyName: yup.string().required(),
  phoneNumber: yup.number().positive().integer().required(),
	email: yup.string().email().required(),
	description: yup.string().required(),
}).required();

const HookForm = ({ formSubmit }) => {


	const {
		register,
		reset, 
		formState: { errors, isSubmitSuccessful},
		handleSubmit,
	} = useForm({
    resolver: yupResolver(schema)
  });

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
			<p>{errors.companyName?.message}</p>
			<label htmlFor="phoneNumberInput">Phone Number</label>
			<input 
				type="tel" 
				id="phoneNumberInput" 
				{...register("phoneNumber")}
			/>
			<p>{errors.phoneNumber?.message}</p>
			</div>
			<div>
			<label htmlFor="emailInput">Email</label>
			<input 
				type="email" 
				id="emailInput"
				{...register("email")}
			/>
			<p>{errors.email?.message}</p>
			</div>
			<div>
			<label htmlFor="descriptionInput">Description</label>
			<input 
				type="text" 
				id="descriptionInput" 
				{...register("description")}
			/>
			</div>
			<p>{errors.description?.message}</p>
			<div>
				<input value="Save" type="submit" />
			</div>
		</form>
		</>
	);
};

export default HookForm;