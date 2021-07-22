import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";
import TrendingProducts from './components/TrendingProducts';

function App() {
  return (
    <Router>
      <Route path="/" component={TrendingProducts}/>
    </Router>

  );
}

export default App;
