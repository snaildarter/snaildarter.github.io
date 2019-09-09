module.exports = {
    title: 'Neal\'s web site',
    description: 'A website made by Neal',
    head: [
        ['link', { rel: 'icon', href: '/public/img/favicon.ico' }],
        // ['link', { rel: 'manifest', href: '/manifest.json' }],
    ],
    // configureWebpack: {
    //     resolve: {
    //       alias: {
    //         '@alias': 'path/to/some/dir'
    //       }
    //     }
    // },
    markdown: {
        lineNumbers: true
    },
    themeConfig: {
        searchMaxSuggestions: 6,
        lastUpdated: 'Last Updated', // string | boolean
        algolia: {
            apiKey: '<API_KEY>',
            indexName: '<INDEX_NAME>'
        },
        nav: [
            { text: '主页', link: '/' },
            { text: '博文',
              items: [
                { text: 'node', link: '/node/' },
                { text: 'js', link: '/js/' },
                { text: 'css', link: '/css/' }
              ] 
            },
            { text: '关于', link: '/about/' },
        ],
        sidebar: {
            '/node/': [
                '',
                'Explicit link text',
            ],
            '/js/': [
                '',
                'Explicit link text',
            ],
            '/css/': [
                '',
                'Explicit link text',
            ],
        }
    }
}


/*
    <!-- Google Tag Manager -->
        <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-K3HXR98');</script>
    <!-- End Google Tag Manager -->

     <!-- Google Tag Manager (noscript) -->
    <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-K3HXR98"
    height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
    <!-- End Google Tag Manager (noscript) -->
 */
