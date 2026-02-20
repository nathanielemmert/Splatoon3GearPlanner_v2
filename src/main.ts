import './app.css'
import App from './App.svelte'
import { mount } from "svelte";

export const VERSION:string = "400";

const app = mount(App, {
  target: document.getElementById('app'),
})

export default app
