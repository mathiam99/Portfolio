import './App.css';
import Header from './Components/header';
import Tech from './Components/landing-page';
import Experience from './Components/experience';
import Project from './Components/formation';
import Contact from './Components/contact';
import Footer from './Components/footer';

function App() {
  return (
  	<div className="App">
		<Header/>	  
		<Tech/>
		<Experience/>
		<Project/>
		<Contact/>	
		<Footer/>
	</div>
  );
}

export default App;
