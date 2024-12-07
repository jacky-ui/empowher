import Header from './components/Header/Header';
import Image from './components/Image/Image';
import donor from './assets/images/donors.png';
import Section1 from './components/Section1/Section1';
import Section2 from './components/Section2/Section2';
import Section3 from './components/Section3/Section3';
import './styles/App.css';
import Section4 from './components/Section4/Section4';
import Footer from './components/Footer/Footer';

function App () {
  return(
    <>
      <Header />
      <main className='main'>
        <Image src={donor} alt='Our donors include: TD, Borden Ladner Gervais, datacamp, CIBC, IPSEN'/>
        <Section1 />
        <Section2 />
        <Section3 />
        {/*<Section4 />
        <Footer />*/}
      </main>
    </>
  );
};

export default App;