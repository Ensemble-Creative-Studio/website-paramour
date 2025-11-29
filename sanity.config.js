
import { defineConfig } from "sanity"
import { structureTool } from "sanity/structure"
import { visionTool } from "@sanity/vision"
import { dashboardTool } from "@sanity/dashboard";

import { schemaTypes } from "./schemas"
import {dataset, projectId} from './sanity/env'
import {orderableDocumentListDeskItem} from '@sanity/orderable-document-list'

// Define the actions that should be available for singleton documents
const singletonActions = new Set(["publish", "discardChanges", "restore"])

// Define the singleton document types
const singletonTypes = new Set(["header"])

export default defineConfig({
  basePath: '/studio',
  projectId,
  dataset,

  plugins: [
    structureTool({
      structure: (S, context) =>
        S.list()
          .title("Content")
          .items([

              S.listItem()
              .title("HomePage")
              .id("homePage")
              .child(
                // Instead of rendering a list of documents, we render a single
                // document, specifying the `documentId` manually to ensure
                // that we're editing the single instance of the document
                S.document()
                  .schemaType("homePage")
                  .documentId("homePage")
              ),
             
              orderableDocumentListDeskItem({type: 'projets',  title: 'Projects', S, context}),
              // S.documentTypeListItem("projets").title("Projets"),
              S.listItem()
              .title("Infos")
              .id("infos")
              .child(
                // Instead of rendering a list of documents, we render a single
                // document, specifying the `documentId` manually to ensure
                // that we're editing the single instance of the document
                S.document()
                  .schemaType("infos")
                  .documentId("infos")
              ),
              S.listItem()
                .title("Contact")
                .id("contact")
                .child(
                    S.document()
                    .schemaType("contact")
                    .documentId("contact")
            ),
             
             
             
              S.divider(),
              orderableDocumentListDeskItem({type: 'tag',  title: 'Categories', S, context}),
              S.listItem()
              .title("Featured Clients")
              .id("featuredClients")
              .child(
                // Instead of rendering a list of documents, we render a single
                // document, specifying the `documentId` manually to ensure
                // that we're editing the single instance of the document
                S.document()
                  .schemaType("featuredClients")
                  .documentId("featuredClients")
              ),
              S.divider(),
            // Regular document types
            S.listItem()
            .title("Footer")
            .id("footer")
            .child(
              // Instead of rendering a list of documents, we render a single
              // document, specifying the `documentId` manually to ensure
              // that we're editing the single instance of the document
              S.document()
                .schemaType("footer")
                .documentId("footer")
            ),
            S.documentTypeListItem("pageFooter").title("Page légales"),


          ]),
    }),
visionTool(),
    dashboardTool({
      widgets: [
 
      ]
    }),

  ],

  schema: {
    types: schemaTypes,

    // Filter out singleton types from the global “New document” menu options
    templates: (templates) =>
      templates.filter(({ schemaType }) => !singletonTypes.has(schemaType)),
  },

  document: {
    // For singleton types, filter out actions that are not explicitly included
    // in the `singletonActions` list defined above
    actions: (input, context) =>
      singletonTypes.has(context.schemaType)
        ? input.filter(({ action }) => action && singletonActions.has(action))
        : input,
  },
})
