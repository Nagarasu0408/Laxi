import planning from './Images/TechnologyStack/planning1.jpg';
import selection from './Images/TechnologyStack/selection1.jpg';
import developing from './Images/TechnologyStack/development.png';
import testing from './Images/TechnologyStack/testing1.jpg';
function WorkingFlow() {
   return (
   <div className='container'>
      <div className="section-container-1">
           <div className='column-image'>
            <img src={planning} alt='planning'></img>            
           </div>
           <div className='column-content'>
            <div className='context-container'>
               <h3>Planning and Services</h3>
               <p>Using cloud services for mobile application development involves leveraging various cloud platforms to handle backend services, 
                  storage, databases, authentication,  and more. Here’s a comprehensive guide to help you get started</p>
            </div>
           </div>
      </div>

      <div className="section-container-2">
     <div className='column-content'>
      <div className='context-container'>
         <h3>Planning and Services</h3>
         <p>Using cloud services for mobile application development involves leveraging various cloud platforms to handle backend services, 
            storage, databases, authentication,  and more. Here’s a comprehensive guide to help you get started</p>
      </div>
     </div>
     <div className='column-image2'>
      <img src={selection} alt='planning'></img>            
     </div>
     </div>

<div className="section-container-3">
     <div className='column-image'>
      <img src={developing} alt='planning'></img>            
     </div>
     <div className='column-content'>
      <div className='context-container'>
         <h3>Planning and Services</h3>
         <p>Using cloud services for mobile application development involves leveraging various cloud platforms to handle backend services, 
            storage, databases, authentication,  and more. Here’s a comprehensive guide to help you get started</p>
      </div>
     </div>
</div>
<div className="section-container-4">
  <div className='column-content'>
   <div className='context-container'>
      <h3>Planning and Services</h3>
      <p>Using cloud services for mobile application development involves leveraging various cloud platforms to handle backend services, 
         storage, databases, authentication,  and more. Here’s a comprehensive guide to help you get started</p>
   </div>
  </div>
  <div className='column-image2'>
   <img src={testing} alt='planning'></img>            
  </div>
  </div>
   </div>

   
   );
}
export default WorkingFlow;