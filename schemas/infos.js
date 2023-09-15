export default {
    type: "document",
    name: "infos",
  
    i18n: true,
    title: "Page légales",
  

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
            validation: Rule => Rule.required()
          },
          {
            name: 'imageMobile',
            type: 'image',
            title: 'Image',
            description: 'Upload an image for mobile',
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
        title: "About text",
        rows: 5,
      },
      {
        name: "serviceText",
        type: "blockContent",
        title: "Service text",
        rows: 5,
      },
      
    

 
    ],
  };
  