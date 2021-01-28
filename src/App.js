import {useState} from 'react'
import AutoForm from './components/AutoForm';
import './App.css';
import formConfig from './formConfig';

function App() {
  const [status, setStatus] = useState('')

  const handleSubmit = formData => {
    console.log("form in nadleSUbmit", formData)
  }
  return (
    <div>
      <AutoForm form={formConfig} onSubmit={handleSubmit}/>
    </div>
  );
}

export default App;
