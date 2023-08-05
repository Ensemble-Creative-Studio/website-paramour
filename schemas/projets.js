import { orderRankField, orderRankOrdering } from '@sanity/orderable-document-list';

export default {
  type: 'document',
  name: 'projets',
  title: 'Projets',
  orderings: [orderRankOrdering],
  fields: [
    {
      name: 'client',
      type: 'string',
      title: 'Client',
      required: true, // Add required property
    },
    {
      name: 'tags',
      type: 'array',
      title: 'Categories',
      of: [
        {
          type: 'reference',
          to: [{ type: 'tag' }],
        },
      ],
      required: true, // Add required property
    },
    {
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      description: 'click on generate to auto-fill',
      options: {
        source: 'client',
        maxLength: 96,
      },
      required: true, // Add required property
    },
    orderRankField({ type: 'projets', name: 'name' }),
    {
      name: 'informations',
      type: 'text',
      title: 'Infos',
      required: true, // Add required property
    },
    {
      name: 'imagesGallery',
      title: 'Images gallery',
      type: 'array',
      description: 'Image size should be < 5Mo',
      of: [{ type: 'image' }],
      required: true, // Add required property
    },
  ],
};
