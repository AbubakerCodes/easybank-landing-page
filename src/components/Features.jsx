import features from '../data/features';

function Features() {


    return (
      <>
        <section className='relative bg-brand-secondary-blue-50 text-brand-secondary-blue-200 py-20 z-0 '>

          {/* container */}
          <div className='px-6 md:px-8 lg:px-16 relative z-0'>

          <h2 className='sm:text-center lg:text-left text-brand-primary-blue-400 font-medium text-3xl'>Why choose Easybank?</h2>
          <p className='sm:text-center lg:text-left lg:mx-0 sm:max-w-[100%] md:max-w-[70%] sm:mx-auto lg:max-w-[55%] mt-4 mb-16'>
            We leverage Open Banking to turn your bank account into your financial hub. Control your finances like never before.
          </p>

          {/* features */}
          <div className="flex sm:flex-col lg:flex-row sm:items-center justify-between gap-10 lg:gap-7 ">
            {features.map(feature =><div key={feature.id} className='lg:align-top flex flex-col sm:items-center lg:items-stretch lg:justify-start gap-8'>
            <img src={feature.icon} alt={`${feature.title} icon`} className='mb-2 h-[72px] w-[72px] '/>
              <h3 className='text-lg text-brand-primary-blue-400'>{feature.title}</h3>
              <p className='text-[16.5px] sm:text-center sm:text-balance sm:max-w-[100%] md:max-w-[90%] lg:text-left'>{feature.content}</p>
            </div>)}
            
          </div>


          </div>

        </section>
      </>
    )
  }
  
  export default Features;
  