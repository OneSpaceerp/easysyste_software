/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: '#046650', // Emerald Green
                    accent: '#068c71',  // Bright Teal
                    muted: '#355e56',   // Greyish Green
                    dark: '#103737',    // Dark Teal
                    light: '#046650',   // Emerald Green
                    navy: '#0b3b69',    // Navy Blue
                },
                foreground: '#222222',
                background: '#FAFAFA',
                muted: { DEFAULT: '#6B7280', light: '#9CA3AF' },
            },
            fontFamily: {
                heading: ['var(--font-poppins)', 'system-ui', 'sans-serif'],
                body: ['var(--font-inter)', 'system-ui', 'sans-serif'],
            },
            animation: {
                'fade-in': 'fadeIn 0.5s ease-out',
                'slide-up': 'slideUp 0.5s ease-out',
                'gradient': 'gradient 8s ease infinite',
            },
            keyframes: {
                fadeIn: { '0%': { opacity: '0' }, '100%': { opacity: '1' } },
                slideUp: { '0%': { opacity: '0', transform: 'translateY(20px)' }, '100%': { opacity: '1', transform: 'translateY(0)' } },
                gradient: { '0%, 100%': { backgroundPosition: '0% 50%' }, '50%': { backgroundPosition: '100% 50%' } },
            },
            backgroundImage: {
                'gradient-ai': 'linear-gradient(135deg, #068c71 0%, #046650 25%, #103737 75%, #0b3b69 100%)',
                'gradient-warm': 'linear-gradient(135deg, #068c71 0%, #046650 100%)',
                'gradient-cool': 'linear-gradient(135deg, #103737 0%, #0b3b69 100%)',
            },
        },
    },
    plugins: [],
}
