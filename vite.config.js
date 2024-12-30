import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [
        laravel({
            // Specify your entry points for both React and any CSS files
            input: ['resources/js/app.tsx', 'resources/css/app.css'],
            refresh: true, // Enables automatic refresh during development
        }),
        react(), // Add React plugin for JSX/TSX support
    ],
    resolve: {
        alias: {
            // Set up alias for cleaner imports in your React app
            '@': '/resources/js',
        },
    },
    server: {
        // Customize the dev server if needed
        host: 'localhost',
        port: 3000,
    },
});
