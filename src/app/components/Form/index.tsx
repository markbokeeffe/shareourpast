"use client"
import { useState } from 'react';

export const Form = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        information: ""
    });

    const [result, setResult] = useState({});
    const [loading, setLoading] = useState(false);

    const handleChange = (event: { target: { name: string; value: string; }; }) => {
        const { name, value } = event.target;
        setFormData((prevState) => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = (event: { preventDefault: () => void; }) => {
        event.preventDefault();
        console.log('FORM DATA ',formData);
        // const formData = new FormData(form);

        // try {
        //     const response = await fetch("https://example.org/post", {
        //     method: "POST",
        //     // Set the FormData instance as the request body
        //     body: formData,
        //     });
        //     console.log(await response.json());
        // } catch (e) {
        //     console.error(e);
        // }
        setLoading(true);
        fetch('/api/emails', {
            method: 'POST',
        })
        .then(response => {
            console.log('RESPONSE', response);   
        })
        // .then(data => setResult(data))
        .catch(error => setResult(error))
        .finally(() => setLoading(false))
      };
      
	return (
        <form onSubmit={handleSubmit} className="flex flex-col mt-8">
            <fieldset className="flex mb-4 justify-center">
                <input placeholder="Your Name" className="text-[#007b8b] rounded px-2 py-2 w-64 lg:w-96" type="text" name="name" onChange={handleChange} value={formData.name} />
            </fieldset>
            <fieldset className="flex mb-4 justify-center">
                <input placeholder="Your Email" className="text-[#007b8b] rounded px-2 py-2 w-64 lg:w-96" type="email" name="email" onChange={handleChange} value={formData.email} />
            </fieldset>
            <fieldset className="flex justify-center">
                <textarea 
                    placeholder="Please provide some information about the family tree information that you would like to incorporate into your digital booklet" 
                    className="text-[#007b8b] rounded resize-none w-64 lg:w-96 h-40 px-2 py-2" rows={8} cols={20} name="information" onChange={handleChange} value={formData.information}>
                </textarea>
            </fieldset>
            <fieldset className="flex justify-center">
                <input 
                    style={{ fontWeight: 1000 }} 
                    className="rounded justify-center mt-8 cursor-pointer h-12 px-4 bg-white hover:bg-[#007b8b] text-[#007b8b] hover:text-white hover:border-white hover:border-2 w-64 lg:w-96" 
                    type="submit" 
                    value="Start Your Journey" 
                />
            </fieldset>
        </form>
	);
};

export default Form;