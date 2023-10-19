import {HashRouter, Routes, Route} from 'react-router-dom'
import './App.css';
import './index.css'
import Header from './Components/Header';
import Footer from './Components/Footer';
import routes from './Routes/routes';

function App() {
  return (
    <HashRouter>
      <Routes>
            { routes.map((route,index)=>(
              <Route
                key={index}
                path={route.path}
                element={
                    
                      <>
                      <Header />
                      <route.component/> 
                      <Footer />
                      </>                      
                }
                />
            ))}   
      </Routes> 
    </HashRouter>
  );
}

export default App;
