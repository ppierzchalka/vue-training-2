export const getPathLabel = pathUrl => pathUrl && pathUrl.substr(1)
export const getPathItems = pathUrls => pathUrls.map((path) => ({ text: getPathLabel(path), to: path }))
