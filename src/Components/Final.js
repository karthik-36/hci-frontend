import React, { Component } from 'react'


export default class About extends Component {






    render() {




        return (
            <div>
                <h2> Final Implementation</h2>

                <br />
                <h3>Source Code</h3>

                <button class="button button1"><a href="https://github.com/karthik-36/ForagerAndroid"> Github repo</a></button>
                <br />
                <br />

                <h3>Apk link</h3>
                <button class="button button1"><a href="https://drive.google.com/file/d/1rFkqY6a6OyLuUzywRs7hXhzwCkBJiuwh/view?usp=sharing"> Download the app </a></button>

                <br />

                {/* <a href="https://drive.google.com/file/d/1rFkqY6a6OyLuUzywRs7hXhzwCkBJiuwh/view?usp=sharing">download link</a> */}


                <br />
                <br />
                <br />
                <br />
                <h3> Installation Instructions</h3>
                <br />
                <br />
                <ul style={{ textAlign: "left" }}>
                    <li>follow the video instructions to install apk. <br />
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/vK_jgnEe_8w" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </li>

                    <li>
                        <ul style={{ textAlign: "left" }}>
                            <li>after the app is installed you need to open settings.</li>
                            <li>select permissions then you need to manually give location, camera, storage permissions.</li>
                        </ul>

                    </li>






                </ul>
                <br />
                <br />
                <br />
                <br />
                <h3 style={{ textAlign: "center" }}> Demo Videos </h3>
                <br />
                <br />
                <br />
                <br />
                <ul style={{ textAlign: "left" }}>

                    <li>
                        <h4>Keeping track of items</h4>
                        <iframe width="760" height="415" src="https://www.youtube.com/embed/sYOEJpDsblU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        <br />
                        <br />
                        <br />
                    </li>
                    <li>
                        <h4>Accepting new donation items</h4>
                        <iframe width="760" height="415" src="https://www.youtube.com/embed/4OiTdAj6q3E" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        <br />
                        <br />
                        <br />
                        <br />
                    </li>
                    <li>
                        <h4>Accepting new food item for donation</h4>
                        <iframe width="760" height="415" src="https://www.youtube.com/embed/fdNZ00pELvI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </li>
                    <br />

                </ul>

                <br />
                <br />
                <br />
                <br />
                <h3>Contributions</h3>
                <br />
                <br />
                <h4 style = {{textAlign : "left"}}>Karthik Singh : </h4> <h5 style = {{textAlign : "left"}}>    App task 2(Accepting new donation items) & 3(Accepting new food item for donation) , Website & deployment.</h5>

                <br />
                <br />

                <h4 style = {{textAlign : "left"}}>Aditiya Ranganatan : </h4> <h5 style = {{textAlign : "left"}}>    App task 1(Keeping track of items), App styling , Website styling & Videos.</h5>
                <br />
                <br />
            </div>
        )
    }
}
