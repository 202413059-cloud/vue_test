import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue()],
    resolve: {
        alias: {
            '@': '/src'
        }
    },
    server: {
        port: 5173, // 기본 개발 서버 포트 (원하면 변경 가능)
        open: true  // 실행 시 자동으로 브라우저 열기
    },
    build: {
        outDir: 'dist',
        sourcemap: false
    }
})
