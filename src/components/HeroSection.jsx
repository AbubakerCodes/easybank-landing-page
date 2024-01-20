
function HeroSection() {

    return (
      <>
      <section className={`relative bg-absolute bg-gradient-to-tl from bg-brand-secondary-gray-50 to to-brand-secondary-blue-200  text-brand-secondary-blue-200 overflow-x-clip`} >
        {/* background */}
        <div className=" bg-no-repeat bg-bg-desktop absolute w-full h-full  bg-cover -top-[16rem] right-0 lg:-right-[26rem] lg:-top-[14rem] xl:-top-[17rem] xl:-right-[31rem] xl:overflow-y-visible xl:max-w-[100%]"></div>

        {/* container */}
        <div className="relative flex sm:flex-col-reverse lg:flex-row sm:items-center sm:justify-between lg:items-center lg:justify-between  px-6 md:px-8 lg:px-16 sm:py-0 lg:pr-0 lg:pt-72 lg:pb-8">

          {/* left side */}
          <div className="bg-rend-500 sm:basis-1/2 sm:max-w-[100%] lg:basis-1/2 lg:m-0 lg:mr-[100%] lg:-mt-[5rem] sm:mt-[100%] md:mt-[88%] sm:mx-auto sm:pb-20 xl:mr-[65%] xl:max-w-[100%] xl:mb-48">
            <h1 className="sm:mx-auto lg:mx-0 text-4xl md:text-5xl sm:w-[300px] sm:max-w-[100%] md:w-[400px] md:max-w-[100%] lg:max-w-[90%] font-normal text-brand-primary-blue-400">Next generation digital banking</h1>
            <p className="sm:mx-auto max-w-[80%] lg:mx-0 lg:max-w-[100%] mt-4 mb-8">  
              Take your financial life online. Your Easybank account will be a one-stop-shop 
              for spending, saving, budgeting, investing, and much more.
            </p>
            <button className="sm:mx-auto lg:mx-0 flex items-center justify-center text-white py-3 px-8 text-center align-middle rounded-full bg-gradient-to-r from-brand-primary-green-400 to-brand-primary-cyan-400 hover:opacity-65 duration-200 ease-in ">
                        Request Invite
            </button>
          </div>

          {/* right side */}
          <div className=" overflow-x-clip m-0 absolute sm:-top-[9rem] sm:max-w-[90%] md:-top-[12rem] md:max-w-[80%] lg:max-w-[80%]  lg:-top-[6rem] lg:-right-[10rem]  lg:basis-[47%] lg:w-[65%] xl:-top-[9rem] xl:-right-[12rem] lg:overflow-clip z-10">
            <img className="relative w-full " src="/assets/image_mockups.png" alt="image mockups" />
          </div>

        </div>
        
      </section>
      </>
    )
  }
  
  export default HeroSection;
  