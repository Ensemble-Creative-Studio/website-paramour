import { client } from "../sanity/lib/client";
import { groq } from "next-sanity";

export async function getHero() {
  return client.fetch(groq`
    *[_type == 'homePage']{
      _type,
      "seo": {
        "seoTitle": seo.seoTitle,
        "seoDescription": seo.seoDescription,
        "seoImage": {
            "asset": seo.seoImage.asset->,
            "alt": seo.seoImage.alt
        }
      },
      imageOrUrl,
      bigSentence,
  
  "projects": projects[]->{
    ...,
    slug,
    client,
    tags[]->,
   
    "firstImage": imagesGallery[0] {
        "url": asset->url,
        "metadata": asset->metadata,
        alt
    }
  },

    
    }
  `, {}, { next: { tags: ['homePage'] } });
}

export async function getInfos() {
  return client.fetch(groq`*[_type == 'infos']`, {}, { next: { tags: ['infos'] } });
}
export async function getContact() {
    return client.fetch(groq`*[_type == 'contact']`, {}, { next: { tags: ['contact'] } });
}
export async function getFooter() {
  return client.fetch(groq`*[_type == 'footer']`, {}, { next: { tags: ['footer'] } });
}
export async function getPageLegal() {
  return client.fetch(groq`*[_type == 'pageFooter']`, {}, { next: { tags: ['pageFooter'] } });
}
export async function getClient() {
  const data = await client.fetch(groq`
    *[_type == 'featuredClients']{
      "clients": clients[]->{
        slug,
        client,
        tags[]->,
        "firstImage": imagesGallery[0] {
          "url": asset->url,
          alt
        }
      },
    }
  `, {}, { next: { tags: ['featuredClients'] } });

  // Sort the 'clients' array of each featuredClients document
  data.forEach(featuredClients => {
    featuredClients.clients.sort((a, b) => a.client.localeCompare(b.client));
  });

  return data;
}
export async function getTag() {
  return client.fetch(groq`*[_type == 'tag']|order(orderRank)`, {}, { next: { tags: ['tag'] } });
}
export async function getProjects() {
  return client.fetch(
    groq`*[_type == 'projets']{..., tags[]->,
     tagsSUB[]->,
     "firstImage": imagesGallery[0] {
        "url": asset->url,
        "metadata": asset->metadata,
        alt
    },
    "secondImage": imagesGallery[1] {
        "url": asset->url,
        "metadata": asset->metadata,
        alt
    },
    "videosLoop": videosGallery[]{
      urlLoop,
      alt
    },
    }|order(orderRank)`, {}, { next: { tags: ['projets'] } }
  );
}
export async function getProjectBySlug(slug) {

  return client.fetch(groq`
    *[_type == 'projets' && slug.current == $slug]{
      ...,
      "tags": tags[]->,
      "tagsSUB": tagsSUB[]->,
    
    }`, 
    { slug },
    { next: { tags: ['projets'] } }
  );
}

export async function getProjectsSlugs() {
  return client.fetch(
    groq`*[_type == 'projets']{ slug, _updatedAt }`, {}, { next: { tags: ['projets'] } }
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
