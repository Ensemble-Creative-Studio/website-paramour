export default {
  type: "document",
  name: "avantages",

  i18n: true,
  title: "Avantages",
  initialValue: {
    __i18n_lang: "fr",
  },
  i18n: {
    base: "fr",
    languages: ["fr", "en"],
    fieldNames: {
      lang: "__i18n_lang",
      references: "__i18n_refs",
      baseReference: "__i18n_base",
    },
  },
  fields: [
    {
      name: "titre",
      type: "string",
      title: "Titre",
    },

    {
      name: "avantage",
      type: "array",
      title: "Avantage",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "image",
              type: "image",
              title: "Image",
            },
            {
              name: "titre",
              type: "string",
              title: "Titre avantage",
            },
            {
              name: "text",
              type: "text",
              title: "Texte avantage",
            },
            {
                name: "disponibilite",
                type: "string",
                title: "Disponibilité",
              },
          ],
        },
      ],
    },

      {
        name: "buttonUrl",
        type: "url",
        title: 'url du bouton "obtenir votre nft buffet crampon"',
      },
      {
        name: "buttonCertificat",
        type: "string",
        title: 'Texte du bouton "obtenir votre nft buffet crampon"',
      },
  ],
};
