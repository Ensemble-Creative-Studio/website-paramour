export default {
  type: "document",
  name: "presentation",

  i18n: true,
  title: "Presentation GMG",


  fields: [

    {
      name: "texteLeft",
      type: "text",
      title: "Presentation de l'entreprise",
    },
    {
      name: "textRight",
      type: "text",
      title: "Presentation 3 points",
    },

    {
      name: "code",
      type: "array",
      title: "Les points",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "titre",
              type: "string",
              title: "Point",
            },
      
          ],
        },
      ],
    },
  ],
};
