import React from 'react'

const herosec = () => {
  return (
    <div>{/* Hero Section with background image */}
      <div
        className="relative w-full h-[50vh] lg:h-[60vh] flex items-center justify-center rounded-3xl overflow-hidden "
        style={{
          backgroundImage: `url('/assets/Group1597883634.svg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="flex flex-col gap-9 p-5">
        <h1 className="text-white text-4xl lg:text-8xl font-bold text-center drop-shadow-lg bold lg:mt-30">
         Contact us
        </h1>
        <p className="text-sm lg:text-base max-w-4xl mx-auto ExtraLight text-center text-white">We’d love to hear from you. Whether you have a question, a project idea, or need support, our team is here to help. Get in touch with us and let’s start a conversation about how we can work together to create meaningful digital solutions.</p>
        </div>
      </div></div>
  )
}

export default herosec