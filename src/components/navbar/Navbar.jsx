import { Link, Outlet } from "react-router-dom"




function Navbar() {



    return (
        <>
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
                <div class="container-fluid">
                    <Link to="/"><button className="btn text-light">MOVIES</button></Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0  w-100">


                        </ul>
                    </div>
                </div>
            </nav>


        </>
    )
}

export default Navbar