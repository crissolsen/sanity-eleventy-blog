export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-eleventy-blog'
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
                  buildHookId: '5f75e1138f11105bee0f72e7',
                  title: 'Sanity Studio',
                  name: 'sanity-eleventy-blog-studio-bga2ddw6',
                  apiId: 'bae65bcc-b960-41ce-a9ac-3dea32740b19'
                },
                {
                  buildHookId: '5f75e113ab8cdb9441a9a302',
                  title: 'Blog Website',
                  name: 'sanity-eleventy-blog-web-m8ypofmx',
                  apiId: '520d4fc6-2f73-4be6-b891-6672424e5adc'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/crissolsen/sanity-eleventy-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-eleventy-blog-web-m8ypofmx.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
