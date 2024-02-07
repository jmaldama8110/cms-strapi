export default ({ env }) => ({
  
  email: {
    config: {
      provider: 'sendgrid',
      providerOptions: {
        apiKey: env('SENDGRID_API_KEY'),
      },
      settings: {
        defaultFrom: 'jm@orion10x.net',
        defaultReplyTo: 'jm@orion10x.net',
      },
    },
  },
  
});