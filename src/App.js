import { Fragment } from 'react';
import logo from './logo.svg';
import useViews from 'views';
import Home from 'views/screens/home/Home';
import Register from 'views/screens/register/Register';
import Header from 'views/components/header/Header';
import Login from 'views/screens/Login/Login';

function App() {
  const {useComponents} = useViews();
  const {Footer} = useComponents();

  return (
    <Fragment>
      <Register/>  
      <Footer></Footer>
    </Fragment>
  );
}

export default App;
