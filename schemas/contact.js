import { EditIcon, RobotIcon } from '@sanity/icons'

export default {
    type: 'document',
    name: 'contact',
 
    title: 'Contact',
 
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
        name: "adressText",
        group: "content",
        type: "blockContent",
        title: "Adress text",
        rows: 5,
      },
      {
        name: "contactText",
        group: "content",
        type: "blockContent",
        title: "Contact text",
        rows: 5,
      },
      {
        name: "SocialText",
        group: "content",
        type: "blockContent",
        title: "Social text",
        rows: 5,
      },
    ],
    preview: {
      prepare() {
        return {
          title: "Contact",
        };
      },
    },
  };
  