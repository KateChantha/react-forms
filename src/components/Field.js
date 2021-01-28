import { Fragment } from 'react';


function Field({ field, onChange }) {
  const {label, ...attributes} = field;

  /*console.log('attributes', attributes )
  {type: "textarea", 
    placeholder: "Enter your message...", 
    required: true, 
    name: "Message", 
    value: ""
  }*/
  /**
   * Display in DOM
   * <textarea type="textarea" placeholer="Enter your..." required name="Messgae" value>
   */
  return (
    <Fragment>
      <label>{label}</label>
      {(() => {
        switch (attributes.type) {
          case 'textarea':
            return <textarea onChange={onChange} {...attributes} />
          default:
            return <input onChange={onChange} {...attributes} />
        }
      })()}
    </Fragment>
  );
}

export default Field;