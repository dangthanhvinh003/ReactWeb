import logo from './logo.svg';
import './App.css';
import header from './header';



import NavbarComponent from './components/navbar';
import CardComponent from './components/card';
import CarouselComponent from './components/carousal';
import ImageArtists from './components/imgArtist';
import HistoryComponent from './components/historyComponent';
import FooterComponent from './components/footer';
function App() {
  return (
    <>
      <NavbarComponent />
     <CarouselComponent></CarouselComponent>
      <CardComponent />
      <ImageArtists></ImageArtists>
      <HistoryComponent></HistoryComponent>
      <footer>
        <FooterComponent></FooterComponent>
      </footer>
    </>
  );
}

export default App;
