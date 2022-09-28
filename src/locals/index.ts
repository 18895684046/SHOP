
//  国际化 
import { createI18n } from 'vue-i18n' // 引入vue-i18n组件
import zh from './zh'
import en from './en'

const i18n = createI18n({
    locale: 'ch', // 设置语言环境
    fallbackLocale: 'en', // 没有中文的话默认英文
    globalInjection: true, // 如果不设置为true挂载到全局的话，{{$t(`message.name`)}}这种使用会报错
    legacy: false, // Not available in legacy mode (at message-compiler.esm-bundler.js:54:19)
    messages: {
        // 配置语言
        zh,
        en
    }
})

export default i18n