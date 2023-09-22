import { useEffect } from "react";
import { useForm } from "react-hook-form";
import styles from "./HookForm.module.scss";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { useContext } from "react";
import { SearchContext } from "../context/SearchContextProvider";

const schema = yup.object({
  companyName: yup.string().required(),
  phoneNumber: yup.number().positive().integer().required(),
	email: yup.string().email().required(),
	description: yup.string().required(),
}).required();

const HookForm = () => {
	const { formSubmit } = useContext(SearchContext);

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
		<form className={styles.form} onSubmit={handleSubmit(localFormSubmit)}>
			<div>
			<label htmlFor="companyNameInput">Company Name</label>
			<input 
				className={styles.field}
				type="text"  
				id="companyNameInput"
				{...register("companyName")}
			/>
			<p>{errors.companyName?.message}</p>
			<label htmlFor="phoneNumberInput">Phone Number</label>
			<input 
				className={styles.field}
				type="tel" 
				id="phoneNumberInput" 
				{...register("phoneNumber")}
			/>
			<p>{errors.phoneNumber?.message}</p>
			</div>
			<div>
			<label htmlFor="emailInput">Email</label>
			<input 
				className={styles.field}
				type="email" 
				id="emailInput"
				{...register("email")}
			/>
			<p>{errors.email?.message}</p>
			</div>
			<div>
			<label htmlFor="descriptionInput">Description</label>
			<input 
				className={styles.field}
				type="text" 
				id="descriptionInput" 
				{...register("description")}
			/>
			</div>
			<p>{errors.description?.message}</p>
			<div>
			<label htmlFor="imageInput">Image</label>
			<input 
				className={styles.field}
				type="file" 
				id="imageInput" 
				accept="image/*"
				{...register("image")}
			/>
			</div>
			<div>
				<input className={styles.button} value="Save" type="submit" />
			</div>
		</form>
		</>
	);
};

export default HookForm;