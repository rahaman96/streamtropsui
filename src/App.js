import './App.css';
import ContactUs from './components/ContactUs';
import EnsuringPage from './components/EnsuringPage';
import Foodlab from './components/Foodlab';
import Footer from './components/Footer';
import Header from './components/Header';
import Slider from './components/Slider';
import Testtimonials from './components/Testtimonials';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App mb-5 overflow-hidden">
      <Header />
      <Slider />
      <Foodlab />
      <EnsuringPage/>
      <ContactUs />
      <Testtimonials />
      <Footer />
    </div>
  );
}

export default App;
