import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import { viteCommonjs } from '@originjs/vite-plugin-commonjs'

// https://vitejs.dev/config/
export default ({ mode }) => {
    process.env = { ...process.env, ...loadEnv(mode, process.cwd()) }

    return defineConfig({
        plugins: [react(), viteCommonjs()],
        // server: {
        //     proxy: {
        //         '/api': process.env.VITE_API_URL,
        //         configure: (proxy, options) => {
        //             // proxy will be an instance of 'http-proxy'
        //         },
        //     },
        // },
    })
}
