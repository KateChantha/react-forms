import AutoForm from './components/AutoForm';
import './App.css';
import config from './config';

function App() {
  return (
    <div>
      <AutoForm form={config}/>
    </div>
  );
}

export default App;
