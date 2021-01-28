# Auto Form

Pass a simple configuration object to your form, and let it do the rest.

## Functionality
- Automatic error, success, loading messages.
- Callback function.
- Simple validation

## Config

- 2 root properties that are config and feilds (see src/formConfig.js)

### Working Steps
1. create AutoFOrm Skelton
2. Create form config file and passing down to AutoFrom thru App
3. Create Field Component to display label and the rest of the feild. Incase if there is no type attributes, then display default.
```
const {label, ...attributes} = field;
```
4. Setting state in AutoForm. Grab all the fields from prop and store them to local state.
- Check if user added a name property to each field, then we add a value property as well.
5. Build Spinner