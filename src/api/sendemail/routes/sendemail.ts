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
  ],
};
