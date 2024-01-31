/**
 * `landing-populate` middleware
 */

import { Strapi } from "@strapi/strapi";
const populate = [
  "metaData.metaImage",
  "menu.items",
  "backgrounSlides.slides",
  "backgrounSlides.slides.image",
  "introSection.twoColorTitle",
  "introSection.floatingWords",
  "introSection.button",
];
export default (config, { strapi }: { strapi: Strapi }) => {
  // Add your own logic here.
  return async (ctx, next) => {
    strapi.log.info("In landing-populate middleware.");
    ctx.query = {
      // populate,
      ...ctx.query
    }
    await next();
  };
};
