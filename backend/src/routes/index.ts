import { Application, Router } from 'express'

// const _routes: Array<[string, Router]> = [
//   ['/example', ExampleRouter],
// ]

export const routes = (app: Application) => {
  // _routes.forEach((route) => {
  //   const [url, router] = route
  //   app.use(url, router)
  // })
  app.get('/', (req, res) => {
    res.send({message:'OK',success:true})
  })
  app.get('/health', (req, res) => {
    res.send({success:true})
  })
}
