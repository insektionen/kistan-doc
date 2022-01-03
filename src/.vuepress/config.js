const {description} = require('../../package')

module.exports = {
    /**
     * Ref：https://v1.vuepress.vuejs.org/config/#title
     */
    title: 'Kistan 2.0 Doc',
    /**
     * Ref：https://v1.vuepress.vuejs.org/config/#description
     */
    description: description,

    /**
     * Extra tags to be injected to the page HTML `<head>`
     *
     * ref：https://v1.vuepress.vuejs.org/config/#head
     */
    head: [
        ['meta', {name: 'theme-color', content: '#3eaf7c'}],
        ['meta', {name: 'apple-mobile-web-app-capable', content: 'yes'}],
        ['meta', {
            name: 'apple-mobile-web-app-status-bar-style',
            content: 'black'
        }]
    ],

    /**
     * Theme configuration, here is the default theme configuration for VuePress.
     *
     * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
     */
    themeConfig: {
        repo: '',
        editLinks: false,
        docsDir: '',
        editLinkText: '',
        lastUpdated: true,
        nav: [
            {
                text: 'Drawings',
                items: [
                    {
                        text: 'Furniture',
                        link: '/drawings/furniture/',
                    },
                    {
                        text: 'Sound cables',
                        link: '/drawings/sound_cables/',
                    },
                    {
                        text: 'DMX network',
                        link: '/drawings/dmx_net/'
                    },
                    {
                        text: 'Roof LED',
                        link: '/drawings/roof_led/',
                    },
                ]
            },
            {
                text: 'Sound',
                items: [
                    {
                        text: 'Inputs/Outputs',
                        link: '/sound/in_out/',
                    },
                    {
                        text: 'Mixer',
                        link: '/sound/mixer/',
                    },
                ],
            },
            {
                text: 'Lights',
                items: [
                    {
                        text: 'DALI',
                        link: '/lights/dali/',
                    },
                    {
                        text: 'DMX',
                        link: '/lights/dmx/',
                    },
                    {
                        text: 'Roof LED',
                        link: '/lights/roof_led/',
                    },
                    {
                        text: 'LMixer',
                        link: '/lights/lmixer/'
                    }
                ],
            },
            {
                text: 'IN-Sektionen',
                link: 'https://insektionen.se',
            },
        ],
        sidebar: {
            '/drawings/': [
                {
                    title: 'Drawings',
                    collapsable: false,
                    children: [
                        '/drawings/furniture',
                        '/drawings/sound_cables',
                        '/drawings/dmx_net',
                        '/drawings/roof_led',
                    ]
                }
            ],
            '/sound/': [
                {
                    title: 'Sound',
                    collapsable: false,
                    children: [
                        '/sound/in_out/',
                        '/sound/mixer/',
                    ]
                }
            ],
            '/lights/dmx/': [
                {
                    title: 'DMX',
                    collapsable: false,
                    children: [
                        '/lights/dmx/',
                        '/lights/dmx/kistan',
                    ]
                }
            ],
            '/lights/dali': [
                {
                    title: 'DALI',
                    collapsable: false,
                    children: [
                        '/lights/dali/',
                    ]
                }
            ],
            '/lights/lmixer/': [
                {
                    title: 'LMixer',
                    collapsable: false,
                    children: [
                        '/lights/lmixer/',
                        '/lights/lmixer/scripting',
                        '/lights/lmixer/examples',
                    ]
                }
            ]
        }
    },

    /**
     * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
     */
    plugins: [
        '@vuepress/plugin-back-to-top',
        '@vuepress/plugin-medium-zoom',
    ]
}
