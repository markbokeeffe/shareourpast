// @ts-nocheck
"use client"
import { useState } from 'react';

export const Form = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });

    const [isSending, setIsSending] = useState(false);
    const [isSent, setIsSent] = useState(false);

    const onSubmit = async (event: { preventDefault: () => void; target: HTMLFormElement | undefined; }) => {
        event.preventDefault();
        setIsSent(false);
        setIsSending(true);
        const formData = new FormData(event.target);
        const response = await fetch('/api/contact', {
            method: 'post',
            body: formData,
           });
        if(response.ok && response.status === 200) {
            setIsSending(false);
            setIsSent(true);
        }
      };


    const handleChange = (event: { target: { name: string; value: string; }; }) => {
        const { name, value } = event.target;
        setFormData((prevState) => ({ ...prevState, [name]: value }));
    };


	return (
        <div className="flex flex-col items-center">
            <form onSubmit={onSubmit} className="flex flex-col mt-8">
                <fieldset className="flex mb-4 justify-center">
                    <input placeholder="Your Name" className="text-[#007b8b] rounded px-2 py-2 w-80 lg:w-96" type="text" name="name" onChange={handleChange} value={formData.name} />
                </fieldset>
                <fieldset className="flex mb-4 justify-center">
                    <input placeholder="Your Email" className="text-[#007b8b] rounded px-2 py-2 w-80 lg:w-96" type="email" name="email" onChange={handleChange} value={formData.email} />
                </fieldset>
                <fieldset className="flex justify-center">
                    <textarea 
                        placeholder="Please provide some information about the family tree information that you would like to incorporate into your digital booklet" 
                        className="text-[#007b8b] rounded resize-none w-80 lg:w-96 h-40 px-2 py-2" rows={8} cols={20} name="message" onChange={handleChange} value={formData.message}>
                    </textarea>
                </fieldset>
                <fieldset className="flex justify-center">
                    <input 
                        style={{ fontWeight: 1000 }} 
                        className="rounded justify-center mt-8 cursor-pointer h-12 px-4 bg-white hover:bg-[#007b8b] text-[#007b8b] hover:text-white hover:border-white hover:border-2 w-80 lg:w-96" 
                        type="submit"
                        disabled={isSending ? true : false}
                        value={isSending ? 'Sending...' : 'Start Your Journey'}
                    />
                </fieldset>
            </form>
            {isSent && <p className="mt-6 w-80 lg:w-96 border-2 border-white px-4 py-4 rounded">Thank you for sending your information.  We will be in touch within the next two working days.</p>}
        </div>
	);
};

export default Form;