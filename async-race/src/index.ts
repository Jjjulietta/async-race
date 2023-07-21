/* const getAuto = async (url: string): Promise<void> => {
  const response = await fetch(`${url}`)
  const data = await response.json()
  console.log(data)
} */
import './style.css'
import { App } from './components/app'

// const url = 'http://127.0.0.1:3000/db/garage'

const app = new App()
app.start()
