import './App.css';
import NavBar from './assets/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import FAQSection from './assets/FAQ';
import Heading from './assets/Heading';
import TechnologyStack from './assets/TechnologyStack';
import TeamInfo from './assets/TeamInfo';
import Title from './assets/Title';
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
      <SearchBox />
      <Heading />
      <TechnologyStack />
      <Heading1 />
      <TeamInfo />
      <FAQSection />
      <Background />
      {/* <MainSliderComponent /> */}
      {/* <Login /> */}
      {/* <GetInTouch /> */}
    </>
  );
}

export default App;
