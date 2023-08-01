// 静态资源动态引用方式    可在打包后进行使用开发环境不必使用
export const getAssetsFile = (url: string) => {
    return new URL(`../assets/${url}`, import.meta.url).href
}