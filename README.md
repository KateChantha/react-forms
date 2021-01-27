# Auto Form

Pass a simple configuration object to your form, and let it do the rest.

## Functionality
- Automatic error, success, loading messages.
- Callback function.
- Simple validation

## Config

- 2 root property that is config and feilds

```
{
  {
    label: '',
    name: '',
    type: ''

    requried: false,
    success: '',
    error: ''
  }
}

```

### Working steps
1. create AutoFOrm Skelton
2. Create form config file and passing down to AutoFrom thru App
3. Create Field Component
