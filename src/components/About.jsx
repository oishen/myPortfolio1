import Buttons from './Buttons'
const About = ({about}) => {
    return (
        <div id={about} >
            <div id="divBorder" className="d-flex align-items-center" >
            <div className="container-lg p-lg-5 justify-content-center align-items-center d-flex" id="box">
                <div className="row justify-content-center align-items-center">
                    <div className="col-lg-5">
                        <div id="circle" className="d-none d-lg-block" >
                            <img src="../src/assets/profile1.png" alt="" />
                        </div>
                    </div>

                    <div className="col-lg-7">
                        <div className="d-flex align-items-center gap-5 pb-5">
                            <div id="circle" className='d-lg-none d-md-block' >
                                <img src="../src/assets/profile1.png" alt="" />
                            </div>
                            <h2 className="h2">About <span>ME</span></h2>
                        </div>
                        <p>With a passion for creating stunning and user-friendly web interfaces, I specialize in bringing designs to life through code. My expertise lies in HTML, CSS, JavaScript, and modern frontend frameworks. I strive to deliver seamless user experiences that leave a lasting impression.</p>
                        <Buttons modalId="#modalId" />
                        {/* <button type="button" class="btn btn-outline-danger rounded-pill ps-4 pe-4 text-light" data-bs-toggle="modal" data-bs-target="#modalId">
                            Read More
                        </button> */}
                    </div>
                </div>
            </div>

            {/* The Modal */}
            <div class="modal fade text-dark" id="modalId">
                <div class="modal-dialog modal-fullscreen-xl-down">
                    <div class="modal-content">

                        {/* Modal Header */}
                        <div class="modal-header">
                            <h4 class="modal-title">About Me</h4>   
                            <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                        </div>

                        {/* Modal body */}
                        <div class="modal-body">
                            <p>Hello dear, my name's Soy Sen and I'm 22 years old. I gratuate at RUPP of the Computer Science department on 2024. I have experiences with Chip mong Tk condo for worker of stock position and frontend developer at Panel 7.</p>
                            Education:
                            <ul>
                                <li>2009 - 2021: Prek ambel Primary School</li>
                                <li>2013 - 2016: Samdach Techo Hun Sen Prek ambel Secondary School</li>
                                <li>2017 - 2020: Samdach Techo Hun Sen Prek ambel High School</li>
                                <li>2021 - 2024: Royal University of Phnom Penh</li>
                            </ul>
                            Skill
                            <p>Languages</p>
                            <ul>
                                <li>HTML & CSS</li>
                                <li>JavaScript</li>
                                <li>Bootstrap, JQuery and ReacJS</li>
                                <li>PHP</li>
                            </ul>
                            <p>Technology</p>
                            <ul>
                                <li>MySQL</li>
                                <li>Figma</li>
                            </ul>
                            Experience
                            <p>2020 - 2021: Worker of stock at Chip mong Tk condo</p>
                            <ul>
                                <li>Managed stock control processes, ensuring accurate inventory levels.</li>
                            </ul>
                            <p>2023 - 2024: Frontend Developer at Panel 7</p>
                            <ul>
                                <li>Designed and implemented user interfaces using Figma, ensuring a cohesive and visually appealing user experience.</li>
                                <li>Developed responsive websites using HTML, CSS, JavaScript and Bootstrap</li>
                                <li>Conducted regular website maintenance and updates, ensuring optimal performance and security.</li>
                                <li>Researched and implemented new web technologies to improve development processes and product offerings.</li>
                            </ul>
                        </div>

                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default About