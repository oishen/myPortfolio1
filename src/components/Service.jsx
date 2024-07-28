import Buttons from "./Buttons"

const Service = ({service}) => {
    return (
        <div id={service}>
            <div id="divBorder" className="d-flex align-items-center" >
                <div className="container-lg p-lg-5 justify-content-center align-items-center d-flex" id="box">
                    <div>
                        <h2 className="h2 text-center pb-3">Our <span>SERVICES</span></h2>
                        <div className="row justify-content-center align-items-center gap-5 ">
                            <div className="col-lg col-md-12 text-center border border-danger rounded-5 p-5">
                                <i class="fa-solid fa-code" id="serIcon" ></i>
                                <h4 className="h4">Web Development</h4>
                                <p>Web development involves the creation and maintenance of websites. It encompasses several aspects including web design, web content development, client-side/server-side scripting, and network security configuration. It ensures that websites are functional, user-friendly, and visually appealing.</p>
                                <Buttons modalId="#webId" />
                            </div>

                            <div className="col-lg col-md-12 text-center border border-danger rounded-5 p-5">
                                <i class="fa-solid fa-wand-magic-sparkles" id="serIcon"></i>
                                <h4 className="h4">UX/UI</h4>
                                <p>UX (User Experience) design aims to enhance user satisfaction by improving the usability, accessibility, and pleasure provided in the interaction with a product. UI (User Interface) design involves the look and layout of a product, ensuring it is both aesthetically pleasing and easy to navigate.</p>
                                <Buttons modalId="#uiId" />
                            </div>
                        </div>
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
                                        <a href="https://oishen.github.io/interior/">
                                            <img src="../src/assets/oishen.github.io_interior_ (2).png" alt="interior website" />
                                        </a>
                                        <p>Show about your company</p>
                                    </div>

                                    <div className="col-3">
                                        <a href="https://yorkmars.000webhostapp.com/">
                                            <img src="../src/assets/yorkmars.000webhostapp.com_ (1).png" alt="full stack website" />
                                        </a>
                                        <p>Build a full stack website</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                {/* The Modal */}
                <div class="modal fade text-dark" id="uiId">
                    <div class="modal-dialog modal-fullscreen-xxl-down">
                        <div class="modal-content">

                            {/* Modal Header */}
                            <div class="modal-header">
                                <h4 class="modal-title">UX/UI</h4>   
                                <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                            </div>

                            {/* Modal body */}
                            <div class="modal-body">
                                
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Service