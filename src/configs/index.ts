import devConfig from './dev'
import prodConfig from './prod'
// const env = 'dev'
const env = import.meta.env.VITE_SERVICE_ENV
export const isDev = env === 'dev'
// console.log(`import.meta.env`, import.meta.env, isDev)
export interface IConfig {
  appid: string
  host: string
  api: Record<string, string>
}
export const config: IConfig = isDev ? devConfig : prodConfig
export default config
