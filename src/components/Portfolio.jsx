import Buttons from "./Buttons"

const Portfolio = ({portfolio}) => {
    return (
        <div id={portfolio}>
            <div id="divBorder" className="d-flex align-items-center" >
                <div className="container-lg p-lg-5 justify-content-center align-items-center d-flex" id="box">
                    <div className="text-center" >
                        <h2 className="h2 text-center pb-3">Our <span>PROJECTS</span></h2>
                        <div className="row justify-content-center align-items-center gap-5 pb-5 ">
                            <div className="col-3">
                                <a href="https://oishen.github.io/interior/"  >
                                    <img src="../src/assets/oishen.github.io_interior_ (2).png" alt="interior website" />
                                </a>
                            </div>

                            <div className="col-3">
                                <a href="https://yorkmars.000webhostapp.com/">
                                    <img src="../src/assets/yorkmars.000webhostapp.com_ (1).png" alt="full stack website" />
                                </a>
                            </div>
                        </div>
                        <Buttons modalId="#webId" />
                    </div>
                </div>

                {/* The Modal */}
                <div class="modal fade text-dark" id="webId">
                    <div class="modal-dialog modal-fullscreen-xxl-down">
                        <div class="modal-content">

                            {/* Modal Header */}
                            <div class="modal-header">
                                <h4 class="modal-title">Web Development</h4>   
                                <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                            </div>

                            {/* Modal body */}
                            <div class="modal-body">
                                <div className="row">
                                    <div className="col-3">
                                        <img src="../src/assets/oishen.github.io_interior_ (2).png" alt="interior website" />
                                        <p>Show about your company</p>
                                    </div>

                                    <div className="col-3">
                                        <img src="../src/assets/yorkmars.000webhostapp.com_ (1).png" alt="full stack website" />
                                        <p>Build a full stack website</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div> 
        </div>  
    )
}

export default Portfolio