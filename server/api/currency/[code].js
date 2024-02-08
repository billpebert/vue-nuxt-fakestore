export default defineEventHandler(async (ev) => {
  const { currencyKey } = useRuntimeConfig()
  const {code} = ev.context.params
  const uri = `https://api.currencyapi.com/v3/latest?currencies=${code}&apikey=${currencyKey}`

  const {data} = await $fetch(uri)

  return data
})