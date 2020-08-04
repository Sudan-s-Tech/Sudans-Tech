export { default as Card } from '../../components/card.vue'
export { default as Eventcard } from '../../components/eventcard.vue'
export { default as Eventcardgrid } from '../../components/eventcardgrid.vue'
export { default as Eventtable } from '../../components/eventtable.vue'
export { default as Footer } from '../../components/footer.vue'
export { default as Heading } from '../../components/heading.vue'
export { default as Homecard } from '../../components/homecard.vue'
export { default as Navbar } from '../../components/navbar.vue'
export { default as Teamcard } from '../../components/teamcard.vue'

export const LazyCard = import('../../components/card.vue' /* webpackChunkName: "components/card'}" */).then(c => c.default || c)
export const LazyEventcard = import('../../components/eventcard.vue' /* webpackChunkName: "components/eventcard'}" */).then(c => c.default || c)
export const LazyEventcardgrid = import('../../components/eventcardgrid.vue' /* webpackChunkName: "components/eventcardgrid'}" */).then(c => c.default || c)
export const LazyEventtable = import('../../components/eventtable.vue' /* webpackChunkName: "components/eventtable'}" */).then(c => c.default || c)
export const LazyFooter = import('../../components/footer.vue' /* webpackChunkName: "components/footer'}" */).then(c => c.default || c)
export const LazyHeading = import('../../components/heading.vue' /* webpackChunkName: "components/heading'}" */).then(c => c.default || c)
export const LazyHomecard = import('../../components/homecard.vue' /* webpackChunkName: "components/homecard'}" */).then(c => c.default || c)
export const LazyNavbar = import('../../components/navbar.vue' /* webpackChunkName: "components/navbar'}" */).then(c => c.default || c)
export const LazyTeamcard = import('../../components/teamcard.vue' /* webpackChunkName: "components/teamcard'}" */).then(c => c.default || c)
