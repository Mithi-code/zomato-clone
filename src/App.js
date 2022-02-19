import { Index } from './components/footer/Index';
<<<<<<< HEAD
import { Explore } from './components/exploreOptions/Explore'

function App() {
  return (
    <div className="App">
=======
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
>>>>>>> 987f85fe563e00863f0cf66b42d44a42ff004b70
      <Explore />
      <Index />
    </div>
  );
}

export default App;
