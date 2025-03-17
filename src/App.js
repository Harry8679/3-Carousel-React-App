import './App.css';
import CustomCarousel from './components/CustomCarousel';
import EnhancedCarousel from './components/EnhancedCarousel';
import ImagesGallery from './components/ImagesGallery';

function App() {
  return (
    <div className="App">
      <ImagesGallery />
      <CustomCarousel />
      <EnhancedCarousel />
    </div>
  );
}

export default App;
