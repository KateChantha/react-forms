# Auto Form

Pass a simple configuration object to your form, and let it do the rest.

## Functionality
- Automatic error, success, loading messages.
- Callback function.
- Simple validation

## Config
- 2 root properties that are config and feilds (see src/formConfig.js)

### Working Steps
#### PART ONE
1. create AutoFOrm Skelton
2. Create form config file and passing down to AutoFrom thru App
3. Create Field Component to display label and the rest of the feild. Incase if there is no type attributes, then display the default.
```
const {label, ...attributes} = field;
```
4. Setting state in AutoForm. Grab all the fields from prop and store them to local state.
- Check if user added a name property to each field, then we add a value property as well.
5. Build Spinner component
   Build Message component
   Add button with buttonText config
6. Implement a handleChange function to grabs the name attribute from the current feild. Map through the feilds array and update the value that matches the name property.
7. Create a handleSubmit function that will intercept the form submittal, format the values into an easy to consume object, and trigger a callback passed as a props.
- go to App and set up the status state, and the callback.
8. Staus state in App will be used in 
- Spinner when status is loading.
- Message when status is success or error.
- AutoForm, disabled the button when status is success.
- AutoForm, useEffect will re-render/ clean up input value field when status is success.

#### PART TWO - Performance Enhancements
From part one, feilds will be re-render due to...
- the entire feilds object is changeing every time an input field is changed. 
- Also, when we change state in the parent componenet(App.js) as when we use two status call. There is really no reason why these fields need to be re-rendered when this happens.

By using the following React Hooks, we can prevent unnecessary re-renders and ensure our component will remain performance driven as the config file adds larger amounts of fields.

React Hooks Implemented:
- useCallback
- memo
- useRef

The useCallback hook will prevent our React form input handler from causing re-renders, and memo will work at the field level to prevent re-renders if it's props haven't changed. The use of memo ensures that only the field that is accepting a new value re-renders, while the other form fields are ignored.

1. Wrapping handleChange in a useCallback with a fields dependency will prevent it from being receated on every render if fields hasn't changed.
2. Then, must implement memo in Field component as an addendum to make it work. memo will work at the field level to prevent re-renders if it's props haven't changed.
3. useRef as a function updateFeilds with the closure value/state of the feilds. This to prevent re-render due to state feild is changed.