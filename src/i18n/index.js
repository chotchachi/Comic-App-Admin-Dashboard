import Vue from 'vue'
import I18n from 'vue-i18n'

Vue.use(I18n)

export default new I18n({
  locale: 'en',
  messages: {
    en: require('./locales/en')
  }
})
