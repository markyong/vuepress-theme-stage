module.exports = {
  title: 'Stage ? One : Two',
  description: 'Hello Stage',
  head: [
    ['script', { src: '/waterrippleeffect.min.js' }],
    ['script', { src: '/cav.min.js' }]
  ],
  theme: require.resolve('../../'),
  themeConfig: {
    author: 'Mark',
    subtitle: '喜新恋旧，败事不足',
    social: [
      { text: 'github', link: 'https://github.com/markyong' },
      { text: 'weibo', link: '' }
    ],
    nav: [
      { text: '关于', link: '/about/' },
      { text: '标签', link: '/tag/' }
    ]
  }
}
