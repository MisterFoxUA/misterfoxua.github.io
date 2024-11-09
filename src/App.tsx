import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom';
import { MainPage } from './pages/MainPage';
import { DetailsPage } from './pages/DetailsPage';
import { AboutUs } from './pages/AboutUs';
import { Pages } from './const';
import { Helmet } from 'react-helmet';
import { CategoryPage } from './pages/Categories';
import { useEffect } from 'react';

require('./styles/reset.css');
require('./styles/basic.css');

function App() {

  useEffect(() => {
    const linkInter = document.createElement('link');
    linkInter.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap';
    linkInter.rel = 'stylesheet';
    document.head.appendChild(linkInter);

    const linkMontserrat = document.createElement('link');
    linkMontserrat.href = 'https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&display=swap';
    linkMontserrat.rel = 'stylesheet';
    document.head.appendChild(linkMontserrat);
  }, []);

  return (
    <BrowserRouter basename="/">
      <Helmet>
        <title>Mister Fox WebGaming</title>
        <meta name="description" content="Mister Fox WebGaming is an immersive online gaming platform where players can dive into a world of diverse entertainment, from classic games to the latest innovative experiences. Our games are designed for maximum engagement and comfort, accessible on any device, and ready to deliver unforgettable moments. Join the adventure with Mister Fox WebGaming — where the thrill is always within reach!" />
        <meta property="og:title" content="Mister Fox WebGaming" />
        <meta property="og:description" content="Mister Fox WebGaming is an immersive online gaming platform where players can dive into a world of diverse entertainment, from classic games to the latest innovative experiences. Our games are designed for maximum engagement and comfort, accessible on any device, and ready to deliver unforgettable moments. Join the adventure with Mister Fox WebGaming — where the thrill is always within reach!" />
        <meta http-equiv="Cache-Control" content="public, max-age=31536000, immutable"></meta>
      </Helmet>
      <div className='blur'>
        <Routes>
          <Route path={Pages.Main} element={<MainPage />} />
          <Route path={Pages.Details} element={<DetailsPage />} />
          <Route path={Pages.AboutUs} element={<AboutUs />} />
          <Route path={Pages.Categories} element={<CategoryPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
