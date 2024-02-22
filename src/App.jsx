import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Header from './components/Header';
import CounterScore from './components/CounterScore';
import Controls from './components/Controls';

function App() {

  return (
      <div className="px-4 py-5 my-5 text-center">
        <Header />
        <div className="col-lg-6 mx-auto">
          <CounterScore />
          <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
            <Controls />
          </div>
        </div>
      </div>
  )
}

export default App
