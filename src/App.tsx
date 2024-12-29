import Home from "./modules/home";
import Navbar from "./modules/navbar";
import Stack from "./modules/stack";
import Experience from "./modules/experience";
import Contact from "./modules/contact/contatct";

function App() {
  return (
    <div className="container flex flex-col max-w-5xl min-h-screen">
      <Navbar />
      <Home />
      <Experience />
      <Stack />
      <Contact />
    </div>
  );
}

export default App;
