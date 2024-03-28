//yaha pe component bna ke export krte hai jisse main.jsx mai import krke use krte hai
import "./App.css";
import Navigation from "./components/navigation";
import HeroSection from "./components/heroSection";
const App =  () => {

  return <div>
    <Navigation />
    <HeroSection />
  </div>

};

export default App;