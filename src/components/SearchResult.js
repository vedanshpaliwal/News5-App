import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Newsitem from './Newsitem';
import Spinner from './Spinner';

export default function SearchResult({ match }) {
    const apikey = "c90313c35bd8440eac537d5d7455ff5e"

    let { query } = useParams();
    console.log(query)
    const category = query

    const pagesize = 20;
    const country = 'in';
    const [articles, setarticles] = useState([]);
    const [loading, setloading] = useState(false)
    const [page, setpage] = useState(1);
    const [totalResults, settotalResults] = useState(0)
    const proxyUrl = "https://cors-anywhere.herokuapp.com/"


    useEffect(async () => {
        console.log("searching....")

        // console.log(category, country)
        // let url = `https://newsapi.org/v2/top-headlines?country=${country}&category=general&apiKey=c90313c35bd8440eac537d5d7455ff5e`
        // let url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apikey=${apikey}&page=1&pagesize=${pagesize}`
        let url = `${proxyUrl}https://newsapi.org/v2/everything?q=${category}&from=2022-05-25&sortBy=popularity&apiKey=${apikey}`
        console.log(url)
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
        <div>
            <div className="container my-3">
                <h2 className="container" style={{ marginTop: 40 }}><center>Search Results for {query}</center></h2>
                {loading && <Spinner />}
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
    )
}
