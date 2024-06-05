import react1 from './Images/react1.jpg'
import aws from './Images/aws.jpg'
import mongo from './Images/atlas.jpg'
import fire from './Images/fire.jpg'
import vscode from './Images/vscode.jpg'

function TechnologyStack() {
    return (<>




        <div class="Techcontainer container bootstrap snippets bootdey">
            <section id="news" class="white-bg padding-top-bottom">
                <div class="container bootstrap snippets bootdey">
                    <div class="timeline">
                        {/* <div class="date-title">
                            
                        </div> */}
                        <div class="row">
                            <div class="col-sm-6 news-item">
                                <div class="news-content">
                                    {/* <div class="date">
                                        <p>28</p>
                                        <small>Fri</small>
                                    </div> */}
                                    <h2 class="news-title">React-Native</h2>
                                    <div class="news-media">
                                        <a class="colorbox cboxElement" href="#">
                                            <img class="img-responsive" src={react1} alt="react" style={{width : '75px', height:'75px'}} />
                                        </a>
                                    </div>
                                    <p>
                                        React Native is an open-source framework created by Facebook for building mobile applications using JavaScript and React. It enables developers to create applications for iOS, Android, and other platforms with a single codebase. .</p>
                                    {/* <a class="read-more" href="#">Read More</a> */}
                                </div>
                            </div>

                            <div class="col-sm-6 news-item right">
                                <div class="news-content">
                                    {/* <div class="date">
                                        <p>27</p>
                                        <small>Thu</small>
                                    </div> */}
                                    <h2 class="news-title">AWS Amplify</h2>
                                    <div class="news-media gallery">
                                        <a class="colorbox cboxElement" href="#">
                                        <img class="img-responsive" src={aws} alt="aws" style={{width : '75px', height:'75px'}} />
                                        </a>
                                        <a class="colorbox cboxElement" href="#"></a>
                                    </div>
                                    <p>AWS Amplify is a comprehensive development platform from Amazon Web Services that simplifies building, deploying, and managing mobile and web applications. It provides a set of tools and services to help developers create full-stack applications with seamless integration to the AWS cloud.</p>
                                    {/* <a class="read-more" href="#">Read More</a> */}
                                </div>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-sm-6 news-item">
                                <div class="news-content">
                                    {/* <div class="date">
                                        <p>26</p>
                                        <small>Wen</small>
                                    </div> */}
                                    <h2 class="news-title">MongoDB Atlas</h2>
                                    <div class="news-media video">
                                        <a class="colorbox-video cboxElement" href="#">
                                        <img class="img-responsive" src={mongo} alt="mongo" style={{width : '75px', height:'75px'}} />
                                        </a>
                                    </div>
                                    <p>MongoDB Atlas is a fully managed cloud database service provided by MongoDB, designed to handle the complexities of deploying, managing, and scaling MongoDB databases. It offers a suite of tools and features to facilitate the development and operation of modern applications.</p>
                                    {/* <a class="read-more" href="#">Read More</a> */}
                                </div>
                            </div>

                            <div class="col-sm-6 news-item right">
                                <div class="news-content">
                                    {/* <div class="date">
                                        <p>25</p>
                                        <small>Tue</small>
                                    </div> */}
                                    <h2 class="news-title">Firebase Authentication</h2>
                                    <div class="news-media gallery">
                                        <a class="colorbox cboxElement" href="#">
                                        <img class="img-responsive" src={fire} alt="firebase" style={{width : '75px', height:'75px'}} />
                                        </a>
                                        <a class="colorbox cboxElement" href="#"></a>
                                    </div>
                                    <p>
                                        Firebase Authentication is a service provided by Google as part of the Firebase platform, designed to help developers easily integrate secure authentication into their applications. It supports a wide range of authentication methods, offering both simplicity and flexibility.</p>
                                    {/* <a class="read-more" href="#">Read More</a> */}
                                </div>
                            </div>
                        </div>

                        {/* <div class="date-title">
                            <span>February 2014</span>
                        </div> */}
                        <div class="row">
                            <div class="col-sm-6 news-item">
                                <div class="news-content">
                                    {/* <div class="date">
                                        <p>27</p>
                                        <small>Thu</small>
                                    </div> */}
                                    <h2 class="news-title">Visual Studio Code</h2>
                                    <div class="news-media video">
                                        <a class="colorbox-video cboxElement" href="#">
                                        <img class="img-responsive" src={vscode} alt="vscode" style={{width : '75px', height:'75px'}} />
                                        </a>
                                    </div>
                                    <p>
                                        Visual Studio Code (VS Code) is a lightweight, powerful code editor developed by Microsoft, widely used for various types of software development, including mobile application development. It provides a rich set of features that enhance productivity and streamline the development process for mobile apps.</p>
                                    {/* <a class="read-more" href="#">Read More</a> */}
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            </section>
        </div >
    </>);
}

export default TechnologyStack;



















// <div class="container">
//     <h4>Technology Stack</h4>
//     <div class="row">
//         <div class="col-md-12">
//             <div class="main-timeline">
//                 <a href="#" class="timeline">
//                     <div class="timeline-icon"><i class="fa fa-globe"></i></div>
//                     <div class="timeline-content">
//                         <h3 class="title">Web Designer</h3>
//                         <p class="description">
//                             Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate ducimus officiis quod! Aperiam eveniet nam nostrum odit quasi ullam voluptatum.
//                         </p>
//                     </div>
//                 </a>
//                 <a href="#" class="timeline">
//                     <div class="timeline-icon"><i class="fa fa-rocket"></i></div>
//                     <div class="timeline-content">
//                         <h3 class="title">Web Developer</h3>
//                         <p class="description">
//                             Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate ducimus officiis quod! Aperiam eveniet nam nostrum odit quasi ullam voluptatum.
//                         </p>
//                     </div>
//                 </a>
//                 <a href="#" class="timeline">
//                     <div class="timeline-icon"><i class="fa fa-briefcase"></i></div>
//                     <div class="timeline-content">
//                         <h3 class="title">Web Designer</h3>
//                         <p class="description">
//                             Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate ducimus officiis quod! Aperiam eveniet nam nostrum odit quasi ullam voluptatum.
//                         </p>
//                     </div>
//                 </a>
//                 <a href="#" class="timeline">
//                     <div class="timeline-icon"><i class="fa fa-mobile"></i></div>
//                     <div class="timeline-content">
//                         <h3 class="title">Web Developer</h3>
//                         <p class="description">
//                             Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate ducimus officiis quod! Aperiam eveniet nam nostrum odit quasi ullam voluptatum.
//                         </p>
//                     </div>
//                 </a>
//             </div>
//         </div>
//     </div>
// </div>