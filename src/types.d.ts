import { AxiosInstance } from 'axios'
import { NProgress } from 'nprogress'
import {
  UserService,
  CategoryService
} from './services'

interface Services {
  user: typeof UserService
  category: typeof CategoryService
}

declare module 'vue/types/vue' {
  interface Vue {
    $axios: AxiosInstance
    $nprogress: NProgress
    $services: Services
    $title: string
  }
}
