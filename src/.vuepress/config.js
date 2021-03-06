const sidebar = {
  cookbook: [
    {
      title: 'Cookbook',
      collapsable: false,
      children: ['/cookbook/', '/cookbook/editable-svg-icons']
    }
  ],
  guide: [
    {
      title: '基础',
      collapsable: false,
      children: [
        '/guide/installation',
        '/guide/introduction',
        '/guide/instance',
        '/guide/template-syntax',
        '/guide/computed',
        '/guide/class-and-style',
        '/guide/conditional',
        '/guide/list',
        '/guide/events',
        '/guide/forms',
        '/guide/component-basics'
      ]
    },
    {
      title: '深入了解组件',
      collapsable: false,
      children: [
        '/guide/component-registration',
        '/guide/component-props',
        '/guide/component-attrs',
        '/guide/component-custom-events',
        '/guide/component-slots',
        '/guide/component-provide-inject',
        '/guide/component-dynamic-async',
        '/guide/component-template-refs',
        '/guide/component-edge-cases'
      ]
    },
    {
      title: '过渡 & 动画',
      collapsable: false,
      children: [
        '/guide/transitions-overview',
        '/guide/transitions-enterleave',
        '/guide/transitions-list',
        '/guide/transitions-state'
      ]
    },
    {
      title: '可复用性 & 组合',
      collapsable: false,
      children: [
        '/guide/mixins',
        '/guide/custom-directive',
        '/guide/teleport',
        '/guide/render-function',
        '/guide/plugins'
      ]
    },
    {
      title: '高级指南',
      collapsable: false,
      children: [
        {
          title: '响应式',
          children: [
            '/guide/reactivity',
            '/guide/reactivity-fundamentals',
            '/guide/reactivity-computed-watchers'
          ]
        },
        {
          title: '组合式 API',
          children: [
            '/guide/composition-api-introduction',
            '/guide/composition-api-setup',
            '/guide/composition-api-lifecycle-hooks',
            '/guide/composition-api-provide-inject',
            '/guide/composition-api-template-refs'
          ]
        },
        '/guide/optimizations',
        '/guide/change-detection'
      ]
    },
    {
      title: '工具',
      collapsable: false,
      children: [
        '/guide/single-file-component',
        '/guide/testing',
        '/guide/typescript-support'
      ]
    },
    {
      title: '规模化',
      collapsable: false,
      children: ['/guide/routing', '/guide/state-management', '/guide/ssr']
    },
    {
      title: '可访问性',
      collapsable: false,
      children: [
        '/guide/a11y-basics',
        '/guide/a11y-semantics',
        '/guide/a11y-standards',
        '/guide/a11y-resources'
      ]
    },
    {
      title: '从 Vue 2 迁移',
      collapsable: true,
      children: [
        'migration/introduction',
        'migration/async-components',
        'migration/attribute-coercion',
        'migration/custom-directives',
        'migration/custom-elements-interop',
        'migration/data-option',
        'migration/events-api',
        'migration/filters',
        'migration/fragments',
        'migration/functional-components',
        'migration/global-api',
        'migration/global-api-treeshaking',
        'migration/inline-template-attribute',
        'migration/keycode-modifiers',
        'migration/render-function-api',
        'migration/slots-unification',
        'migration/v-model'
      ]
    },
    {
      title: '贡献文档',
      collapsable: true,
      children: [
        'contributing/writing-guide',
        'contributing/doc-style-guide',
        'contributing/translations'
      ]
    }
  ],
  api: [
    '/api/application-config',
    '/api/application-api',
    '/api/global-api',
    {
      title: 'Options',
      collapsable: false,
      children: [
        '/api/options-data',
        '/api/options-dom',
        '/api/options-lifecycle-hooks',
        '/api/options-assets',
        '/api/options-composition',
        '/api/options-misc'
      ]
    },
    '/api/instance-properties',
    '/api/instance-methods',
    '/api/directives',
    '/api/special-attributes',
    '/api/built-in-components.md',
    {
      title: 'Reactivity API',
      collapsable: false,
      children: [
        '/api/basic-reactivity',
        '/api/refs-api',
        '/api/computed-watch-api'
      ]
    },
    '/api/composition-api'
  ],
  examples: [
    {
      title: 'Examples',
      collapsable: false,
      children: [
        '/examples/markdown',
        '/examples/commits',
        '/examples/grid-component',
        '/examples/tree-view',
        '/examples/svg',
        '/examples/modal',
        '/examples/elastic-header',
        '/examples/select2',
        '/examples/todomvc'
      ]
    }
  ]
}

module.exports = {
  title: 'Vue.js',
  description: 'Vue.js - 渐进式 JavaScript 框架',
  head: [
    [
      'link',
      {
        href:
          'https://fonts.googleapis.com/css?family=Inter:300,400,500,600|Open+Sans:400,600;display=swap',
        rel: 'stylesheet'
      }
    ],
    [
      'link',
      {
        href:
          'https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css',
        rel: 'stylesheet'
      }
    ],
    ['link', { rel: 'icon', href: '/logo.png' }],
    [
      'script',
      {
        src: 'https://player.vimeo.com/api/player.js'
      }
    ],
    [
      'script',
      {
        src: 'https://extend.vimeocdn.com/ga/72160148.js',
        defer: 'defer'
      }
    ]
  ],
  themeConfig: {
    logo: '/logo.png',
    nav: [
      {
        text: '文档',
        ariaLabel: 'Documentation Menu',
        items: [
          { text: '教程', link: '/guide/introduction' },
          { text: '风格指南', link: '/style-guide/' },
          { text: 'Cookbook', link: '/cookbook/' },
          { text: '示例', link: '/examples/markdown' }
        ]
      },
      { text: 'API 参考', link: '/api/application-config' },
      {
        text: '生态系统',
        items: [
          {
            text: '社区',
            ariaLabel: 'Community Menu',
            items: [
              { text: '团队', link: '/community/team/' },
              { text: '合作伙伴', link: '/community/partners' },
              { text: '加入我们', link: '/community/join/' },
              { text: '主题', link: '/community/themes/' }
            ]
          },
          {
            text: '核心插件',
            items: [
              { text: 'Vue Router', link: 'https://router.vuejs.org/' },
              { text: 'Vuex', link: 'https://vuex.vuejs.org/' },
              { text: 'Vue CLI', link: 'https://cli.vuejs.org/' },
              {
                text: 'Vue Test Utils',
                link: 'https://vue-test-utils.vuejs.org/'
              },
              {
                text: 'Devtools',
                link: 'https://github.com/vuejs/vue-devtools'
              },
              { text: '周刊', link: 'https://news.vuejs.org/' }
            ]
          }
        ]
      },
      {
        text: '支持 Vue',
        link: '/support-vuejs/',
        items: [
          {
            text: '一次性赞助',
            link: '/support-vuejs/#one-time-donations'
          },
          {
            text: '周期性赞助',
            link: '/support-vuejs/#recurring-pledges'
          },
          { text: 'T恤商店', link: 'https://vue.threadless.com/' }
        ]
      }
    ],
    repo: 'vuejs/docs-next',
    editLinks: false,
    editLinkText: '在 GitHub 上编辑!',
    lastUpdated: 'Vue 官方英文文档仓库 · 最后更新于',
    docsDir: 'src',
    sidebarDepth: 2,
    sidebar: {
      collapsable: false,
      '/guide/': sidebar.guide,
      '/community/': sidebar.guide,
      '/cookbook/': sidebar.cookbook,
      '/api/': sidebar.api,
      '/examples/': sidebar.examples
    },
    smoothScroll: false,
    searchPlaceholder: '文档内搜索',
    search: true
  },
  plugins: [
    [
      '@vuepress/pwa',
      {
        serviceWorker: true,
        updatePopup: {
          '/': {
            message: '有新的内容提供！',
            buttonText: '刷新'
          }
        }
      }
    ],
    [
      'vuepress-plugin-container',
      {
        type: 'info',
        before: info =>
          `<div class="custom-block info"><p class="custom-block-title">${info}</p>`,
        after: '</div>'
      }
    ]
  ],
  markdown: {
    lineNumbers: true,
    /** @param {import('markdown-it')} md */
    extendMarkdown: md => {
      md.options.highlight = require('./markdown/highlight')(
        md.options.highlight
      )
    }
  }
}
