
import './App.css';
import { BrowserView, MobileView } from 'react-device-detect';
import { HomePage } from './pages/page-home/HomePage';
import "animate.css"

function App() {
  return (
    <>
      <MobileView>
        <HomePage />
      </MobileView>
      <BrowserView>
        <h1>Browser View</h1>
      </BrowserView>
    </>
  );
}

export default App;
