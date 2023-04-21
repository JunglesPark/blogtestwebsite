import React from 'react'

const AboutSection = () => {
  return (
    <div>

        <div className="w-screen xl:h-[90vh] lg:md-[75vh] md:h-[60vh] h-[40vh] flex overflow-hidden ">
            <div>
                <div className="xl:p-20 xl:m-20 lg:p-15 lg:m-15 md:p-10 md:p-10 p-5 m-5 2xl:w-[40%] xl:w-[35%] md:w-[33%] w-[80%]">
                    <h1 className="lg:py-10 md:py-6 py-3 font-bold xl:text-6xl lg:text-4xl md:text-2xl text-xl">About Us</h1>
                    <p className="text-xs lg:text-base xl:text-lg">
                        Since 2009, we have been providing cutting-edge technology and consulting services, primarily in emerging Asian markets. We are a group of innovators who believe that the future of technology is intertwined with all financial and business processes, assisting daily operations to integrate data-driven tools right now.
                    </p>
                    <p className="text-xs lg:text-base xl:text-lg">
                        We evolve with technology and are proud to provide middleware services, cloud-related services, blockchain and cryptocurrency services, and the best resources available to you.
                    </p>
                </div>
            </div>
            <div className="absolute w-full h-full">
                <img src="./src/assets/AboutUs/AboutUs_photo_1_editted.png" className="absolute right-0 opacity-[20%] md:opacity-[100%] w-[350px] md:w-[500px] lg:w-[600px] xl:w-[900px] " alt=".." />
            </div>
        </div>

        <div className="w-screen xl:h-[100vh] lg:h-[75vh] h-[40vh] overflow-hidden relative flex">
            <div className="absolute w-full h-full">
                <img src="./src/assets/AboutUs/AboutUs_photo_2.png" className="p-10 absolute left-0 opacity-[20%] md:opacity-[100%] w-[400px] lg:w-[600px] xl:w-[700px]" alt=".."/>
            </div>
            <div className="w-fit bg-white absolute top-[5%] right-30 xl:left-[30%] xl:top-[40%] lg:top-[35%] md:right-[10%] w-[70%] md:w-[400px] lg:w-[600px] xl:w-[700px] m-20 px-3 py-4 cutCorner caret">
              <h3 className="w-fit m-2 px-3 lg:py-3 font-bold xl:text-4xl lg:text-3xl md:text-2xl text-xl">Why Us</h3>
              <p className="text-xs lg:text-base xl:text-lg p-5">Our team is open to custom projects, and are happy to pursue any kind of software engineering, project management or cloud-based concerns moving forward. We thank you for considering Sonivy.</p>

            </div>
        </div>

    </div>
  )
}

export default AboutSection