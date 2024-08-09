module.exports = {
  title: '蜗牛飞鱼',
  description: '一种只吃蜗牛的淡水鱼，生命短暂，把握当下',
  head: [['link', { rel: 'icon', href: '/public/img/favicon.ico' }]],
  themeConfig: {
    searchMaxSuggestions: 6,
    lastUpdated: 'Last Updated', // string | boolean
    algolia: {
      apiKey: '<API_KEY>',
      indexName: '<INDEX_NAME>',
    },
    nav: [
      { text: '主页', link: '/' },
      // { text: '博文',
      //   items: [
      //     { text: 'node', link: '/node/' },
      //     { text: 'js', link: '/js/' },
      //     { text: 'css', link: '/css/' }
      //   ]
      // },
      // { text: '关于', link: '/about/' },
    ],
    // sidebar: {
    //     '/node/': [
    //         '',
    //         'Explicit link text',
    //     ],
    //     '/js/': [
    //         '',
    //         'Explicit link text',
    //     ],
    //     '/css/': [
    //         '',
    //         'Explicit link text',
    //     ],
    // }
  },
};
