import './App.scss';
import LandingPage from './components/views/landing-page/LandingPage.jsx';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Portfolio from './components/views/router-pages/Portfolio';
import PriceAlert from './components/views/router-pages/PriceAlert';
import Security from './components/views/router-pages/Security';
import Subscription from './components/views/router-pages/Subscription';
import SubscriptionPlans from './components/views/router-pages/SubscriptionPlans';
import Gift from './components/views/router-pages/Gift';
import Help from './components/views/router-pages/Help';
import Coin from './components/views/router-pages/Coin';
import Exchanges from './components/views/router-pages/Exchanges';
import ExchangesTwo from './components/views/router-pages/ExchangesTwo';
import DeFi from './components/views/router-pages/DeFi';
import NFT from './components/views/router-pages/NFT';
import Publications from './components/views/router-pages/Publications';
import Resources from './components/views/router-pages/Resources';


function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path='/' exact component={LandingPage} />
          <Route path='/portfolio' component={Portfolio} />
          <Route path='/price-alert' component={PriceAlert} />
          <Route path='/security' component={Security} />
          <Route path='/subscription' component={Subscription} />
          <Route path='/subscription-plans' component={SubscriptionPlans} />
          <Route path='/gifts' component={Gift} />
          <Route path='/help' component={Help} />
          <Route path='/coins' component={Coin} />
          <Route path='/exchanges' component={Exchanges} />
          <Route path='/exchanges-two' component={ExchangesTwo} />
          <Route path='/defi' component={DeFi} />
          <Route path='/nft' component={NFT} />
          <Route path='/publications' component={Publications} />
          <Route path='/explore-all-coins' component={Resources} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
