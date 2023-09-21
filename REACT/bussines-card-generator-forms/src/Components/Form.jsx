import { useState } from "react";

const Form = ( {handleSubmit} ) => {

	const defaultValues = {
		companyName: '',
		phoneNumber: '',
		email: '',
		description: '',
		image: '',
	};

	const [formValues, setFormValues] = useState(defaultValues);
	const [isValid, setIsValid] = useState(false);

	const validateForm = (data) => {
		if(data.companyName === '') {
			return false;
		}
		if(data.phoneNumber === '') {
			return false;
		}
		if(data.email === '') {
			return false;
		}
		if(data.description === '') {
			return false
		}
		return true;
	}


	const onInputChange = (event) => {
		const { name, value } = event.target;
		const newValues = {...formValues, [name]: value};
		setFormValues(newValues);

		const isFormValid = validateForm(newValues);
		setIsValid(isFormValid);
	};

	const onImageChange = (event) => {
		const image = event.target.files[0];
		const imageURL = URL.createObjectURL(image);
		const newValues = {...formValues, image: imageURL}
		setFormValues(newValues)
	}

	const onSubmit = (event) => {
		event.preventDefault();
		// use the form data
		handleSubmit(formValues);
		// clear the form fields
		setFormValues(defaultValues);
	}

	return(
		<>
		<form onSubmit={onSubmit}>
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
			<label htmlFor="imageInput">Image</label>
			<input 
				type="file" 
				accept="image/*"
				name="image" 
				id="imageInput" 
				onChange={onImageChange}
			/>
			</div>

			<div>
				<button disabled={!isValid}>Save</button>
			</div>
		</form>
		</>
	);
};

export default Form;