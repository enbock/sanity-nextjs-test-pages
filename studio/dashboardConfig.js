export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5eb2a95aadbab8be3fe7cf39',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-test-pages-studio',
                  apiId: '594b594e-f5cc-415b-8a82-b320abd64b7a'
                },
                {
                  buildHookId: '5eb2a95aca19f4fc8ba4a87b',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-test-pages',
                  apiId: '421b1494-6e23-447a-8101-934546ab4470'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/enbock/sanity-nextjs-test-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-test-pages.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
