import React from 'react'
import ReactPlayer from "react-player";

export default function FeaturedVideo() {
    return (
        <div>

            <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                <ol class="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                <div class="carousel-inner" style={{ marginTop: 10 }}>
                    <div class="carousel-item active">
                        {/* <img class="d-block w-100" src="..." alt="First slide" /> */}
                        <ReactPlayer
                            url='https://www.youtube.com/watch?v=FWOMcsf19wI'
                            playing={false}
                            width="100%"
                            height="350px"
                            controls={true}
                        />
                    </div>
                    <div class="carousel-item">
                        <ReactPlayer
                            url='https://www.youtube.com/watch?v=2Fy4lu4Mam4'
                            playing={false}
                            width="100%"
                            height="350px"
                            controls={true}
                        />

                    </div>
                    <div class="carousel-item">
                        <ReactPlayer
                            url='https://www.youtube.com/watch?v=1pgmvIB3Fjw'
                            playing={false}
                            width="100%"
                            height="350px"
                            controls={true}
                        />

                    </div>
                </div>
                <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
            </div>

        </div>
    )
}
