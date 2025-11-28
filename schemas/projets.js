import {
  orderRankField,
  orderRankOrdering,
} from "@sanity/orderable-document-list";
import { EditIcon, RobotIcon } from '@sanity/icons'

export default {
  type: "document",
  name: "projets",
  title: "Projets",
  orderings: [orderRankOrdering],
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
      name: "client",
      group: "content",
      type: "string",
      title: "Client",
      required: true,
    },
    {
      name: "tags",
      group: "content",
      type: "array",
      title: "Categories",
      description:'Select a category ONLY if it is a "all" project',
      of: [
        {
          type: "reference",
          to: [{ type: "tag" }],
        },
      ],
      // validation: (Rule) => Rule.required(),
    },
    {
      name: "tagsSUB",
      group: "content",
      type: "array",
      title: "Sub categories",
      description: "Select ONLY one sub category if it is a child project",
      of: [
        {
          type: "reference",
          to: [{ type: "tag" }],
        },
      ],
      validation: (Rule) => Rule.max(1).error('You can only select one tag.'),
    },
    {
      title: "Slug",
      group: "content",
      name: "slug",
      type: "slug",
      description: "click on generate to auto-fill, if this is a sub category add something after client name like '-photo'",
      options: {
        source: "client",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    },
    orderRankField({ type: "projets", name: "name" }),
    {
      name: "informationsBlock",
      group: "content",
      type: "blockContent",
      title: "Infos",
    },
    {
      name: "imagesGallery",
      group: "content",
      title: "Images gallery",
      type: "array",
      description:
        "Image size should be < 5Mo, the first or the 2 first image will be used as the project thumbnail",
      of: [{ 
        type: "image",
        fields: [
          {
            name: 'alt',
            type: 'string',
            title: 'Alternative text',
          }
        ]
      }],
      // validation: (Rule) => Rule.required(),
    },
    {
      name: "showOnlyFirstImage",
      group: "content",
      type: "boolean",
      title: "Show only the first image",
      description:
        "Check this box to display only the first image in a bigger format on the work page.",
    },
    {
      name: "videosGallery",
      group: "content",
      title: "Videos gallery",
      type: "array",
      description: "Video links for looping and full videos.",
      of: [
        {
          type: "object",
          title: "VideoItem",
          fields: [
            {
              name: "alt",
              type: "string",
              title: "Alternative text",
            },
            {
              name: "urlLoop",
              type: "url",
              title: "URL for Looping Video",
            },
            {
              name: "urlVideo",
              type: "url",
              title: "URL for Full Video",
            },
            {
              name: "videoShowPosition",
              type: "number",
              title: "Show Video After Image Number",
              description:
                "Select after which image the video should be shown. Ensure it's less than or equal to the total number of images in the gallery.",
              validation: (Rule) =>
                Rule.required()
                  .integer()
                  .positive()
                  .warning(
                    "Ensure this is less than or equal to the total number of images in the gallery."
                  ),
            },
          ],
        },
      ],
    },
    
  ],
  preview: {
    select: {
      client: "client",
      tagsSUB: "tagsSUB.0.title", // Get the first item from the array of references
    },
    prepare: ({ client, tagsSUB }) => {
      console.log("Client:", client);
      console.log("TagsSUB:", tagsSUB);
      
      const subCategory = tagsSUB; // Since tagsSUB now directly holds the title
      console.log("SubCategory:", subCategory);
      
      const displayName = subCategory ? `${client} - ${subCategory}` : client;
      console.log("DisplayName:", displayName);
      
      return {
        title: displayName,
      };
    },
  },
};