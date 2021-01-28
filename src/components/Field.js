import { Fragment } from 'react';


function Field({ field, onChange }) {
  const {label, ...attributes} = field;

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