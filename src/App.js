import './App.css';
import Header from './components/Header';
import Balance from './components/Balance';
import Summary from './components/Summary';
import TransationHistory from './components/TransationHistory';
import AddTransation from './components/AddTransation';
import { GlobalContextProvider } from './context/context'
function App() {

  return (
    <div >
      <GlobalContextProvider>

        <Header />
        <div className="container">

          <Balance />
          <Summary />
          <TransationHistory />
          <AddTransation />
        </div>
      </GlobalContextProvider>

    </div>
  );
}

export default App;
