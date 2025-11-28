import pet from './header'
import blockContent from './blockContent'
import headerinfo from './header-info'
import homePage from './homePage'
import footer from './footer'
import passport from './passport'
import projets from './projets'
import pageLegale from './pageLegale'
import tag from './tag'
import infos from './infos'
import featuredClient from './featuredClient'
import contact from './contact'
import seoFields from './seo/seoField'

const objects = [seoFields];


export const schemaTypes = [blockContent,pet,headerinfo,homePage, passport, projets, footer, pageLegale, tag,infos, featuredClient, contact, ...objects]
