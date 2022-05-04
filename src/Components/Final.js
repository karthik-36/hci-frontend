import React, { Component } from 'react'


export default class About extends Component {






    render() {




        return (
            <div>
                <h2> Final Implementation</h2>
                <button class="button button1"><a href="https://drive.google.com/file/d/1rFkqY6a6OyLuUzywRs7hXhzwCkBJiuwh/view?usp=sharing"> Download the app </a></button>

                <br />

               {/* <a href="https://drive.google.com/file/d/1rFkqY6a6OyLuUzywRs7hXhzwCkBJiuwh/view?usp=sharing">download link</a> */}



                <h3> Installation Instructions</h3>
                <ul style={{ textAlign: "left" }}>
                    <li>follow the video instructions to install apk. <br />
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/vK_jgnEe_8w" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </li>

                    <li>
                        <ul style={{ textAlign: "left" }}>
                            <li>after the app is installed you need to open settings</li>
                            <li>select permissions then you need to manually give location, camera, storage permissions</li>
                        </ul>

                    </li>






                </ul>
                <br />
                <br />
                <br />
                <br />
                <ul style={{textAlign : "left"}}>

                    <li>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/sYOEJpDsblU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    <br />
                    </li>
                    <li>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/4OiTdAj6q3E" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    <br />
                    </li>

                    <li></li>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/fdNZ00pELvI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    <br />

                </ul>
            </div>
        )
    }
}
