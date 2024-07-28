
const Contact = ({contact}) => {
  return (
    <div id={contact} >
        <div id="divBorder" className="d-flex align-items-center" >
            <div className="container-lg p-lg-5 pb-5 justify-content-center align-items-center d-flex" id="box">
                <div>
                    <h2 className="h2 text-center pb-3">Get In <span>TOUCH</span></h2>
                    <div className="row gap-5">
                        <div className="col-md-4">
                            <p>I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Feel free to reach out to me through any of the contact methods below:</p>
                        </div>
                        <div className="col-md-6">
                            <div className="text-center d-flex pb-2">
                                <i class="fa-solid fa-location-crosshairs" id="icon"></i>
                                <p>Prek Ambel Village, Prek Ambel Commune, Sang District, Kandal Provice</p>
                            </div>
                            <div className="text-center d-flex">
                                <i class="fa-solid fa-phone" id="icon"></i>
                                <a href="tel:0968431366" target="_blank" title="Phone Call" className="text-secondary" >096 843 1366</a>
                            </div><br />
                            <div className="text-center d-flex">
                                <i class="fa-brands fa-telegram" id="icon" ></i>
                                <a href="https://t.me/S_E_N_3" target="_blank" title="Go ot telegram" className="text-secondary" >SOY Sen</a>
                            </div><br />
                            <div className="text-center d-flex">
                                <i class="fa-solid fa-envelope" id="icon"></i>
                                <a href="mailto:noobiezz2020@gmail.com?subject=Contact&body=Hi%20There," target="_blank" title="Go to email" className="text-secondary" >noobiezz2020@gmail.com</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact