import express from 'express'
import path from 'path'
const app = express()

const __dirname = path.resolve()
const PORT = process.env.PORT ?? 3000

app.get('/', (req, res) => {
	res.sendFile(path.resolve(__dirname, 'static', 'index.html'))
})
app.get('/features', (req, res) => {
	res.sendFile(path.resolve(__dirname, 'static', 'features.html'))
})

app.listen(PORT, () => {
	console.log(`SERVER has been started on port ${PORT}...`)
})
