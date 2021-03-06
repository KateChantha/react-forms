import { useState, useEffect, useCallback, useRef } from 'react';
import { css } from '@emotion/css'
import MemoField from './Field';
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


function AutoForm({ form, onSubmit, status }) {
  console.log("render in AutoForm---------")

  const fieldsRef = useRef(); 

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

  // To clean up input field after success
  useEffect(() => {
    if (status === 'success') {
      console.log("render in success submit ---------")
      setFields(fields.map(field => ({...field, value: ''})))
    }
  }, [status]);

  // --------------------------
  //       useRef
  // --------------------------
  const updateFields = (name, value) => {
    const newFields = fields.map(field => {
      return field.name === name 
            ? { ...field, value } 
            : field;
    })
    setFields(newFields)
  }

  // call every time 
  useEffect(() => {
    fieldsRef.current = updateFields
  })

  // --------------------------
  //       useCallbak
  // to prevent creating new handleChange
  // instant every single time
  // --------------------------
  /**
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
  */

  /** with [] dependency, handleChange is run once **/
  const handleChange = useCallback(e => {
    const name = e.target.getAttribute('name')
    const value = e.target.value

    // get field's name as pass to fieldsRef.current 
    // which is a updateFields function that reference the clousure value of input feilds
    const update = () => {
      fieldsRef.current(name, value)
    }

    update()
  }, [])

  //---------------------------

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

  const { messages, spinner } = form.config
  return (
    <form className={AutoFormCSS} onSubmit={handleSubmit}>
      {
        fields.map(field => (
          <MemoField key={field.name} field={field} onChange={handleChange}/>
        ))
      }

      <div className="form-bottom">
        <button type="submit" disabled={status === 'success'}>
          {form.config.buttonText || 'Submit'}
        </button>
        <Spinner loading={status === 'loading' && spinner} />
      </div>
      <Message status={status} text={messages[status]} />
    </form>
  );
}

export default AutoForm;
