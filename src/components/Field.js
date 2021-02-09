import { Fragment, memo } from 'react';


function Field({ field, onChange }) {
  const {label, ...attributes} = field;
  console.log("render in Feild---------")

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

// it will not re-render if the props pass to it hasn't chage
// pass Field as a prop
const MemoField = memo(Field);

export default MemoField;