module.exports = {
  title: "蜗牛飞鱼",
  description: "一种只吃蜗牛的淡水鱼，",
  head: [
    ["link", { rel: "icon", href: "/public/img/favicon.ico" }],
    ['link', { rel: 'preload', href: 'https://cdn.shareaholic.net/assets/pub/shareaholic.js' }],
    ['meta', { name: 'shareaholic:site_id', content: '8d83ce80426b20985cbde0f9e44a0ba7' }],
    ['script', { 'data-cfasync': 'false', auync: 'true' src: 'https://cdn.shareaholic.net/assets/pub/shareaholic.js' }],
  ],
  themeConfig: {
    searchMaxSuggestions: 6,
    lastUpdated: "Last Updated", // string | boolean
    algolia: {
      apiKey: "<API_KEY>",
      indexName: "<INDEX_NAME>",
    },
    nav: [
      { text: "主页", link: "/" },
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
