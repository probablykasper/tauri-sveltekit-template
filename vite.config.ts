import { sveltekit } from '@sveltejs/kit/vite'
import { defineConfig } from 'vite'

export default defineConfig({
	server: {
		port: 3000,
		strictPort: true,
	},
	build: {
		target: ['chrome64', 'edge79', 'firefox62', 'safari11.1'],
	},
	plugins: [sveltekit()],
})
