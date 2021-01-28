import {useState} from 'react'
import AutoForm from './components/AutoForm';
import './App.css';
import formConfig from './formConfig';

function App() {
  const [status, setStatus] = useState('')

  const handleSubmit = formData => {
    setStatus('loading')

    // fake AJAX
    setTimeout(() => {
      // setStatus('success')
      setStatus('error')
    }, 3000)
  }
  return (
    <div>
      <AutoForm 
        form={formConfig} 
        onSubmit={handleSubmit}
        status={status}
      />
    </div>
  );
}

export default App;
