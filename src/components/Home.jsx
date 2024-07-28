
const Home = ({home}) => {
    return (
        <div id={home}>
            <div id="divBorder" className="d-flex align-items-center" >
                <div className="container-lg p-lg-5 justify-content-center align-items-center d-flex" id="box">
                    <div className="row justify-content-center align-items-center">
                        <div className="col-lg-7">
                            <div className="d-flex">
                                <div>
                                    <h4 className="h4" >Hello I Am</h4>
                                    <h2 className="h2">SOY SEN</h2>
                                    <h4 className="h4">And I'm A <span>Frontend Developer.</span></h4>
                                </div>
                                <div id="circle" className="d-lg-none " >
                                    <img src="../src/assets/profile.png" alt="" />
                                </div>
                            </div>
                            <p>With a passion for creating stunning and user-friendly web interfaces, I specialize in bringing designs to life through code. My expertise lies in HTML, CSS, JavaScript, and modern frontend frameworks. I strive to deliver seamless user experiences that leave a lasting impression.</p>
                            <a className="btn rounded-pill ps-4 pe-4 btn-outline-danger text-light" href="../src/assets/frontend.pdf" download >Download CV</a>
                        </div>

                        <div className="col-lg-5">
                            <div id="circle" className="d-none d-lg-block" >
                                <img src="../src/assets/profile.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home