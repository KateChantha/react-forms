import { css } from '@emotion/css'
import Field from './Field';


function AutoForm({ form }) {
  return (
    <form>
      {
        form.fields.map(field => (
          <Field field={field} />
        ))
      }
    </form>
  );
}

export default AutoForm;
