import { css } from '@emotion/css'
import { Fragment } from 'react';


function AutoForm({ form }) {
  return (
    <form>
      {
        form.fields.map(feild => {
          return feild.type === 'textarea'
            ? (<Fragment>
                <label>{feild.label}</label>
                <textarea />
              </Fragment>)
            : (<Fragment>
              <label>{feild.label}</label>
                <input type={feild.type} />
              </Fragment>)
        })
      }
    </form>
  );
}

export default AutoForm;
