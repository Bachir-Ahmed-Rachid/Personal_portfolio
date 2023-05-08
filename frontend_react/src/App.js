import './App.css';
import {Header,About,Skills,Work,Footer,} from './container'
import {Navbar} from './components'
function App() {
  return (
    <div className="app">
      <Navbar/>
      <Header/>
      <About/>
      <Skills/>
      <Work/>
      <Footer/>
    </div>
  );
}

export default App;
