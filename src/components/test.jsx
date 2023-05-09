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

const Test = ({title, content}) => {

    return (
        <div>
            <h1>{our_services.service_title}</h1>
            <p>{our_services.service_description}</p>
        </div>
    )
}

export {Test}