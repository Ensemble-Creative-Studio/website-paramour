import { EditIcon, RobotIcon } from '@sanity/icons'

export default {
    type: "document",
    name: "infos",
  
    i18n: true,
    title: "Page légales",
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
            validation: Rule => Rule.required()
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
            validation: Rule => Rule.required()
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
        name: "aboutText",
        type: "blockContent",
        group: "content",
        title: "About text",
        rows: 5,
      },
      {
        name: "serviceText",
        type: "blockContent",
        group: "content",
        title: "Service text",
        rows: 5,
      },
      
    

 
    ],
    preview: {
      prepare() {
        return {
          title: "Information page",
        };
      },
    },
  };
  