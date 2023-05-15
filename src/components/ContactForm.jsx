import React, {useState, useEffect, Fragment} from 'react'

import { screenSize } from '../hooks/screenSize'

const ContactForm = () => {
    let screenSizeWidth = screenSize()
    const [height, setHeight] = useState({})


    useEffect(()=>{
        divHeight()
    },[screenSizeWidth])

    const divHeight = () =>{
        let boxHeight = document.getElementById('contentBox').clientHeight.toString()
        setHeight({
          height:  boxHeight + "px"
        })
    }

    const formList = [
        {
            title: "First Name",
            required: true,
            placeholder: "Your Name",
            id: "name"
        },
        {
            title: "Company Name",
            required: false,
            placeholder: "Your Company Name",
            id: "companyName"
        },
        {
            title: "Email",
            required: true,
            placeholder: "Your Email",
            id: "email"
        },
        {
            title: "Contact Number",
            required: true,
            placeholder: "Your Contact Number",
            id: "contactNumber"
        },
        {
            title: "Message",
            required: true,
            placeholder: "Leave Us Your Message",
            id: "message"
        },
    ]
    
    const [contactInfo, setContactInfo] = useState({
        name:"",
        companyName: "",
        email:"",
        contactNumber:"",
        message:"",
        error: {}
    })

    const fieldChange = name => event =>{
        setContactInfo({...contactInfo, [name] : event.target.value})
    }

    const handleFormValidation = () =>{
        let fields = contactInfo
        let errors = {}
        let formIsValid = true
        
        Object.keys(fields).forEach((key,index)=>{
            if(!fields[key] && key != "companyName"){
                if(key === "contactNumber"){
                    errors[key] = "CONTACT NUMBER canot be empty!"
                    formIsValid = false
                } else {
                    errors[key] = key.toUpperCase() + " " + "cannot be empty!"
                    formIsValid = false
                }
            }

            if(typeof fields["email"] !== "undefined"){
                let lastAtPos = fields["email"].lastIndexOf("@")
                let lastDotPos = fields["email"].lastIndexOf(".")

                if (!(lastAtPos < lastDotPos && lastAtPos > 0 && fields["email"].indexOf("@@") == -1 && lastDotPos > 2 && fields["email"].length - lastDotPos > 2)) {
                    errors["email"] = "Please input valid email!"
					formIsValid = false
				}
            }
        })
        setContactInfo({...contactInfo, error: errors})
        return formIsValid
    }

    const ContactUsTitle = () =>{
        return(
            <div className='grid grid-cols-12 gap-4 w-full'>
                <div className='col-span-9 '>
                    <div className="my-16 w-full">
                        <h1 className="text-6xl font-bold pb-10">Contact Us</h1>
                        <p className="">For enquiries, please contact us using the form below. </p>
                        <p>We will get back to you within 2-3 business days.</p>
                    </div>
                </div>
            </div>
        )
    }
    const FormDetail = () =>{
        return(
            <form className='w-full'>
                <hr/>
                {formList.map((item,idx)=>{
                    return(
                        <Fragment  key={idx}>
                            <div className='block md:flex align-middle items-center py-8'>  
                                <div className='md:w-1/2 w-full flex align-middle items-center md:mb-0 mb-4'>
                                    <div className='w-1/2'>
                                        <div className='font-semibold'>{item.title}</div>
                                    </div>
                                    {item.required === true ? <div className='text-[#FF0000] underline mx-auto font-light'>Required</div> : null}
                                </div>     
                                <div className='md:w-1/2 w-full'>
                                    {item.id != "message" ?
                                        <>
                                            <input className='border-gray-400 block w-full h-[52px] rounded ' type="text" name={item.id} id={item.id} placeholder={item.placeholder} onChange={fieldChange(item.id)}/>
                                        </>
                                        :
                                        <textarea className='border-gray-400 block w-full h-[200px] rounded' type="text" name={item.id} id={item.id} placeholder={item.placeholder}/>
                                    }
                                    {contactInfo.error[item.id] ? 
                                        <div className='text-[#FF0000] font-light text-sm'>{contactInfo.error[item.id]}</div> 
                                        :
                                        null
                                    }
                                </div>
                            </div>
                            <hr className='last:hidden'/>
                        </Fragment>
                    )
                })}
            </form>
        )
    }
    


  return (
    <div className="relative flex justify-center align-middle overflow-hidden ">
        {/* Background */}
        <div className='xl:max-w-6xl lg:max-w-4xl md:max-w-2xl sm:max-w-sm max-w-xs w-full' style={height}>
            <div className='grid grid-cols-12 gap-0 skew-x-[20deg] opacity-25'>
                <div className='lg:col-start-2 xl:col-start-3 md:col-start-4 lg:col-span-2 xl:col-span-3 md:col-span-4 col-span-12 bg-[#E4EEF2] md:h-[720px] h-[480px]' >
                </div>
            </div>
        </div>


        <div className='absolute top-0 right-0 left-0 bottom-0 h-fit' id="contentBox">
            <div className='xl:max-w-6xl lg:max-w-4xl md:max-w-2xl sm:max-w-sm max-w-xs w-full flex align-middle justify-center mx-auto'>
                <ContactUsTitle/>
            </div>

            <div className='xl:max-w-6xl lg:max-w-4xl md:max-w-2xl sm:max-w-sm max-w-xs w-full flex align-middle justify-center mx-auto'>
                <div className='grid grid-cols-12 gap-4 w-full'>
                    <div className='col-span-12'>
                        <FormDetail/>
                        <div className='md:w-1/3 w-full mx-auto mt-8'>
                            <button className='w-full py-3 mx-auto bg-[#239CCF] border-none active:bg-[#035C87] hover:bg-[#035C87] hover:text-white' onClick={handleFormValidation}>Submit</button>
                        </div>           
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default ContactForm