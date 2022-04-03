/// <reference types="@efox/emp-tsconfig" />

interface Window {
  closeLogin: any
  loginSucCallback: any
  logoutSucCallback: any
  frames: any
}

interface ImportMeta {
  env: Record<string, unknown>
}
