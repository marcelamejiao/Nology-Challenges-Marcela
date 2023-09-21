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

	const localFormSubmit = (data) => {
		// Because we need to convert the image into a URL, we will convert this before sending it to the parent component
		data.image = URL.createObjectURL(data.image[0]);
		
		formSubmit(data);
	};

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
		<form onSubmit={handleSubmit(localFormSubmit)}>
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
			<label htmlFor="imageInput">Image</label>
			<input 
				type="file" 
				id="imageInput" 
				accept="image/*"
				{...register("image")}
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