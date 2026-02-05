import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: 'Altix Codeit',
        short_name: 'Codeit',
        description: 'Premium Web & App Development, AI Solutions, and GTM strategy advisory.',
        start_url: '/',
        display: 'standalone',
        background_color: '#0b0c10',
        theme_color: '#66fcf1',
        icons: [
            {
                src: '/favicon.ico',
                sizes: 'any',
                type: 'image/x-icon',
            },
        ],
    };
}
