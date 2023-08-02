import {defaultTheme, defineUserConfig} from 'vuepress'
import {shikiPlugin} from "@vuepress/plugin-shiki";
import { backToTopPlugin } from '@vuepress/plugin-back-to-top'
import { mediumZoomPlugin } from '@vuepress/plugin-medium-zoom'
import { externalLinkIconPlugin } from '@vuepress/plugin-external-link-icon'
import { clipboardPlugin } from 'vuepress-plugin-clipboard'

export default defineUserConfig({
  debug: false,
  host: '0.0.0.0',
  port: 7080,

    head: [['link', { rel: 'icon', href: 'https://cdn.abcdl.cn/local/2023/08/02/64c92d973f752.png' }]],
    locales: {
        // 键名是该语言所属的子路径
        // 作为特例，默认语言可以使用 '/' 作为其路径。
        '/': {
            lang: 'zh-CN',
            title: 'iStar 用户手册',
            description: 'iStar 站点使用说明文档',
        },
        '/en': {
            lang: 'en-US',
            title: 'iStar Docs',
            description: 'iStar site usage documentation',
        },
    },
    theme: defaultTheme({

        locales: {
            '/en/': {
                selectLanguageName: 'English',
            },
            '/': {
                selectLanguageName: '简体中文',
            },
        },

        logo: 'https://cdn.abcdl.cn/local/2023/08/02/64c92d973f752.png',
        logoDark: 'https://cdn.abcdl.cn/local/2023/08/02/64ca0fa3af0bd.png',
        repo: 'https://github.com/c939984606',
        selectLanguageText: '语言',
        docsRepo: 'https://github.com/c939984606/docs/',
        docsBranch: 'master',
        docsDir: 'docs',
        editLinkText: '编辑此页',
        lastUpdatedText: '上次更新',
        contributorsText: '贡献者',
        tip: '提示',
        warning: '注意',
        danger: '警告',
        notFound: ['这里什么都没有', '我们怎么到这来了？', '这是一个 404 页面', '看起来我们进入了错误的链接', '想要帮助？请联系管理员'],
        backToHome: '返回首页',
        openInNewWindow: '在新窗口打开',


        navbar: [
            {text: '首页', link: '/'},
            {text: '应用', link: '/sign/'},
            {text: '分享', link: '/share/'},
            {text: '图床', link: '/photos/'},
            {text: '博客', link: '/blog/'},
            {text: '论坛', link: '/forum/'},
            {text: '云盘', link: '/disk/'},
            {text: 'UDID', link: '/shop/'},
        ],

    }),

    plugins: [
        shikiPlugin({
            // 配置项
            theme: 'dracula-soft',
        }),

        // 返回顶部插件
        backToTopPlugin(),

        // 图片放大插件
        mediumZoomPlugin({
            // 配置项
        }),

        externalLinkIconPlugin({
            // 配置项
        }),

        clipboardPlugin({
            // options ...
        })
    ],
})
