module.exports = {
  name: 'vuepress-theme-stage',
  plugins: [
    ['@vuepress/blog', {
      directories: [
        {
          id: 'post',
          dirname: '_posts',
          path: '/'
        },
      ],
      frontmatters: [
        {
          id: "tag",
          keys: ['tag', 'tags'],
          path: '/tag/',
          frontmatter: { title: 'Tag' },
          layout: 'Tags',
          scopeLayout: 'Tag'
        }
      ]
    }]
  ]
}
