import React from 'react'
import "./Loader.css"

function Loader() {
    return (
        <>
            <div class="loader">
                <div id="background-circles">
                    <div id="bg-left-circle"></div>
                    <div id="bg-right-circle"></div>
                </div>

                <div id="foreground-circles">
                    <div id="top-left-circle">
                        <div id="top-left-inner"></div>
                    </div>
                    <div id="bottom-right-circle">
                        <div id="bottom-right-inner"></div>
                    </div>

                    <div id="bottom-left-circle">
                        <div id="bottom-left-inner"></div>
                    </div>
                    <div id="top-right-circle">
                        <div id="top-right-inner"></div>
                    </div>
                </div>
            </div></>
    )
}

export default Loader
