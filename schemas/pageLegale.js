import { EditIcon, RobotIcon } from '@sanity/icons'

export default {
    type: "document",
    name: "pageFooter",
  
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
        name: 'titre',
        group: "content",
        type: 'string',
        title: 'Titre',
      },
      {
        title: 'Slug',
        name: 'slug',
        type: 'slug',
        group: "content",
        options: {
          source: 'titre',
          maxLength: 96,
        },
      },
      {
        name: "editionText",
        group: "content",
        type: "blockContent",
        description:'use H3 and normal to style text here',
        title: "Texte",
        rows: 5,
      },
    ],
  };
  