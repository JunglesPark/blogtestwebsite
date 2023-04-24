import React from 'react'

const ContactForm = () => {
  return (
    <div className="">
        <div className="p-20 h-fit grid lg:grid-cols-2">
            <div className="">
                <h1 className="text-6xl font-bold pb-10">Contact Us</h1>
                <p className="">For enquiries, please contact us using the form below. We will get back to you within 2-3 business days.</p>
            </div>
            <div></div>
        </div>
        <form className="px-4 my-32 w-[80%] mx-auto space-y-6">

            <div className="flex grid grid-cols-12">
                <label className="font-bold col-span-5" htmlFor="name">First Name:</label>
                <input 
                    className="col-span-7 border border-gray-400 block py-2 px-4 w-full rounded" 
                    type="text"
                    name="name"
                    id="name"
                />
            </div>

            <div className="flex grid grid-cols-12">
                <label className="font-bold col-span-5" htmlFor="companyname">Company Name:</label>
                <input 
                    className="col-span-7 border border-gray-400 block py-2 px-4 w-full rounded" 
                    type="text"
                    name="companyname"
                    id="companyname"
                />
            </div>

            <div className="flex grid grid-cols-12">
                <label className="font-bold col-span-5" htmlFor="companyname">Email:</label>
                <input 
                    className="col-span-7 border border-gray-400 block py-2 px-4 w-full rounded" 
                    type="text"
                    name="companyname"
                    id="companyname"
                />
            </div>

            <div className="flex grid grid-cols-12">
                <label className="font-bold col-span-5" htmlFor="companyname">Contact Number:</label>
                <input 
                    className="col-span-7 border border-gray-400 block py-2 px-4 w-full rounded" 
                    type="text"
                    name="companyname"
                    id="companyname"
                />
            </div>

            <div className="flex grid grid-cols-12">
                <label className="font-bold col-span-5" htmlFor="companyname">Message: </label>
                <input 
                    className="col-span-7 border border-gray-400 block py-2 px-4 w-full rounded" 
                    type="text"
                    name="companyname"
                    id="companyname"
                />
            </div>
        </form>
    </div>
  )
}

export default ContactForm