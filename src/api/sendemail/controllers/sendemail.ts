/**
 * A set of functions called "actions" for `sendemail`
 */

import axios from "axios";

export default {
    exampleAction: async (ctx, next) => {
    try {
    
    const sendGridApiKey = process.env.SENDGRID_API_KEY ? process.env.SENDGRID_API_KEY : "";
    const sendGridApiUrl = process.env.SENDGRID_BASE_URL ? process.env.SENDGRID_BASE_URL: "";
    
        const api = axios.create({
                method: "post",
                url: "/v3/mail/send",
                baseURL: sendGridApiUrl,
                headers: {
                "content-type": "application/json",
                Authorization: `Bearer ${sendGridApiKey}`,
                },
        });
        
        await new Promise(resolve => setTimeout(resolve, 3000));
        // just for testing in development
        // throw new Error('');
            const res = await api.post("/v3/mail/send", {
                from: { email: "jm@orion10x.net" },
                personalizations: [
                {
                    to: [
                    { email: ctx.request.body.email },
                    { email: "jm@orion10x.net" },
                    ],
                        dynamic_template_data: {
                            ...ctx.request.body
                        },
                },
                ],
                template_id: ctx.request.body.template_id,
            });
        ctx.body = `ok`;
    } catch (err) {
        ctx.body = {
            error: "Something when wrong when trying to send the email"
        };
    }
  },
  exampleAction2: async (ctx, next) => {
        try{
            /// some data for testing purposes
            console.log(ctx.request.body)
            await new Promise(resolve => setTimeout(resolve, 4000));
            ctx.body = {
                "jwt": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiaWF0IjoxNzIyMjE5NjgwLCJleHAiOjE3MjQ4MTE2ODB9.HtBPmBL1CSQemboKcpJ3epma0oCo5eMS5WRGBCTuTAg",
                "user": {
                    "id": 3,
                    "username": "Josman Gmz",
                    "email": "jm@hotmail.com",
                    "provider": "local",
                    "confirmed": true,
                    "blocked": false,
                    "createdAt": "2024-07-29T02:21:20.120Z",
                    "updatedAt": "2024-07-29T02:21:20.120Z"
                }
            };
        }
        catch(err){
            ctx.body = {
                error: "something when wrong"
            }
        }
  }
};
