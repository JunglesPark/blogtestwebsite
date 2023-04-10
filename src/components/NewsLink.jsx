import React from 'react'

const NewsLink = () => {
  return (
    <div className="grid grid-cols-3 gap-4 grid-rows-3 p-10 m-10">
        <div className="row-span-3">
            <h1>Information</h1>
            <a href="#">View more...</a>
        </div>
        <div className="col-span-2">
            <div>
                <h2>News Cat</h2>
                <h3>News Title Here</h3>
            </div>
        </div>
        <div className="col-span-2">
            <div>
                <h2>News Cat</h2>
                <h3>News Title Here</h3>
            </div>
        </div>
        <div className="col-span-2">
            <div>
                <h2>News Cat</h2>
                <h3>News Title Here</h3>
            </div>
        </div>
        
    </div>
  )
}

export default NewsLink