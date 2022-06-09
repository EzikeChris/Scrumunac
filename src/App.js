import Header from "./components/header/header";
import HeroSection from "./components/Hero/hero";
import Mainsection from "./components/mainsection/mainsection";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <Mainsection />
    </div>
  );
}

export default App;
