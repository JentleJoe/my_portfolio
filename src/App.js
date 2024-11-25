import { useState } from 'react';
import './App.css';
import NavBar from './components/NavBar'
import Alert from './components/Alert';
import Banner from './components/Banner';
import 'bootstrap/dist/css/bootstrap.min.css'
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [alert, setAlert] = useState({showAlert: false, color: '', text: ''})

  const handleAlert = (text, color) => {
    if (alert.showAlert){
      // Means Alert is currently been diplayed, Returns to default OFF
      setAlert(() => ({
        showAlert: false,
        color: '',
        text: ''
      }))
    }
    else //Shows Alert for x seconds and toggles it OFF
    {
      setAlert((prev) => ({
        ...prev,
        showAlert: !alert.showAlert,
        color: color,
        text: text
      }))
      setTimeout(()=>{
        setAlert((prev) => ({
          showAlert: false,
          color: '',
          text: ''
        }))
      }, 1000)
    }
  }

  return (
    <div className="App">
      {alert.showAlert && <Alert text={alert.text} color={alert.color} />}
      <NavBar/>
      <Banner />
      <Skills />
      <Projects />
      <Contact setAlert={handleAlert} alert={alert} />
      <Footer />
    </div>
  );
}

export default App;
