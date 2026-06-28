import { config, fields, collection } from '@keystatic/core';

export default config({
  ui: {
    brand: { name: 'Dystonia Retraining' },
  },
  storage: import.meta.env.PROD || process.env.NODE_ENV === 'production'
    ? { kind: 'cloud' } 
    : { kind: 'local' },
  cloud: {
    project: 'focal-dystonia/dystonia-test',
  },
  collections: {
    blog: collection({
      label: 'Blog',
      slugField: 'title',
      path: 'src/content/blog/*',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        description: fields.text({ label: 'Description', multiline: true }),
        content: fields.markdoc({
          label: 'Content',
          extension: 'md',
        }),
      },
    }),
    about: collection({
      label: 'About',
      slugField: 'title',
      path: 'src/content/about/*',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        description: fields.text({ label: 'Description', multiline: true }),
        order: fields.integer({ label: 'Order' }),
        content: fields.markdoc({
          label: 'Content',
          extension: 'md',
        }),
      },
    }),
    testimonials: collection({
      label: 'Testimonials',
      slugField: 'title',
      path: 'src/content/testimonials/*',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        description: fields.text({ label: 'Description', multiline: true }),
        content: fields.markdoc({
          label: 'Content',
          extension: 'md',
        }),
      },
    }),
    programs: collection({
      label: 'Programs',
      slugField: 'title',
      path: 'src/content/programs/*',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        description: fields.text({ label: 'Description', multiline: true }),
        order: fields.integer({ label: 'Order' }),
        content: fields.markdoc({
          label: 'Content',
          extension: 'md',
        }),
      },
    }),
  },
});
