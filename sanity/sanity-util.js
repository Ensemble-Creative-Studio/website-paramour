import { client } from "../sanity/lib/client";
import { groq } from "next-sanity";

export async function getHero() {
  return client.fetch(groq`
    *[_type == 'homePage']{
      _type,

  imageOrUrl,
  bigSentence,
  
  "projects": projects[]->{
    ...,
slug,
    client,
    tags[]->,
    "firstImage": imagesGallery[0].asset->{
        url,
      
        metadata
    }
  },

    
    }
  `);
}

export async function getInfos() {
  return client.fetch(groq`*[_type == 'infos']`);
}
export async function getFooter() {
  return client.fetch(groq`*[_type == 'footer']`);
}
export async function getPageLegal() {
  return client.fetch(groq`*[_type == 'pageFooter']`);
}
export async function getClient() {
  const data = await client.fetch(groq`
    *[_type == 'featuredClients']{
      "clients": clients[]->{
        slug,
        client,
        tags[]->,
        "firstImage": imagesGallery[0].asset->{
          url,
        }
      },
    }
  `);

  // Sort the 'clients' array of each featuredClients document
  data.forEach(featuredClients => {
    featuredClients.clients.sort((a, b) => a.client.localeCompare(b.client));
  });

  return data;
}
export async function getTag() {
  return client.fetch(groq`*[_type == 'tag']|order(orderRank)`);
}
export async function getProjects() {
  return client.fetch(
    groq`*[_type == 'projets']{..., tags[]->,
     "firstImage": imagesGallery[0].asset->{
        url,
      
        metadata
    },
    "secondImage": imagesGallery[1].asset->{
        url,
      
        metadata
    },
    "videosLoop": videosGallery[]->{
      urlLoop,
      
      
    },
    }|order(orderRank)`
  );
}
export async function getProjectBySlug(slug) {

  return client.fetch(groq`
    *[_type == 'projets' && slug.current == $slug]{
      ...,
      "tags": tags[]->,
    
    }`, 
    { slug }  // Passing the slug as a parameter to the query
  );
}

// export async function getPresentation(lang) {
//   return client.fetch(groq`*[_type == 'presentation']`);
// }
// export async function getProjects(lang) {
//   return client.fetch(groq`*[_type == 'projets']|order(orderRank)`);
// }

// export async function getFooter(lang) {
//   return client.fetch(groq`*[_type == 'footer']`);
// }
// export async function getPage(lang) {
//   return client.fetch(groq`*[_type == 'pageFooter']`);
// }
