import { Index } from './components/footer/Index';
import { Explore } from './components/exploreOptions/Explore';
import { Common } from './components/common /Common';
import { Sliderr } from './components/carousel/Sliderr';
import { Dinning } from './components/dinningOut/Dinning';

function App() {
  return (
    <div className='App'>
      <Common />
      <Sliderr />
      <Dinning />
      <Explore />
      <Index />
    </div>
  );
}

export default App;
