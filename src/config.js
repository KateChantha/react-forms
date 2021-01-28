// eslint-disable-next-line import/no-anonymous-default-export
export default {
  config: {
    buttonText: 'Send',
    spinner: true,
    messages: {
      success: 'We received your message! Thanks for inquiring.',
      error:
        'An error occurred during submittal. Please contact us at support@xyz.com'
    }
  },
  fields: [
    {
      label: 'Name',
      placeholder: 'Joe Scully',
      required: true
    },
    {
      label: 'Location',
      placeholder: 'Boston, MA',
      required: true
    },
    {
      label: 'Email',
      type: 'email',
      placeholder: 'xyz@gmail.com',
      required: true
    },
    {
      label: 'Message',
      type: 'textarea',
      placeholder: 'Enter your message...',
      required: true
    }
  ]
}