import nextPwa from 'next-pwa';
import { i18n } from './next-i18next.config.mjs';

export default nextPwa({
    dest: 'public',
    disable: process.env.NODE_ENV === 'development',
    register: true,
    skipWaiting: true,
})({
    swcMinify: true,
    i18n, // Ensure this is correctly referenced here
    reactStrictMode: true,
    eslint: {
        ignoreDuringBuilds: true,
    },
});
