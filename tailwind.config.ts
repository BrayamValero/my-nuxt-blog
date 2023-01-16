module.exports = {
    darkMode: 'class',
    theme: {
        container: {
            center: true,
            padding: {
                DEFAULT: '1rem',
                sm: '1.5rem',
                lg: '3rem',
                xl: '4rem',
                '2xl': '5rem',
            },
        },
        darkSelector: '.dark',
        extend: {
            typography: (theme: any) => ({
                DEFAULT: {
                    css: {
                        fontWeight: 300,
                        '--tw-prose-body': theme('colors.gray.500'), // Paragraph
                        '--tw-prose-headings': theme('colors.blue.800'), // Main Heading > H1
                        '--tw-prose-lead': theme('colors.gray.800'),
                        '--tw-prose-links': theme('colors.gray.800'), // Heading Links
                        '--tw-prose-bold': theme('colors.gray.800'), // Bold Content
                        '--tw-prose-bullets': theme('colors.gray.800'), // Bullets
                        '--tw-prose-counters': theme('colors.gray.600'),
                        '--tw-prose-hr': theme('colors.gray.300'),
                        '--tw-prose-quotes': theme('colors.gray.800'),
                        '--tw-prose-quote-borders': theme('colors.gray.300'),
                        '--tw-prose-captions': theme('colors.gray.800'),
                        '--tw-prose-code': theme('colors.gray.800'),
                        '--tw-prose-pre-code': theme('colors.gray.100'),
                        '--tw-prose-pre-bg': theme('colors.gray.800'),
                        '--tw-prose-th-borders': theme('colors.gray.300'),
                        '--tw-prose-td-borders': theme('colors.gray.200'),
                        '--tw-prose-invert-body': theme('colors.gray.400'),
                        '--tw-prose-invert-headings': theme('colors.white'),
                        '--tw-prose-invert-lead': theme('colors.gray.300'),
                        '--tw-prose-invert-links': theme('colors.white'),
                        '--tw-prose-invert-bold': theme('colors.white'),
                        '--tw-prose-invert-counters': theme('colors.gray.400'),
                        '--tw-prose-invert-bullets': theme('colors.gray.600'),
                        '--tw-prose-invert-hr': theme('colors.gray.800'),
                        '--tw-prose-invert-quotes': theme('colors.gray.100'),
                        '--tw-prose-invert-quote-borders': theme('colors.gray.800'),
                        '--tw-prose-invert-captions': theme('colors.gray.400'),
                        '--tw-prose-invert-code': theme('colors.white'),
                        '--tw-prose-invert-pre-code': theme('colors.gray.300'),
                        '--tw-prose-invert-pre-bg': 'rgb(0 0 0 / 50%)',
                        '--tw-prose-invert-th-borders': theme('colors.gray.600'),
                        '--tw-prose-invert-td-borders': theme('colors.gray.800'),
                    },
                },
            }),
        },
    },
    content: [
        'components/**/*.{vue,js,ts}',
        'layouts/**/*.vue',
        'pages/**/*.vue',
        'composables/**/*.{js,ts}',
        'plugins/**/*.{js,ts}',
        'App.{js,ts,vue}',
        'app.{js,ts,vue}',
        'Error.{js,ts,vue}',
        'error.{js,ts,vue}',
        'content/**/*.md',
    ],
    plugins: [require('@tailwindcss/line-clamp'), require('@tailwindcss/typography')],
}
