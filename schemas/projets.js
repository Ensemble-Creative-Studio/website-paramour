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
      required: true,
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
      required: true,
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
      required: true,
    },
    orderRankField({ type: 'projets', name: 'name' }),
    {
      name: 'informations',
      type: 'text',
      title: 'Infos',
      required: true,
    },
    {
      name: 'imagesGallery',
      title: 'Images gallery',
      type: 'array',
      description: 'Image size should be < 5Mo, the first or the 2 first image will be used as project thumbnail',
      of: [{ type: 'image' }],
      required: true,
    },
    {
      name: 'showOnlyFirstImage',
      type: 'boolean',
      title: 'Show only first image',
      description: 'Check this box to display only the first image in a bigger format on the work page.'
    },
    {
      "name": "videosGallery",
      "title": "Videos gallery",
      "type": "array",
      "description": "Video links for looping and full videos.",
      "of": [
        {
          "type": "object",
          "title": "VideoItem",
          "fields": [
            {
              "name": "urlLoop",
              "type": "url",
              "title": "URL for Looping Video"
            },
            {
              "name": "urlVideo",
              "type": "url",
              "title": "URL for Full Video"
            }
          ]
        }
      ]
    },

  ],
};
