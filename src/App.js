import AutoForm from './components/AutoForm';
import './App.css';
import formConfig from './formConfig';

function App() {
  return (
    <div>
      <AutoForm form={formConfig}/>
    </div>
  );
}

export default App;
