import {defineUserConfig} from 'vuepress'
import {plumeTheme} from '@vuepress-plume/vuepress-theme-plume'

export default defineUserConfig({
    lang: 'zh-CN',
    locales: {
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
    dest: 'docs',
    head: [
        ['link', {rel: 'icon', href: 'https://cdn.abcdl.cn/local/2023/08/02/64c92d973f752.png'}],
        ['meta', {'http-equiv': 'X-UA-Compatible', content: 'id=edg'}],
    ],
    theme: plumeTheme({
        locales: {
            '/en/': {
                selectLanguageName: 'English',
            },
            '/': {
                selectLanguageName: '简体中文',
            },
        },
        logo: 'https://cdn.abcdl.cn/local/2023/08/02/64c92d973f752.png',
        darkMode: false,
        avatar: {
            name: 'theme plume',
            url: '/images/blogger.png',
            description: 'good good study, day day up !'
        },
        social: [{
            icon: 'github',
            link: 'https://github.com/c939984606',
        }],
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
        notes: false,
        footer: {
            copyright: 'Copyright © 2022-present iStar',
            message: '',
        },
    }),
})