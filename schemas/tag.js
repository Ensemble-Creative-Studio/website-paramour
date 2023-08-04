// tags.js
import { orderRankField, orderRankOrdering } from '@sanity/orderable-document-list';

export default {
    type: 'document',
    name: 'tag',
    title: 'Tag',
    orderings: [orderRankOrdering],
    fields: [
      {
        name: 'title',
        type: 'string',
        title: 'Title',
      },
      orderRankField({ type: 'tag', name: 'name' }),

      // Add more fields for your tags if needed
    ],
  };
  