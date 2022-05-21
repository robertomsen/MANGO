const BASE_URL = 'https://demo4021761.mockable.io/'

const getResponse = async (url, method) => {
  try {
    const res = await fetch(BASE_URL + url, {
      method
    })
    const result = await res.json()
    return result
  } catch (e) {
    console.error(e)
  }
}

export default getResponse
