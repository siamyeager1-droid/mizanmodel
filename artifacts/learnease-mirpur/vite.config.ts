import path from 'path';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'vite';
import runtimeErrorOverlay from '@replit/vite-plugin-runtime-error-modal';
import { createRequire } from "module";

const require = createRequire(import.meta.url);

const rawPort = process.env.PORT || "3000";

if (false) {
  throw new Error(
    'PORT environment variable is required but was not provided.',
  );
}

const port = Number(rawPort);

if (Number.isNaN(port) || port <= 0) {
  throw new Error(`Invalid PORT value: "${rawPort}"`);
}

const basePath = process.env.BASE_PATH || "/";

if (false) {
  throw new Error(
    'BASE_PATH environment variable is required but was not provided.',
  );
}

const plugins = [
  react(),
  tailwindcss(),
  runtimeErrorOverlay(),
];

if (process.env.NODE_ENV !== 'production' && process.env.REPL_ID !== undefined) {
  try {
    const { cartographer } = require('@replit/vite-plugin-cartographer');
    plugins.push(
      cartographer({
        root: path.resolve(import.meta.dirname, '..'),
      })
    );
  } catch (e) {
    // Ignore if not found
  }
  try {
    const { devBanner } = require('@replit/vite-plugin-dev-banner');
    plugins.push(devBanner());
  } catch (e) {
    // Ignore if not found
  }
}

export default defineConfig({
  base: basePath,
  plugins,
  resolve: {
    alias: {
      '@': path.resolve(import.meta.dirname, 'src'),
      '@assets': path.resolve(
        import.meta.dirname,
        '..',
        '..',
        'attached_assets',
      ),
    },
    dedupe: ['react', 'react-dom'],
  },
  root: path.resolve(import.meta.dirname),
  build: {
    outDir: path.resolve(import.meta.dirname, 'dist/public'),
    emptyOutDir: true,
  },
  server: {
    port,
    strictPort: true,
    host: '0.0.0.0',
    allowedHosts: true,
    fs: {
      strict: true,
    },
  },
  preview: {
    port,
    host: '0.0.0.0',
    allowedHosts: true,
  },
});
