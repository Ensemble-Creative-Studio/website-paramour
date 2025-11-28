import { EditIcon, RobotIcon } from '@sanity/icons'

export default {
  type: 'document',
  name: 'homePage',
  i18n: true,
  title: 'HomePage',
  groups: [
    {
        name: "content",
        title: "Contenu",
        icon: EditIcon,
        default: true
    },
    {
        name: "seo",
        title: "SEO",
        icon: RobotIcon
    }
],
  fields: [
    {
      name: "seo",
      title: "SEO",
      group: "seo",
      type: "seoFields"
    },
    {
      name: 'imageOrUrl',
      type: 'object',
      group: "content",
      title: 'Hero Image or Video',
      description: 'Always add an image, if you also want a video add a player.vimeo url in the field bellow, the image will be used as a poster in that case. ',
      fields: [
        {
          name: 'image',
          type: 'image',
          title: 'Image',
          description: 'Upload an image',
          fields: [
            {
              name: 'alt',
              type: 'string',
              title: 'Alternative text',
            }
          ],
          options: {
            metadata: [
              'blurhash',   // Default: included
              'lqip',       // Default: included
              'palette',    // Default: included
              'exif',       // Default: not included
              'location',   // Default: not included
            ],
            validation: Rule => Rule.required()
          }
   
        },
        {
          name: 'imageMobile',
          type: 'image',
          title: 'Image',
          description: 'Upload an image for mobile',
          fields: [
            {
              name: 'alt',
              type: 'string',
              title: 'Alternative text',
            }
          ],
          options: {
            metadata: [
              'blurhash',   // Default: included
              'lqip',       // Default: included
              'palette',    // Default: included
              'exif',       // Default: not included
              'location',   // Default: not included
            ],
            validation: Rule => Rule.required()
          }
   
        },
        {
          name: 'url',
          type: 'url',
          title: 'URL',
          description: 'Enter a URL for the video',
   
        },
  
      ],
    },
    {
      name: "bigSentence",
      type: "blockContent",
      title: "Presentation Text",
      group: "content",
      description:'Text in bold will use the TWK Everett font',
      rows: 5,
    },
    {
      name: 'projects',
      type: 'array',
      group: "content",
      title: 'Select Projects',
      description: 'Select projects to feature on the homepage, IT MUST TO BE AN EVEN NUMBER',
      of: [{ type: 'reference', to: { type: 'projets' } }], // Replace 'project' with the actual name of the document type representing projects.
    },
  ],

  preview: {
    select: {
      media: 'imageOrUrl.image',
    },
    prepare({ media }) {
      return {
        title: "Homepage",
        media,
      };
    },
  },
  
};
