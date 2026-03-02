import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/static/",
  title: "Static",
  titleTemplate: ':title',
  description: "Static site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Math', link: '/math/angles-without-protractor' }
    ],

    siteTitle: "Home",
    
    sidebar: {
      "/math/": [
        {
          text: 'Math',
          items: [
            // { text: 'Angles without protractors', link: '/math/angles-without-protractor' },
            { text: 'Lucide Icon Name Stats', link: '/math/lucide-icon-name-stats' },
          ]
        }
      ]
    },
    
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
