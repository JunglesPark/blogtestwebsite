// The images for the diamond shaped icons
const diamond_shape_images = [
    {
        top_image: "../src/assets/Cloud/Hero2_Logos/aws.png",
        left_image: "../src/assets/Cloud/Hero2_Logos/azure.png",
        right_image: "../src/assets/Cloud/Hero2_Logos/gcp.png",
        bottom_image: "../src/assets/Cloud/Hero2_Logos/huawei.png",
    },
    {
        top_image: "../src/assets/Middleware/Hero2_Logos/CloudTechnology.png",
        left_image: "../src/assets/Middleware/Hero2_Logos/Dashbord.png",
        right_image: "../src/assets/Middleware/Hero2_Logos/SmartCity.png",
        bottom_image: "../src/assets/Middleware/Hero2_Logos/Technology.png",
    },

]

// The text for the different text boxes
const services_for_customers = [
    // idx == 0 for CLOUD
    {
        service_who: "All kinds of businesses will benefit from having a solid Cloud Infrastructure, giving you a more secure, and less costly replacement to bulky systems racks.",
        service_why: "With a well maintained architecture, your business can become less wasteful in time and resources. Your systems may operate only when you need them to, and the overhead costs can be cut drastically.",
        service_how: "Our Cloud engineers will identify the vital components in your business, and structure a robust system around that. Our expertise with Cloud services lie DevOps, Handling Big Data, Continuous Delivery and Cloud Native Operations. Additionally, we are well versed with different cloud systems, with a vast amount of experience in integrating services with AWS and Azure.",
    },
    // idx == 1 for MIDDLEWARE
    {
        service_who: "Middleware will be vital for businesses that have operations that are integrated into a multitude of different software.",
        service_why: "With many operations happening at the same time, it becomes easier for discrepancies to appear due to latency.",
        service_how: "Our middleware professionals can engineer a platform for your data systems to operate in a scalable and fault tolerant manner.",
    },
    // idx == 2 for WEB3
    {
        service_who: "With digital goods becoming more popular, it becomes vital for the holder to claim ownership of such goods.",
        service_why: "In the past, it was difficult to prove the identity of the true holders of digital currencies or products. The continuous advancement of blockchain technology can assist all businesses in realizing the vision of comprehensive digitization.",
        service_how: "As Blockchain technology has advanced, we have also improved the ease of access and integration into the digital marketplace.",
    },
    // idx == 3 for STARTUP CONSULTING
    {
        service_who: "If you have a new business idea but don't know where or how to begin, we will gladly assist you.",
        service_why: "Without an effective plan, a brilliant idea cannot become a successful business. This is why our team is committed to assisting you in developing a well-structured plan to propel you forward.",
        service_how: "As a company that was also once a start-up in 2009, we are also aware of the struggles and how to overcome them. Along with a network of people with knowledge and history in management, venture capital and investment, we can provide you with deep insight into creating, and growing, your company from scratch.",
    },
    
]

const ServicesForCustomers = ({idx, who, why, how, images}) => {
    return(
        <div>
            <div className="relative md:left-[10%] md:top-[10%] collapse lg:visible xl:w-[335px] md:w-[240px] flex rotate-45 grid grid-cols-2 grid-rows-2 gap-x-4 gap-y-4">
                <div className="p-2 bg-white overflow-hidden shadow-md border-2 flex items-center transition hover:brightness-75">
                    <img className="-rotate-45 object-cover" src={images=diamond_shape_images[idx]['top_image']} />
                </div>
                <div className="p-2 bg-white overflow-hidden shadow-md border-2 flex items-center transition hover:brightness-75">
                    <img className="-rotate-45 object-cover" src={images=diamond_shape_images[idx]['left_image']} />
                </div>
                <div className="p-2 bg-white overflow-hidden shadow-md border-2 flex items-center transition hover:brightness-75">
                    <img className="-rotate-45 object-cover" src={images=diamond_shape_images[idx]['right_image']} />
                </div>
                <div className="p-2 bg-white overflow-hidden shadow-md border-2 flex items-center transition hover:brightness-75">
                    <img className="-rotate-45 object-cover" src={images=diamond_shape_images[idx]['bottom_image']} />
                </div>
            </div>

            <div>
                <div className="absolute top-[5%] lg:top-[10%] lg:right-[10%] gap-x-3 m-8 p-8 2xl:w-[700px] xl:w-[600px] md:w-[480px] w-[280px] bg-white" >
                    <h1 className="bg-white text-blue-900 absolute left-5 -top-6 md:text-4xl text-2xl font-black z-40">Who needs this?</h1>
                    <p className="text-sm md:text-md xl:text-base 2xl:text-lg pt-3 pb-3">{who=services_for_customers[idx]['service_who']}</p>
                </div>

                <div className="absolute top-[35%] lg:top-[40%] lg:right-[8%] gap-x-3 m-8 p-8 2xl:w-[700px] xl:w-[600px] md:w-[480px] w-[280px] bg-white">
                    <h1 className="bg-white text-blue-900 absolute left-5 -top-6 md:text-4xl text-2xl font-black z-40">Why this Service?</h1>
                    <p className="text-sm md:text-md xl:text-base 2xl:text-lg pt-3 pb-3">{why=services_for_customers[idx]['service_why']}</p>
                </div>

                <div className="absolute top-[65%] lg:bottom-[5%] gap-x-3 m-8 p-8 2xl:w-[900px] lg:w-[800px] md:w-[480px] w-[280px] bg-white">
                    <h1 className="text-blue-900 relative md:text-4xl text-2xl font-black z-40">How does Sonivy do this?</h1>
                    <p className="text-sm md:text-md xl:text-base 2xl:text-lg pt-3 pb-3">{how=services_for_customers[idx]['service_how']}</p>
                </div>
            </div>
        </div>
    )
}

export {ServicesForCustomers}