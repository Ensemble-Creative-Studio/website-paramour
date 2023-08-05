import { client } from "../sanity/lib/client";
import { groq } from "next-sanity";

export async function getHero() {
  return client.fetch(groq`*[_type == 'homePage']`);
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
export async function getTag() {
  return client.fetch(groq`*[_type == 'tag']|order(orderRank)`);
}
export async function getProjects() {
  return client.fetch(groq`*[_type == 'projets']{..., tags[]->}|order(orderRank)`);
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
