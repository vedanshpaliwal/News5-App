import React, { Component, useState, useEffect } from 'react'
import FeaturedVideo from './FeaturedVideo';
import Newsitem from './Newsitem'
import Spinner from './Spinner';
import WelcomeBox from './WelcomeBox';

const News = ({ key, pagesize, country, category }) => {
  const apikey = "82ac345158ab403eba4bb07b1fda84dd"

  if (pagesize == null) {
    pagesize = 8;
  }
  if (country == null) {
    country = "in";
  }
  const proxyUrl = "https://cors-anywhere.herokuapp.com/"

  const [articles, setarticles] = useState([]);
  const [loading, setloading] = useState(false)
  const [page, setpage] = useState(1);
  const [totalResults, settotalResults] = useState(0)


  useEffect(async () => {
    console.log("csdm")
    console.log(category, country)

    // let url = `https://newsapi.org/v2/top-headlines?country=${country}&category=general&apiKey=c90313c35bd8440eac537d5d7455ff5e`
    let url = `${proxyUrl}https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apikey=${apikey}&page=1&pagesize=${pagesize}`
    let data = await fetch(url)
    let parsedData = await data.json()
    console.log(parsedData)
    setarticles(parsedData.articles)
    settotalResults(parsedData.totalResults);


  }, [])

  const handlePrevclick = async () => {
    console.log("PREVIOUS")

    let url = `${proxyUrl}https://newsapi.org/v2/top-headlines?${country}&category=${category}&apikey=${apikey}&page=${page - 1}&pagesize=${pagesize}`
    setloading(true)
    let data = await fetch(url)
    let parsedData = await data.json()
    setloading(false)
    console.log(parsedData)
    setarticles(parsedData.articles)
    setpage(page - 1)
    setarticles(parsedData.articles)

  }
  const handleNextclick = async () => {

    console.log("next")
    if (page + 1 > Math.ceil(totalResults / pagesize)) {


    }
    else {


      let url = `${proxyUrl}https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apikey=${apikey}&page=${page + 1}&pagesize=${pagesize}`
      setloading(true)
      let data = await fetch(url)
      let parsedData = await data.json()
      setloading(false)

      console.log(parsedData)
      setarticles(parsedData.articles)
      setpage(page + 1)
      setarticles(parsedData.articles)


    }
  }

  return (
    <div style={{ display: 'flex' }}>
      {/* left */}
      <div className='NewsLeft'>
        <WelcomeBox />
      </div>

      {/* right */}
      <div className='NewsRight'>
        <div className="container my-3">

          {loading && <Spinner />}

          <div className='featuredvideo'>
            <span class="btn btn-outline-danger">Featured Video</span>
            <FeaturedVideo />
          </div>
          <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>

            <h2 className="container" style={{ marginTop: 20, textAlign: 'left' }}>Top Headlines</h2>
            <div className='live' >● Updating Live</div>
          </div>
          <div className="row">


            {!loading && articles.map((element) => {
              return <div className="col-md-4 my-3" key={element.url}>
                <Newsitem title={element.title ? element.title.slice(0, 45) : ""} imageurl={element.urlToImage} description={element.description ? element.description.slice(0, 110) : ""} newsurl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />

              </div>
            })}



          </div>


          {<div className="container d-flex justify-content-between">

            <button type="button" disabled={page <= 1} className="btn btn-dark" onClick={handlePrevclick}>&larr;Previous</button>
            <button disabled={page + 1 > Math.ceil(totalResults / pagesize)} type="button" className="btn btn-dark" onClick={handleNextclick}>Next &rarr;</button>

          </div>}
        </div>
      </div>
    </div >
  )

}

export default News;
