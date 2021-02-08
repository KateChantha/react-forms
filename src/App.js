import {useState} from 'react';
import { css } from '@emotion/css';
import AutoForm from './components/AutoForm';
import './App.css';
import formConfig from './formConfig';

function App() {
  const [status, setStatus] = useState('')

  const handleSubmit = formData => {
    setStatus('loading')

    // fake AJAX
    setTimeout(() => {
      setStatus('success')
      // setStatus('error')
    }, 3000)
  }
  return (
    <div className={ContainerCSS}>
      <h1>Get VIP Access</h1>
      <AutoForm 
        form={formConfig} 
        onSubmit={handleSubmit}
        status={status}
      />
    </div>
  );
}

const ContainerCSS = css`
  padding: 125px 0 0 80px;

  h1 {
    color: #fff;
    font-size: 56px;
    margin: 0 0 15px;
  }
`

export default App;
