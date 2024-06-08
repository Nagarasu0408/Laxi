import planning from './Images/TechnologyStack/planning1.jpg';
function WorkingFlow() {
      return (
      <div className="container">
        <div className="row">
            <div className="col-6">
               <img src={planning} alt='planning' className='Images11'></img>
            </div>
            <div className="col-6" id="planning">
               <h1>Planning and Service</h1>
               <p>outline key features, user interface, and target audience. Conduct market research to identify user needs and preferences. Define the app's purpose, functionality, and unique selling points. Create wireframes and prototypes to visualize the user journey and interface flow. Prioritize essential features for the initial release and plan for future updates. Consider platform-specific guidelines and design principles for iOS and Android. Ensure a seamless user experience across devices and screen sizes. Collaborate with designers, developers, and stakeholders to refine the concept and align with business goals. Iteratively test and gather feedback for continuous improvement.</p>
            </div>
        </div>
        <div className="row">
        <div className="col-6" id='selecting' >
        <h1>Selecting Cloud Services</h1>
        <p>Input your requirement and watch java translate them into ready-to-use code componenets</p>
        </div>
       <div className="col-6">
       <img src={planning} alt='planning' className='Images11'></img>
       </div>
       </div>
       <div className="row">
    <div className="col-6">
       <img src={planning} alt='planning' className='Images11'></img>
    </div>
    <div className="col-6" id='developing'>
       <h1>Development</h1>
       <p>Input your requirement and watch java translate them into ready-to-use code componenets</p>
    </div>
</div>
<div className="row">
 <div className="col-6" id='testing'>
 <h1>Testing</h1>
 <p>Input your requirement and watch java translate them into ready-to-use code componenets</p>
 </div>
<div className="col-6">
<img src={planning} alt='planning' className='Images11'></img>
</div>
</div>
      </div> 
    );
   
}

export default WorkingFlow;