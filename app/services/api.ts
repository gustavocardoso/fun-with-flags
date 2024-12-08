const ApiClient = (base_url: string) => ({
  async get(endpoint: string) {
    try {
      const response = await fetch(`${base_url}/${endpoint}`)

      if (!response.ok) {
        return [null, `HTTP error! ${response.status}: ${response.statusText}`]
      }

      const data = await response.json()
      return [data, null]
    } catch (error: unknown) {
      const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred'
      console.error('API request failed: ', error)
      return [null, errorMessage]
    }
  }
})

const api = ApiClient('https://restcountries.com/v3.1')

const countriesApi = {
  getAll: () => api.get('all?fields=cca3,name,flags,capital,region,population')
}

export { countriesApi }
