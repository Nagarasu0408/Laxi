import './App.css';
import NavBar from './assets/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import FAQSection from './assets/FAQ';
import Heading from './assets/Heading';
import TechnologyStack from './assets/TechnologyStack';
import TeamInfo from './assets/TeamInfo';
import Title from './assets/Title';
<<<<<<< HEAD
import Heading1 from './assets/Heading1';
=======
import Intro from './assets/intro';
import Prototype from './assets/prototype';
import WorkingFlow from './assets/workingflow';
// import Scroll from './assets/scroll';
// import LogoDescription from './assets/logoDescription';
>>>>>>> Team
// import MainSliderComponent from './assets/MainSliderComponent';
// import Login from './assets/login';
// import GetInTouch from './assets/contactus';
// import SearchBox from './assets/SearchBox';
// import Background from './assets/background';

function App() {
  return (
    <>
      <NavBar />
      <Title />
<<<<<<< HEAD
      {/* <SearchBox /> */}
      <Heading />
      <TechnologyStack />
      <Heading1 />
      <TeamInfo />
      <FAQSection />
      {/* <Background /> */}
      {/* <MainSliderComponent />
      <Login />
      <GetInTouch /> */}
=======
      <Prototype />
      <Intro />
      <Heading title="Technology Stacks" />
      <TechnologyStack />
      <Heading title="How It's To Use?" />
      <WorkingFlow />
      <Heading title="Team Details" />
      <TeamInfo />
      <FAQSection />
      {/* <Scroll /> */}
      {/* <LogoDescription /> */}
      {/* <SearchBox /> */}
      {/* <Background /> */}
      {/* <MainSliderComponent /> */}
      {/* <Login /> */}
      {/* <GetInTouch /> */}
>>>>>>> Team
    </>
  );
}

export default App;
