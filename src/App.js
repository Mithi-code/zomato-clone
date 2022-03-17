import { Index } from './components/footer/Index';
import { Explore } from './components/exploreOptions/Explore';
import { Common } from './components/common /Common';
import { Delivery } from './components/delivery/delivery';

function App() {
  return (
    <div className="App">
      <Common />
      <Delivery />
      <Explore />
      <Index />
    </div>
  );
}

export default App;
