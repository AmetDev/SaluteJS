import express from 'express'
import mongoose from 'mongoose'
import router from './route.js'
const PORT = 5000
const DB_URL = `mongodb+srv://ametsejdaliev:STQwpkZVVttJ9aQR@cluster01.wpg0ovz.mongodb.net/?retryWrites=true&w=majority`

const app = express()
app.use(express.json())
app.use('/api', router)	
async function startApp() {
	try {
		await mongoose.connect(DB_URL)
		app.listen(PORT, () => {
			console.log(`localhost${5000}`)
		})
	} catch (e) {
		console.log(e)
	}
}
startApp()
