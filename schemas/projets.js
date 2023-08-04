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
    },
    orderRankField({ type: 'projets', name: 'name' }),
    {
      name: 'informations',
      type: 'text',
      title: 'Infos',
    },
    {
      name: 'imagesGallery',
      title: 'Images gallery',
      type: 'array',
      description: 'Image size should be < 5Mo',
      of: [{ type: 'image' }]
     },

  ],
};
