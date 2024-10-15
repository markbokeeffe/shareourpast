"use client"
import { useState } from 'react';



export const Form = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        information: ""
    });

    const handleChange = (event: { target: { name: string; value: string; }; }) => {
        const { name, value } = event.target;
        setFormData((prevState) => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = (event: { preventDefault: () => void; }) => {
        event.preventDefault();
        console.log(formData);
      };
      
	return (
        <form onSubmit={handleSubmit} className="flex flex-col mt-8">
            <fieldset className="flex mb-4 justify-center">
                <input placeholder="Your Name" className="text-[#007b8b] rounded px-2 py-2 lg:w-96" type="text" name="name" onChange={handleChange} value={formData.name} />
            </fieldset>
            <fieldset className="flex mb-4 justify-center">
                <input placeholder="Your Email" className="text-[#007b8b] rounded px-2 py-2 lg:w-96" type="email" name="email" onChange={handleChange} value={formData.email} />
            </fieldset>
            <fieldset className="flex justify-center">
                <textarea 
                    placeholder="Please provide some information about the family tree information that you would like to incorporate into your digital booklet" 
                    className="text-[#007b8b] rounded resize-none lg:w-96 h-36 px-2 py-2" rows={6} cols={20} name="information" onChange={handleChange} value={formData.information}>
                </textarea>
            </fieldset>
            <fieldset className="flex justify-center">
                <input 
                    style={{ fontWeight: 1000 }} 
                    className="rounded justify-center mt-8 cursor-pointer h-12 px-4 bg-white hover:bg-[#007b8b] text-[#007b8b] hover:text-white hover:border-white hover:border-2 lg:w-96" 
                    type="submit" 
                    value="Start Your Journey" 
                />
            </fieldset>
        </form>
	);
};

export default Form;