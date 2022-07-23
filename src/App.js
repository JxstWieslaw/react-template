import './App.css';
import './input.css';

function App() {
  return (
    <div className="App">
      <div className="flex md:flex-row flex-col-reverse w-full h-screen">
        <div className="md:w-1/3 w-full md:h-screen h-1/3">
          <div className="md:block hidden bg-white h-1/2"></div>
          <div className="bg-green-500 h-full">1</div>
        </div>
        <div className="bg-red-500 h-2/3 w-full md:w-2/3 md:h-screen">2</div>
      </div>
    </div>
  );
}

export default App;
