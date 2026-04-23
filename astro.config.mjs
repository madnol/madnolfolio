// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

export default defineConfig({
    fonts: [
        {
            provider: fontProviders.google(),
            name: 'Inter',
            cssVariable: '--font-sans',
            weights: [400, 500, 600],
            styles: ['normal'],
            subsets: ['latin'],
        },
        {
            provider: fontProviders.google(),
            name: 'Playfair Display',
            cssVariable: '--font-display',
            weights: [400, 500, 600, 700, 900],
            styles: ['normal', 'italic'],
            subsets: ['latin'],
        },
        {
            provider: fontProviders.google(),
            name: 'JetBrains Mono',
            cssVariable: '--font-mono',
            weights: [400, 500],
            styles: ['normal'],
            subsets: ['latin'],
        },
    ],
});
