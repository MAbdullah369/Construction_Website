import React from 'react'
import Cards from '../Cards/Cards'
const Projects = () => {
  return (
    <>
    <div className='container'>
    <div className="mt-5 text-center">
          <h1 className='UpperCaseLetters'>overview of current projects</h1>
          <div className="separator_area">
            <div className="separatorhome3auto1"></div>
            <div className="separatorhome3auto"></div>
          </div>
          <p className='color_paragraph'>
          We are currently engaged in a multitude of many high profile and different scale projects in diverse market segments, all over the country. We are working in the fields of education, business, retail, healthcare, commercial, sports, aviation, pharmaceutical, and green building . These projects will soon be adding to our already extensive portfolio and stand as a testament to our dedication to provide innovation, quality and the best practices in the construction industry.
          </p>
        </div>
        <Cards/>
    </div>
    </>
  )
}

export default Projects