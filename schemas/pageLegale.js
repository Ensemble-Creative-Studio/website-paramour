export default {
    type: "document",
    name: "pageFooter",
  
    i18n: true,
    title: "Page légales",
  

    fields: [
      {
        name: 'titre',
        type: 'string',
        title: 'Titre',
      },
      {
        title: 'Slug',
        name: 'slug',
        type: 'slug',
        options: {
          source: 'titre',
          maxLength: 96,
        },
      },
      {
        name: "editionText",
        type: "blockContent",
        title: "Texte",
        rows: 5,
      },
    ],
  };
  