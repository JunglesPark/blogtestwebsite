import TabItem from 'flowbite-react/lib/esm/components/Tab/TabItem'
import React from 'react'

const ServicesDescription = () => {
    const our_services = [
        {
          service_title: "Cloud Infrastructure",
          service_description: "We are dedicated to providing the highest quality cloud infrastructure, and we do so by setting up low latency secured connections to the cloud on your behalf. The future of business communication, productivity and security is backed up to the cloud. We have 24-7 availability in supporting your future business ventures on the cloud.",
        }
        ,
        {
          service_title: "Middleware",
          service_description: "As new technology emerges, your business model must constantly adapt. Our expertise in middleware will make sure that your workflow is not compromised and allows you to scale effectively.",
        },
        {
          service_title: "Web 3",
          service_description: "As passionate believers in the future, we have honed our skills in Blockchain technology, particularly in Cryptocurrency and Digital Products. Our goal is to enable borderless digital transactions at any time and from any location without the use of third-party brokers.",
        },
        {
          service_title: "Start-up Consulting",
          service_description: "With increasing competition and constantly evolving technology, new entrepreneurs require a solid business plan before launching their new business. Our team of experts can provide you with a wealth of knowledge in a variety of fields, including finance, operations, and scalable technology. Our collective experience and expertise will pave the way for your success.",
        }
      ]
      
      const ServiceBox = ({index, name, content}) =>{
        return(
            <div className="bg-[#035C87] m-8" style={{clipPath: 'polygon(100% 0, 100% 72%, 84% 100%, 0 100%, 0 0)'}}>
              <div className="bg-white p-8 w-full scale-[0.996] md:h-fit md:min-h-[340px] min-h-[320px]" style={{clipPath: 'polygon(100% 0, 100% 72%, 84% 100%, 0 100%, 0 0)'}}>
                
                <h3 className="w-fit border-2 border-solid rounded-full border-[#239CCF] mt-8 py-1 px-8 font-semibold text-[#239CCF] text-lg">{title}</h3>
                <p className="text-sm md:text-md lg:text-base py-3">{content}</p>
              </div>
            </div>
        )
      }

    return(
    <div>
        <div>
            <ServiceBox title={our_services.service_title} content={our_services.service_description} />
        </div>
    </div>
    )
  
}

// const HeroSectionExample = ({title, content}) => {
//     return (
//         <div>
//             <h1>{title}</h1>
//             <p>{content}</p>
//         </div>
//     )
// }

export default {ServicesDescription}