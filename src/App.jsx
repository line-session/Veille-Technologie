import Footer from './components/Footer';
import Header from './components/Header';
import { Router, Route } from '@solidjs/router'
import Contact from './pages/Contact'
import Apropos from './pages/Apropos';
import Menu from './pages/Menu';
import Resto from './pages/Resto';

function App() {
  return (
    <>
    <Header />

    <Router>
      <Route path='/contact' component={Contact} />
      <Route path='/about' component={Apropos} />
      <Route path='/menu' component={Menu} />
      <Route path='/resto' component={Resto} />
    </Router>

    <Footer />
    </>
  )
}

export default App;
