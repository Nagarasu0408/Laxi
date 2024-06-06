import react1 from './Images/react1.jpg';
import aws from './Images/aws.jpg';
import adobe from './Images/adobe.png'; 
import figma from './Images/figma.png';
import flutter from './Images/Flutter.jpg';
import bootstrap from './Images/Bootstrap.jpeg';
import tailwind from './Images/Tailwindcss.jpeg';
import kotlin from './Images/Kotlin.jpeg';
import react from './Images/react.png';
function TechnologyStack() {
    return (<>




        <div class="Techcontainer container bootstrap snippets bootdey">
            <section id="news" class="white-bg padding-top-bottom">
                <div class="container bootstrap snippets bootdey">
                    <div class="timeline">
                        <div class="date-title">
                            <span>UI/UX Design and Frameworks</span>
                        </div>
                        <div class="row">
                            <div class="col-sm-6 news-item">
                                <div class="news-content">
                                    {/* <div class="date">
                                        <p>28</p>
                                        <small>Fri</small>
                                    </div> */}
                                    <h2 class="news-title">Figma</h2>
                                    <div class="news-media">
                                        <a class="colorbox cboxElement" href="#">
                                            <img class="img-responsive" src={figma} alt="react" style={{width : '75px', height:'75px'}} />
                                        </a>
                                    </div>
                                    <p>
                                    Figma is a powerful, web-based design tool that has become essential in mobile application development due to its collaborative capabilities and comprehensive features. Its real-time collaboration allows designers, developers, and stakeholders to work simultaneously on a project, enhancing communication and efficiency. </p>
                                    <a class="read-more" href="https://help.figma.com/hc/en-us">Read More</a>
                                </div>
                            </div>

                            <div class="col-sm-6 news-item right">
                                <div class="news-content">
                                    {/* <div class="date">
                                        <p>27</p>
                                        <small>Thu</small>
                                    </div> */}
                                    <h2 class="news-title">PhotoShop</h2>
                                    <div class="news-media gallery">
                                        <a class="colorbox cboxElement" href="#">
                                        <img class="img-responsive" src={adobe} alt="aws" style={{width : '75px', height:'75px'}} />
                                        </a>
                                        <a class="colorbox cboxElement" href="#"></a>
                                    </div>
                                    <p>Adobe Photoshop is a pivotal tool in mobile application development due to its robust image editing capabilities and versatility. It enables designers to create and manipulate high-quality graphics, ensuring that visual elements in mobile apps are polished and professional. </p>
                                    <a class="read-more" href="https://helpx.adobe.com/photoshop/user-guide.html">Read More</a>
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
                                    <h2 class="news-title">React Js</h2>
                                    <div class="news-media video">
                                        <a class="colorbox-video cboxElement" href="#">
                                        <img class="img-responsive" src={react} alt="mongo" style={{width : '75px', height:'75px'}} />
                                        </a>
                                    </div>
                                    <p>React.js is vital in web application development due to its efficiency, flexibility, and developer-friendly features. Its component-based architecture allows for reusable, modular UI components, making code more manageable and scalable. </p>
                                    <a class="read-more" href="https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_getting_started">Read More</a>
                                </div>
                            </div>

                            <div class="col-sm-6 news-item right">
                                <div class="news-content">
                                    {/* <div class="date">
                                        <p>25</p>
                                        <small>Tue</small>
                                    </div> */}
                                    <h2 class="news-title">Bootstrap</h2>
                                    <div class="news-media gallery">
                                        <a class="colorbox cboxElement" href="#">
                                        <img class="img-responsive" src={bootstrap} alt="firebase" style={{width : '75px', height:'75px'}} />
                                        </a>
                                        <a class="colorbox cboxElement" href="#"></a>
                                    </div>
                                    <p>
                                    Bootstrap is essential in web application development due to its comprehensive framework that simplifies and accelerates the design process. As a powerful front-end toolkit, Bootstrap provides a rich set of pre-designed components, such as buttons, forms, and navigation bars, enabling developers to create responsive, mobile-first web applications with minimal effort.</p>
                                    <a class="read-more" href="https://getbootstrap.com/docs/5.0/getting-started/introduction/">Read More</a>
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
                                    <h2 class="news-title">Tailwind CSS</h2>
                                    <div class="news-media video">
                                        <a class="colorbox-video cboxElement" href="#">
                                        <img class="img-responsive" src={tailwind} alt="vscode" style={{width : '75px', height:'75px'}} />
                                        </a>
                                    </div>
                                    <p>
                                    Tailwind CSS is a highly significant tool in web application development due to its utility-first approach, which promotes rapid and efficient styling. Unlike traditional CSS frameworks, Tailwind provides a comprehensive set of low-level utility classes that can be combined to create custom designs directly within the HTML markup. 

</p>
                                    <a class="read-more" href="https://tailwindcss.com/docs/installation">Read More</a>
                                </div>
                            </div>
                            <div class="col-sm-6 news-item right">
                                <div class="news-content">
                                    {/* <div class="date">
                                        <p>25</p>
                                        <small>Tue</small>
                                    </div> */}
                                    <h2 class="news-title">Flutter</h2>
                                    <div class="news-media gallery">
                                        <a class="colorbox cboxElement" href="#">
                                        <img class="img-responsive" src={flutter} alt="firebase" style={{width : '75px', height:'75px'}} />
                                        </a>
                                        <a class="colorbox cboxElement" href="#"></a>
                                    </div>
                                    <p>
                                    Flutter is crucial in mobile application development for its ability to create high-quality, natively compiled applications for both Android and iOS from a single codebase. Developed by Google, Flutter accelerates development, reducing both time and costs.</p>
                                    <a class="read-more" href="https://docs.flutter.dev/">Read More</a>
                                </div>
                            </div>
                            <div class="col-sm-6 news-item">
                                <div class="news-content">
                                    {/* <div class="date">
                                        <p>25</p>
                                        <small>Tue</small>
                                    </div> */}
                                    <h2 class="news-title">Kotlin</h2>
                                    <div class="news-media gallery">
                                        <a class="colorbox cboxElement" href="#">
                                        <img class="img-responsive" src={kotlin} alt="firebase" style={{width : '75px', height:'75px'}} />
                                        </a>
                                        <a class="colorbox cboxElement" href="#"></a>
                                    </div>
                                    <p>
                                    Kotlin has become crucial in mobile application development due to its seamless interoperability with Java, enhanced safety features, and concise syntax. Officially supported by Google for Android development, Kotlin addresses many of Java's shortcomings, making code more readable and less prone to errors. </p>
                                    <a class="read-more" href="https://getbootstrap.com/docs/5.0/getting-started/introduction/">Read More</a>
                                </div>
                            </div>
                            <div class="col-sm-6 news-item right">
                                <div class="news-content">
                                    {/* <div class="date">
                                        <p>25</p>
                                        <small>Tue</small>
                                    </div> */}
                                    <h2 class="news-title">AWS</h2>
                                    <div class="news-media gallery">
                                        <a class="colorbox cboxElement" href="#">
                                        <img class="img-responsive" src={aws} alt="firebase" style={{width : '75px', height:'75px'}} />
                                        </a>
                                        <a class="colorbox cboxElement" href="#"></a>
                                    </div>
                                    <p>
                                    AWS plays a vital role in mobile application development by providing a scalable, secure, and reliable cloud infrastructure. It offers a suite of services specifically tailored for mobile apps, such as AWS Amplify, which simplifies backend development, authentication, and real-time data synchronization.</p>
                                    <a class="read-more" href="https://getbootstrap.com/docs/5.0/getting-started/introduction/">Read More</a>
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