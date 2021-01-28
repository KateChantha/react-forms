import { useState } from 'react';
import { css } from '@emotion/css'
import Field from './Field';
import Spinner from './Spinner';
import Message from './Messge'

const AutoFormCSS = css`
  width: 375px;
  margin-left: 5px;
  input, textarea {
    display: block;
    width: 100%;
    padding: .375rem .75rem;
    font-size: 1rem;
    line-height: 1.5;
    color: #495057;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    border-radius: .25rem;
    margin-bottom: .8rem;
  }
  label {
    margin-bottom: .65rem;
    display: block;
    padding-left: 2px;
    color: #fff;
    font-weight: 600;
    letter-spacing: 0.75px;
  }
  textarea {
    height: 125px;
  }
  button {
    display: inline-block;
    font-weight: 400;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    user-select: none;
    border: 1px solid transparent;
    padding: .55rem 1.5rem;
    font-size: 1.2rem;
    line-height: 1.5;
    border-radius: .25rem;
    color: #fff;
    background-color: #FD6413;
    cursor: pointer;
  }
  button:disabled {
    background-color: #777;
  }
  .form-bottom {
    margin-top: 25px;
    margin-bottom: 25px;
    display: flex;
    align-items: center;
    button {
      margin-right: 5px;
    }
  }
  .message {
    position: relative;
    padding: .75rem 1.25rem;
    margin-bottom: 1rem;
    border: 1px solid transparent;
    border-radius: .25rem;
  }
  .message.success {
    color: #155724;
    background-color: #d4edda;
    border-color: #c3e6cb;
  }
  .message.error {
    color: #721c24;
    background-color: #f8d7da;
    border-color: #f5c6cb;
  }
`


function AutoForm({ form, onSubmit }) {
  // initialize fields with form feilds props
  const [fields, setFields] = useState(
    form.fields.map(field => ({
      ...field,
      name: field.name || field.label,
      value: ''
    }))
  )
  
  /*
  console.log(fields)
  {label: "Email"
    name: "Email"
    placeholder: "xyz@gmail.com"
    required: true
    type: "email"
    value: ""
  } 
  */

  const handleChange = e => {
    const name = e.target.getAttribute("name");
    // Map through the feilds array and update the value that matches the name property.
    const newFields = fields.map(field => {
      return field.name === name
            ? {...field, value: e.target.value}
            : field;
    })
    setFields(newFields);
  }

  const handleSubmit = e => {
    e.preventDefault();
   
    const formData = fields.reduce((accu, field) => {
      return {...accu, [field.name]: field.value}
    }, {})
    /*
      formData
      {Name: "Jane Duh", Location: "los angeles, ca", Email: "abcd@cool.com", Message: "hello from Jane"}
     */
    onSubmit(formData);
  }

  return (
    <form className={AutoFormCSS} onSubmit={handleSubmit}>
      {
        fields.map(field => (
          <Field key={field.name} field={field} onChange={handleChange}/>
        ))
      }

      <div className="form-buttom">
        <button type="submit">
          {form.config.buttonText || 'Submit'}
        </button>
        {/* <Spinner loading={status === 'loading' && spinner} /> */}
      </div>
      {/* <Message status={status} text={messages[status]} /> */}
    </form>
  );
}

export default AutoForm;
