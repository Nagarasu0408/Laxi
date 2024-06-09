import planning from './Images/TechnologyStack/planning1.jpg';
import selection from './Images/TechnologyStack/selection1.jpg';
import developing from './Images/TechnologyStack/development.png';
import testing from './Images/TechnologyStack/testing1.jpg';
function WorkingFlow() {
      return (
      <div className="container">
        <div className="row">
            <div className="col-5">
               <img src={planning} alt='planning' className='Images11'></img>
            </div>
            <div className="col-7" id="planning">
               <h1>Planning and Service</h1>
               <p>Defining the app’s goals, target audience, features, and cloud integration needs. The process includes designing wireframes, setting timelines, and budgeting. Development involves building the app’s front-end and back-end, leveraging cloud services for storage, authentication, and real-time data synchronization. Ensuring robust security and compliance with cloud providers is crucial.</p>
            </div>
        </div>
        <div className="row">
        <div className="col-7" id='selecting' >
        <h1>Selecting Cloud Services</h1>
        <p>Selecting cloud services for mobile app development involves <br></br>evaluating providers based on your app's requirements. Key considerations<br></br> include scalability, ease of integration, cost, security, and available features. <br></br>Popular options are Firebase (Google) for real-time databases and seamless authentication, AWS (Amazon) for extensive infrastructure and machine learning capabilities, and Microsoft Azure for robust enterprise solutions and AI services. </p>
        </div>
       <div className="col-5">
       <img src={selection} alt='selection' className='Images11'></img>
       </div>
       </div>
       <div className="row">
    <div className="col-5">
       <img src={developing} alt='planning' className='Images11'></img>
    </div>
    <div className="col-7" id='developing'>
       <h1>Development</h1>
       <p>First, choose a cloud provider like Firebase, AWS, or Azure. Begin with defining the app’s features and user requirements. Develop the front-end using frameworks like React Native or Flutter. Integrate cloud services for authentication, database management, storage, and real-time data syncing. Implement security protocols to protect data. Perform rigorous testing to ensure functionality and performance. Deploy the app on platforms like Google Play and Apple App Store.</p>
    </div>
</div>
<div className="row">
 <div className="col-7" id='testing'>
 <h1>Testing</h1>
 <p>Testing mobile apps integrated with cloud services involves several critical steps. First, functional testing ensures that all features work as intended, including cloud-based authentication and data synchronization. Performance testing evaluates the app’s responsiveness and load-handling capabilities, particularly during peak usage times. Security testing is crucial to protect user data and prevent breaches.</p>
 </div>
<div className="col-5">
<img src={testing} alt='planning' className='Images11'></img>
</div>
</div>
      </div> 
    );
   
}

export default WorkingFlow;