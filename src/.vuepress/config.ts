import {searchPlugin} from "@vuepress/plugin-search";
import {defineUserConfig} from 'vuepress'
import {defaultTheme} from "@vuepress/theme-default";
import viteBundler from "@vuepress/bundler-vite";

export default defineUserConfig({
    lang: 'en-US',
    title: 'Kistan 2.0 Doc',
    description: "Documentation for everything in Kistan 2.0",

    head: [
        ['meta', {name: 'theme-color', content: '#3eaf7c'}],
        ['meta', {name: 'apple-mobile-web-app-capable', content: 'yes'}],
        ['meta', {
            name: 'apple-mobile-web-app-status-bar-style',
            content: 'black'
        }]
    ],
    plugins: [
        searchPlugin({}),
    ],
    bundler: viteBundler({
    viteOptions: {},
    vuePluginOptions: {},
  }),
    theme: defaultTheme({
        editLink: true,
        docsRepo: 'https://github.com/insektionen/kistan-doc',
        docsBranch: 'master',
        docsDir: 'src',
        lastUpdated: true,
        navbar: [
            {
                text: 'Drawings',
                children: [
                    {
                        text: 'Furniture',
                        link: '/drawings/furniture.html',
                    },
                    {
                        text: 'Sound cables',
                        link: '/drawings/sound_cables.html',
                    },
                    {
                        text: 'DMX network',
                        link: '/drawings/dmx_net.html'
                    },
                    {
                        text: 'Roof LED',
                        link: '/drawings/roof_led.html',
                    },
                    {
                        text: 'Pipes',
                        link: '/drawings/pipes.html'
                    }
                ]
            },
            {
                text: 'Sound',
                children: [
                    {
                        text: 'Inputs/Outputs',
                        link: '/sound/in_out',
                    },
                    {
                        text: 'Mixer',
                        link: '/sound/mixer',
                    },
                    {
                        text: 'Amplifiers',
                        link: '/sound/amplifiers'
                    }
                ],
            },
            {
                text: 'Lights',
                children: [
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
                text: 'Guides',
                children: [
                    {
                        text: 'Sound mixer defaults',
                        link: '/guides/sound/mixer_defaults'
                    },
                    {
                        text: 'Bar computer to Kitchen speakers',
                        link: '/guides/sound/bar_to_kitchen'
                    },
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
                    text: 'Drawings',
                    collapsible: false,
                    children: [
                        '/drawings/furniture',
                        '/drawings/sound_cables',
                        '/drawings/dmx_net',
                        '/drawings/roof_led',
                        '/drawings/pipes'
                    ]
                }
            ],
            '/sound/': [
                {
                    text: 'Sound',
                    collapsible: false,
                    children: [
                        '/sound/in_out',
                        '/sound/mixer',
                        '/sound/amplifiers',
                    ]
                }
            ],
            '/lights/dmx/': [
                {
                    text: 'DMX',
                    collapsible: false,
                    children: [
                        '/lights/dmx/',
                        '/lights/dmx/kistan',
                    ]
                }
            ],
            '/lights/dali': [
                {
                    text: 'DALI',
                    collapsible: false,
                    children: [
                        '/lights/dali/',
                    ]
                }
            ],
            '/lights/lmixer/': [
                {
                    text: 'LMixer',
                    collapsible: false,
                    children: [
                        '/lights/lmixer/',
                        '/lights/lmixer/scripting',
                        '/lights/lmixer/mixing',
                        '/lights/lmixer/examples',
                    ]
                }
            ],
            '/guides/': [
                {
                    text: 'Guides',
                    collapsible: false,
                    children: [
                        '/guides/sound/mixer_defaults',
                        '/guides/sound/bar_to_kitchen',
                    ]
                },
            ]
        }
    })
});
