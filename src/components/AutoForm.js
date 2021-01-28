import { useState } from 'react';
import { css } from '@emotion/css'
import Field from './Field';
import Spinner from './Spinner';


function AutoForm({ form }) {
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

  return (
    <form>
      {
        fields.map(field => (
          <Field field={field} />
        ))
      }

      <div>
        <Spinner />
      </div>
    </form>
  );
}

export default AutoForm;
