import React from 'react'

const Newsitem = (props) => {


    let { title, description, imageurl, newsurl, author, date, source } = props;
    return (
        <div>
            <div className="card" style={{ height: 500 }}>
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" style={{ zIndex: '1', }}>
                    {source}</span>

                <img src={imageurl} class="card-img-top" alt="..." style={{ height: 220 }} />
                <div className="card-body">
                    <h5 className="card-title">{title}...</h5>
                    <p className="card-text">{description}</p>
                    <div class="card-footer" style={{ position: 'absolute', bottom: 50 }}>
                        <small className="text-muted">By {!author ? "unknown" : author} on {new Date(date).toGMTString()}</small>
                    </div>
                    <a rel="noreferrer" href={newsurl} target="_blank" className="btn btn-dark btn-sm" style={{ position: 'absolute', bottom: 12 }}>Read More</a>
                </div>
            </div>
        </div>
    )

}

export default Newsitem