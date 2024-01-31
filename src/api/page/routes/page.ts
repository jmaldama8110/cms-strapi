/**
 * page router
 */

import { factories } from '@strapi/strapi';

export default factories.createCoreRouter("api::page.page", {
    config: {
        // find: {
        //     middlewares: ['api::page.landing-populate'],
        // },
        // findOne: {
        //     middlewares: ['api::page.landing-populate']
        // }
    }
});
