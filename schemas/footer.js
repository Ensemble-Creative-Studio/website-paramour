export default {
    type: 'document',
    name: 'footer',
 
    title: 'Footer',
 
    fields: [
      {
        name: "adressText",
        type: "blockContent",
        title: "Adress text",
        rows: 5,
      },
      {
        name: "contactText",
        type: "blockContent",
        title: "Contact text",
        rows: 5,
      },
      {
        name: "SocialText",
        type: "blockContent",
        title: "Social text",
        rows: 5,
      },
      {
        name: "texts",
        type: "array",
        title: "Informations Footer",
        of: [
          {
            type: "object",
            fields: [
     
              {
                name: "referenceToPageFooter",
                type: "reference",
                title: "Reference to Page Footer",
                to: [{ type: "pageFooter" }], // Replace "pageFooter" with the actual name of the pageFooter document type
              },
            ],
          },
        ],
      },

    ],
  };
  