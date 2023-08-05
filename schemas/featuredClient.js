export default {
  type: 'document',
  name: 'featuredClients',
  i18n: true,
  title: 'Featured Clients',
  fields: [

 
    {
      name: 'clients',
      type: 'array',
      title: 'Select Clients',
      description: 'Select clients to feature on the homepage and infos pages',
      of: [{ type: 'reference', to: { type: 'projets' } }], // Replace 'project' with the actual name of the document type representing projects.
    },
  ],
  
};
