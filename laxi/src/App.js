import './App.css';
import NavBar from './assets/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import SearchBox from './assets/SearchBox';
import FAQSection from './assets/FAQ';
import Heading from './assets/Heading';
import TechnologyStack from './assets/TechnologyStack';
import Background from './assets/background';
import TeamInfo from './assets/TeamInfo';
import Title from './assets/Title';
import Heading1 from './assets/Heading1';
// import MainSliderComponent from './assets/MainSliderComponent';
// import Login from './assets/login';
// import GetInTouch from './assets/contactus';

function App() {
  return (
    <>
      <NavBar />
      <Title />
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
    </>
  );
}

export default App;
