import './App.css';
import {Header,About,Skills,Work,Footer, Testimonial,} from './container'
import {Navbar} from './components'
function App() {
  return (
    <div className="app">
      <Navbar/>
      <Header/>
      <About/>
      <Work/>
      <Skills/>
      <Testimonial/>
      <Footer/>
    </div>
  );
}

export default App;
