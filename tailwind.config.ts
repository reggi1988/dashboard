import type { Config } from 'tailwindcss';
export default { content: ['./index.html','./src/**/*.{ts,tsx}'], theme: { extend: { fontFamily: { sans: ['Inter','ui-sans-serif','system-ui'] }, boxShadow: { glow: '0 20px 80px rgba(15,23,42,.35)' } } }, plugins: [] } satisfies Config;
