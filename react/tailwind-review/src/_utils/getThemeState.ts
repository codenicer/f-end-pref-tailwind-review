export const getThemeState = (): string => {
  return localStorage.getItem('isDarkMode') || 'false'
}
