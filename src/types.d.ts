import Vue from 'vue'
import { AxiosInstance } from 'axios'
import { NProgress } from 'nprogress'
import {
  TokenService,
  UserService,
  CategoryService
} from './services'

interface Services {
  token: typeof TokenService
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
