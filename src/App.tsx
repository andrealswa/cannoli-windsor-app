import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ScrollTop from './ScrollTop'; // Fix react router veritical positioning bug.
// Components
import { Navbar } from './components/navbar/Navbar';
import { Footer } from './components/footer/Footer';
// Pages
import { Home } from './pages/onNavbar/Home';
import { Menu } from './pages/onNavbar/Menu';
import { Contact } from './pages/onNavbar/Contact';
import { Order } from './pages/onNavbar/Order';
import { FAQ } from './pages/misc/FAQ';
import { NotFound } from './pages/misc/NotFound';
// Context
import { CartProvider } from './context/CartContext';
// Redux
import { Provider } from 'react-redux';
import { store } from './redux/store/configureStore'

/* Scroll top is to fix react-router to ensure visiting a page places the user at the top every time. 
Not using ScrollTop will result in the user to be placed seemingly randomly on a new page visit. */

const currentState = store.getState();
console.log(currentState);

function App() {
  return (
    <Provider store={store}>
      <CartProvider>
        <Router>
          <Navbar />
          <ScrollTop />

          <Switch>
            <Route path="/" exact={true}>
              <Home />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/menu">
              <Menu />
            </Route>
            <Route path="/order">
              <Order />
            </Route>
            <Route path="/faq">
              <FAQ />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>

          <Footer />
        </Router>
      </CartProvider>
    </Provider>
  );
}

export default App;
