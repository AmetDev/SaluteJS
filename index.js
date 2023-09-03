import express from 'express'
import path from 'path'
import { logger, requestTime } from './middlewares.js'
import serverRoutes from './routes/servers.js'
const app = express()
const __dirname = path.resolve()
app.set('view engine', 'ejs')

const PORT = process.env.PORT ?? 3000
app.set('views', path.resolve(__dirname, 'ejs'))
app.use(express.static(path.resolve(__dirname, 'static')))
app.use(requestTime)
app.use(logger)
app.use(serverRoutes)
app.get('/', (req, res) => {
	res.render('index', { title: 'Main PAGE!' })
})
app.get('/features', (req, res) => {
	res.render('features', { title: 'features page' })
})

app.listen(PORT, () => {
	console.log(`SERVER has been started on port ${PORT}...`)
})

// app.get('/', (req, res) => {
// 	res.sendFile(path.resolve(__dirname, 'static', 'index.html'))
// })
// app.get('/features', (req, res) => {
// 	res.sendFile(path.resolve(__dirname, 'static', 'features.html'))
// })

// app.get('/download', (req, res) => {
// 	console.log(req.requestTime)
// 	req.logger
// 	res.download(path.resolve(__dirname, 'static', 'index.html'))
// })
