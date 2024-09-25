import type { Schema, Attribute } from '@strapi/strapi';

export interface BlockAbout extends Schema.Component {
  collectionName: 'components_block_abouts';
  info: {
    displayName: 'TeamAndCompany';
    description: '';
  };
  attributes: {
    pageBreadcrumb: Attribute.Component<'element.page-breacrumb'>;
    headingText: Attribute.String;
    subtitle: Attribute.Component<'element.three-color-text'>;
    team: Attribute.Component<'element.team-member', true>;
    valuesTitle: Attribute.Component<'element.two-color-title'>;
    valuesDescription: Attribute.String;
    valuesParagraphs: Attribute.Component<'element.paragraph', true>;
    ctaSubtitle: Attribute.String;
    ctaButton: Attribute.Component<'element.button'>;
    ctaTitle: Attribute.Component<'element.three-color-text'>;
    ctaDescription: Attribute.String;
  };
}

export interface BlockBenefitsSection extends Schema.Component {
  collectionName: 'components_block_benefits_sections';
  info: {
    displayName: 'benefitsSection';
  };
  attributes: {
    benefitsList: Attribute.Component<'element.paragraph', true>;
    title: Attribute.Component<'element.two-color-title'>;
  };
}

export interface BlockBlog extends Schema.Component {
  collectionName: 'components_block_blogs';
  info: {
    displayName: 'Blog';
    description: '';
  };
  attributes: {
    headingTitle: Attribute.String;
    pageBreadcrumb: Attribute.Component<'element.page-breacrumb'>;
    noteTitle: Attribute.String;
    noteDescription: Attribute.String;
    noteName: Attribute.String;
    notePosition: Attribute.String;
    searchInputPlaceholder: Attribute.String;
    recentPostTitle: Attribute.String;
    bulletListTitle: Attribute.String;
    bullets: Attribute.Component<'element.icon-item', true>;
    tagsTitle: Attribute.String;
    tagList: Attribute.Component<'element.icon-item', true>;
    newsletterTitle: Attribute.String;
    emailInputPlaceholder: Attribute.String;
    contactUsTitle: Attribute.String;
    contactUsDescription: Attribute.String;
    contactUsButton: Attribute.Component<'element.more-button'>;
    entries: Attribute.Component<'element.blog-entry', true>;
    noteSelfiUrl: Attribute.String;
  };
}

export interface BlockCaseStudies extends Schema.Component {
  collectionName: 'components_block_case_studies';
  info: {
    displayName: 'Case Studies';
    description: '';
  };
  attributes: {
    pageBreadcrumb: Attribute.Component<'element.page-breacrumb'>;
    headingText: Attribute.String;
    cases: Attribute.Component<'element.case', true>;
  };
}

export interface BlockContac extends Schema.Component {
  collectionName: 'components_blocks_contacs';
  info: {
    displayName: 'Contact';
    description: '';
  };
  attributes: {
    nameInputLabel: Attribute.String;
    emailInputLabel: Attribute.String;
    phoneInputLabel: Attribute.String;
    messageInputLabel: Attribute.String;
    attachYouFileInputLabel: Attribute.String;
    footNote1: Attribute.String;
    footNote2: Attribute.String;
    footNoteColored: Attribute.String;
    requiredLabel: Attribute.String;
    contactButton: Attribute.Component<'element.button'>;
    headingTitle: Attribute.Component<'element.two-color-title'>;
    optionalLabel: Attribute.String;
    filesizeLabel: Attribute.String;
    messageSentOk: Attribute.String;
    messageSentError: Attribute.String;
  };
}

export interface BlockFaqSection extends Schema.Component {
  collectionName: 'components_block_faq_sections';
  info: {
    displayName: 'FaqSection';
    description: '';
  };
  attributes: {
    title: Attribute.Component<'element.two-color-title'>;
    paragraphTitle: Attribute.Component<'element.two-color-title'>;
    description: Attribute.Text;
    faqList: Attribute.Component<'element.faq', true>;
  };
}

export interface BlockFeaturesSection extends Schema.Component {
  collectionName: 'components_block_features_sections';
  info: {
    displayName: 'featuresSection';
    description: '';
  };
  attributes: {
    title: Attribute.Component<'element.two-color-title'>;
    featuresList: Attribute.Component<'element.paragraph', true>;
  };
}

export interface BlockFooter extends Schema.Component {
  collectionName: 'components_block_footers';
  info: {
    displayName: 'Footer';
    description: '';
  };
  attributes: {
    orionBrief: Attribute.String;
    joinTitle: Attribute.Component<'element.three-color-text'>;
    joinDescription: Attribute.String;
    emailInputPlaceholder: Attribute.String;
    joinButton: Attribute.Component<'element.button'>;
    socialList: Attribute.Component<'element.menu-item', true>;
    termsconditionList: Attribute.Component<'element.menu-item', true>;
    copyright: Attribute.String;
    copyrightAuthor: Attribute.String;
    playstoreButton: Attribute.Component<'element.app-store-button'>;
    appstoreButton: Attribute.Component<'element.app-store-button'>;
  };
}

export interface BlockHeroSection extends Schema.Component {
  collectionName: 'components_block_hero_sections';
  info: {
    displayName: 'heroSection';
    description: '';
  };
  attributes: {
    title: Attribute.Component<'element.three-color-text'>;
    subtitle: Attribute.String;
    ctaNote: Attribute.String;
    ctaDescription: Attribute.String;
    statsList: Attribute.Component<'element.stat', true>;
    videoUrl: Attribute.String;
    imageUrl: Attribute.String;
  };
}

export interface BlockIntro extends Schema.Component {
  collectionName: 'components_block_intros';
  info: {
    displayName: 'Intro';
    description: '';
  };
  attributes: {
    largeTitle: Attribute.String;
    subTitle: Attribute.String;
    twoColorTitle: Attribute.Component<'element.two-color-title'>;
    floatingWords: Attribute.Component<'element.floating-word', true>;
    button: Attribute.Component<'element.button'>;
    ctaDescrition: Attribute.Text;
  };
}

export interface BlockPainAgitationSection extends Schema.Component {
  collectionName: 'components_block_pain_agitation_sections';
  info: {
    displayName: 'PainAgitationSection';
    description: '';
  };
  attributes: {
    subjectBullet: Attribute.String;
    paragrap01: Attribute.Component<'element.three-color-text'>;
    paragrap02: Attribute.Component<'element.three-color-text'>;
    paragrap03: Attribute.Component<'element.three-color-text'>;
    paragrap04: Attribute.Component<'element.three-color-text'>;
    videoUrl: Attribute.String;
    title: Attribute.Component<'element.two-color-title'>;
  };
}

export interface BlockServices extends Schema.Component {
  collectionName: 'components_block_services';
  info: {
    displayName: 'Services';
    description: '';
  };
  attributes: {
    headingTitle: Attribute.String;
    pageBreadcrumb: Attribute.Component<'element.page-breacrumb'>;
    ctaDescription: Attribute.String;
    ctaButton: Attribute.Component<'element.button'>;
    subtitle: Attribute.String;
    headingSubtitle: Attribute.String;
    subtitleDescription: Attribute.String;
    paragraphs: Attribute.Component<'element.paragraph', true>;
    footNote: Attribute.String;
    footNoteDescription: Attribute.String;
    footNoteHeading: Attribute.Component<'element.three-color-text'>;
    footNoteIconList: Attribute.Component<'element.icon-item', true>;
    footNoteCta: Attribute.Component<'element.button'>;
  };
}

export interface BlockTestimonialSection extends Schema.Component {
  collectionName: 'components_block_testimonial_sections';
  info: {
    displayName: 'testimonialSection';
  };
  attributes: {
    title: Attribute.Component<'element.two-color-title'>;
    testimonialsList: Attribute.Component<'element.testimonial', true>;
  };
}

export interface ElementAppStoreButton extends Schema.Component {
  collectionName: 'components_element_app_store_buttons';
  info: {
    displayName: 'App Store Button';
  };
  attributes: {
    label: Attribute.String;
    storeName: Attribute.String;
    url: Attribute.String;
  };
}

export interface ElementBlogEntry extends Schema.Component {
  collectionName: 'components_element_blog_entries';
  info: {
    displayName: 'Blog Entry';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    category: Attribute.Enumeration<
      ['finance', 'design', 'marketing', 'learning']
    >;
    dateIssued: Attribute.String;
    description: Attribute.Text;
    imageUrl: Attribute.String;
  };
}

export interface ElementBlogPostItem extends Schema.Component {
  collectionName: 'components_elements_blog_post_items';
  info: {
    displayName: 'Blog Post Item';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    selfiUrl: Attribute.String;
  };
}

export interface ElementButton extends Schema.Component {
  collectionName: 'components_element_buttons';
  info: {
    displayName: 'Button';
  };
  attributes: {
    label: Attribute.String;
    style: Attribute.Enumeration<['primary', 'secondary']>;
  };
}

export interface ElementCase extends Schema.Component {
  collectionName: 'components_elements_cases';
  info: {
    displayName: 'Case';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    subtitle: Attribute.String;
    buttonLabel: Attribute.String;
    buttonUrl: Attribute.String;
    imageUrl: Attribute.String;
  };
}

export interface ElementFaq extends Schema.Component {
  collectionName: 'components_element_faqs';
  info: {
    displayName: 'faq';
  };
  attributes: {
    question: Attribute.String;
    description: Attribute.Text;
    videoUrl: Attribute.String;
  };
}

export interface ElementFeatureItemPlan extends Schema.Component {
  collectionName: 'components_element_feature_item_plans';
  info: {
    displayName: 'featureItemPlan';
  };
  attributes: {
    description: Attribute.String;
    strike: Attribute.Boolean;
    order: Attribute.Integer;
  };
}

export interface ElementFloatingWord extends Schema.Component {
  collectionName: 'components_element_floating_words';
  info: {
    displayName: 'Floating Word';
  };
  attributes: {
    label: Attribute.String;
    title: Attribute.String;
    description: Attribute.String;
  };
}

export interface ElementIconItem extends Schema.Component {
  collectionName: 'components_elements_icon_items';
  info: {
    displayName: 'Icon Item';
    description: '';
  };
  attributes: {
    label: Attribute.String;
    iconUrl: Attribute.String;
  };
}

export interface ElementMenuItem extends Schema.Component {
  collectionName: 'components_element_menu_items';
  info: {
    displayName: 'Menu Item';
    description: '';
  };
  attributes: {
    text: Attribute.String;
    url: Attribute.String;
    position: Attribute.Integer;
  };
}

export interface ElementMenu extends Schema.Component {
  collectionName: 'components_element_menus';
  info: {
    displayName: 'Menu';
  };
  attributes: {
    items: Attribute.Component<'element.menu-item', true>;
  };
}

export interface ElementMoreButton extends Schema.Component {
  collectionName: 'components_element_more_buttons';
  info: {
    displayName: 'MoreButton';
    description: '';
  };
  attributes: {
    label: Attribute.String;
    url: Attribute.String;
  };
}

export interface ElementPageBreacrumb extends Schema.Component {
  collectionName: 'components_element_page_breacrumbs';
  info: {
    displayName: 'pageBreacrumb';
  };
  attributes: {
    textLeft: Attribute.String;
    url: Attribute.String;
    sectionName: Attribute.String;
  };
}

export interface ElementParagraph extends Schema.Component {
  collectionName: 'components_element_paragraphs';
  info: {
    displayName: 'Paragraph';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.String;
    iconUrl: Attribute.String;
  };
}

export interface ElementPriceItem extends Schema.Component {
  collectionName: 'components_element_price_items';
  info: {
    displayName: 'PriceItem';
  };
  attributes: {
    description: Attribute.String;
    position: Attribute.Integer;
    strike: Attribute.Boolean;
  };
}

export interface ElementPricePlan extends Schema.Component {
  collectionName: 'components_element_price_plans';
  info: {
    displayName: 'PricePlan';
    description: '';
  };
  attributes: {
    name: Attribute.String;
    price: Attribute.String;
    frequency: Attribute.String;
    itemsList: Attribute.Component<'element.price-item', true>;
    ctaText: Attribute.String;
    title: Attribute.String;
    priceNote: Attribute.String;
  };
}

export interface ElementSlideImage extends Schema.Component {
  collectionName: 'components_element_slide_images';
  info: {
    displayName: 'slideImage';
    description: '';
  };
  attributes: {
    description: Attribute.String;
    order: Attribute.Integer;
    imageUrl: Attribute.String;
  };
}

export interface ElementSlider extends Schema.Component {
  collectionName: 'components_element_sliders';
  info: {
    displayName: 'Slider';
    description: '';
  };
  attributes: {
    slides: Attribute.Component<'element.slide-image', true>;
  };
}

export interface ElementStat extends Schema.Component {
  collectionName: 'components_element_stats';
  info: {
    displayName: 'Stat';
  };
  attributes: {
    count: Attribute.String;
    description: Attribute.String;
  };
}

export interface ElementTeamMember extends Schema.Component {
  collectionName: 'components_elements_team_members';
  info: {
    displayName: 'TeamMember';
    description: '';
  };
  attributes: {
    name: Attribute.String;
    position: Attribute.String;
    selfiUrl: Attribute.String;
  };
}

export interface ElementTestimonial extends Schema.Component {
  collectionName: 'components_element_testimonials';
  info: {
    displayName: 'testimonial';
  };
  attributes: {
    quote: Attribute.Text;
    selfiUrl: Attribute.String;
    displayName: Attribute.String;
    position: Attribute.String;
  };
}

export interface ElementThreeColorText extends Schema.Component {
  collectionName: 'components_elements_three_color_texts';
  info: {
    displayName: 'threeColorText';
    description: '';
  };
  attributes: {
    leftText: Attribute.Text;
    centerText: Attribute.Text;
    rightText: Attribute.Text;
  };
}

export interface ElementTwoColorTitle extends Schema.Component {
  collectionName: 'components_element_two_color_titles';
  info: {
    displayName: 'Two Color Title';
  };
  attributes: {
    textLeft: Attribute.String;
    textRight: Attribute.String;
  };
}

export interface SeoMetaInfo extends Schema.Component {
  collectionName: 'components_seo_meta_infos';
  info: {
    displayName: 'Meta Info';
    description: '';
  };
  attributes: {
    metaTitle: Attribute.String;
    metaDescription: Attribute.Text;
    logoUrl: Attribute.String;
    demoVideoUrl: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'block.about': BlockAbout;
      'block.benefits-section': BlockBenefitsSection;
      'block.blog': BlockBlog;
      'block.case-studies': BlockCaseStudies;
      'block.contac': BlockContac;
      'block.faq-section': BlockFaqSection;
      'block.features-section': BlockFeaturesSection;
      'block.footer': BlockFooter;
      'block.hero-section': BlockHeroSection;
      'block.intro': BlockIntro;
      'block.pain-agitation-section': BlockPainAgitationSection;
      'block.services': BlockServices;
      'block.testimonial-section': BlockTestimonialSection;
      'element.app-store-button': ElementAppStoreButton;
      'element.blog-entry': ElementBlogEntry;
      'element.blog-post-item': ElementBlogPostItem;
      'element.button': ElementButton;
      'element.case': ElementCase;
      'element.faq': ElementFaq;
      'element.feature-item-plan': ElementFeatureItemPlan;
      'element.floating-word': ElementFloatingWord;
      'element.icon-item': ElementIconItem;
      'element.menu-item': ElementMenuItem;
      'element.menu': ElementMenu;
      'element.more-button': ElementMoreButton;
      'element.page-breacrumb': ElementPageBreacrumb;
      'element.paragraph': ElementParagraph;
      'element.price-item': ElementPriceItem;
      'element.price-plan': ElementPricePlan;
      'element.slide-image': ElementSlideImage;
      'element.slider': ElementSlider;
      'element.stat': ElementStat;
      'element.team-member': ElementTeamMember;
      'element.testimonial': ElementTestimonial;
      'element.three-color-text': ElementThreeColorText;
      'element.two-color-title': ElementTwoColorTitle;
      'seo.meta-info': SeoMetaInfo;
    }
  }
}
