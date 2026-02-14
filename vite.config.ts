import {defineConfig} from 'vite'
import {svelte} from '@sveltejs/vite-plugin-svelte'
import wasm from "vite-plugin-wasm";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        svelte(),
        wasm(),
    ],
    build: {
        target: 'esnext'
    },
    server:{
        port:5173
    },
    preview:{
        port:5173
    }
})
