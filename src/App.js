import { Index } from './components/footer/Index';
import { Explore } from './components/exploreOptions/Explore';
import { Common } from './components/common /Common';
import { Sliderr } from './components/carousel/Sliderr';

function App() {
  return (
    <div className='App'>
      <Common />
      <Sliderr />
      <Explore />
      <Index />
    </div>
  );
}

export default App;
