import articles from "../data/articles";


function Articles() {

    return (
      <section className=' text-brand-secondary-blue-200 py-20 bg-gradient-to-t from bg-brand-secondary-gray-50 to to-brand-secondary-blue-200 '>

        {/* container */}
        <div className='px-6 md:px-8 lg:px-16'>

        <h2 className='sm:text-center text-brand-primary-blue-400 font-bold text-3xl mb-14'>Latest Articles</h2>

        {/* articles */}
        <div className="grid auto-cols-max grid-cols-1 md:grid-cols-2 lggrid-cols-3 xl:grid-cols-4 items-center md:items-stretch justify-center gap-6">
          {articles.map(article => <div key={article.id} className='mx-auto max-w-[90%] md:max-w-[100%] shadow-brand-secondary-gray-50 bg-white'>
            <div className=''>
              <img src={article.image} alt={`${article.title} banner image`} className=' max-w-full rounded-t-lg bg-cover'/>
            </div>
            <div className="bg-white px-8 pb-4 pt-0">
              <p className="mt-8 text-[15.5px] ">By {article.author}</p>
              <a href="#">
                <h3 className='text-balance my-4 text-brand-primary-blue-400 text-[1.3rem] hover:text-[#66c6b1] hover:opacity-70 duration-200 ease-in cursor-pointer'>{article.title}</h3>
              </a>
              <p className="max-w-[100%] text-balance text-[15px]">{article.content}</p>
            </div>
          </div>)}
        </div>


        </div>

      </section>
    )
  }
  
  export default Articles;
  