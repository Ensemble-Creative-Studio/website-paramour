export default {
  type: 'document',
  name: 'homePage',
  i18n: true,
  title: 'HomePage',
  fields: [
    {
      name: 'imageOrUrl',
      type: 'object',
      title: 'Hero Image or Video',
      description: 'Always add an image, if you also want a video add a player.vimeo url in the field bellow, the image will be used as a poster in that case. ',
      fields: [
        {
          name: 'image',
          type: 'image',
          title: 'Image',
          description: 'Upload an image',
   
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
      description:'Text in bold will use the TWK Everett font',
      rows: 5,
    },
  ],
  
};
