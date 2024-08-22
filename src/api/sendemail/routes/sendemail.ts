export default {
  routes: [
    {
     method: 'POST',
     path: '/sendemail',
     handler: 'sendemail.exampleAction',
     config: {
       policies: [],
         middlewares: [],
         auth: false
     },
    },
    {
      method: 'POST',
      path: '/temporary',
      handler: 'sendemail.exampleAction2',
      config: {
        policies: [],
          middlewares: [],
          auth: false
      },
     },
  ],
};
