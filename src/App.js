import './App.css';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import Home from './component/Home/Home';
import Header from './component/Header/Header';
import Footer from './component/Footer/Footer';
import About from './component/About/About';
import Enrolling from './component/Enrolling/Enrolling';
import NotFound from './component/NotFound/NotFound';
import Services from './component/Services/Services';
import New from './component/new/New';
import Teacher from './component/Teacher/Teacher';
import Success from './component/Success/Success';

function App() {
  return (
    <div>
     <BrowserRouter>
     <Header></Header>
     <Switch>
      <Route exact path="/">
        <Home></Home>
      </Route>
      <Route path="/home">
        <Home></Home>
      </Route>
      <Route path="/about">
          <About></About>
      </Route>
       <Route path="/services">
         <Services></Services>
      </Route>
     
      <Route path="/teachers">
        <Teacher></Teacher>
       </Route>
     <Route path="/detail/:code">
       <New></New>
     </Route>
     <Route exact path="/enroll/:num">
       <Enrolling></Enrolling>
       </Route>
       <Route path="/complite">
         <Success></Success>
         </Route>
       <Route path="/*">
           <NotFound></NotFound>
      </Route>
      
     </Switch>
     <Footer></Footer>
     </BrowserRouter>
    </div>
  );
}

export default App;
