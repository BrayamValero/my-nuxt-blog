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
        extend: {
            typography: (theme) => ({
                DEFAULT: {
                    css: {
                        fontWeight: 300,
                        // Light Theme Settings
                        '--tw-prose-headings': theme('colors.red.500'), 
                        '--tw-prose-bullets': theme('colors.red.500'),
                        '--tw-prose-bold': theme('colors.stone.800'),
                        '--tw-prose-body': theme('colors.stone.500'), 
                        '--tw-prose-links': theme('colors.stone.800'), 
                        '--tw-prose-pre-code': theme('colors.stone.800'), 
                        '--tw-prose-code': theme('colors.stone.800'), 
                        '--tw-prose-quotes': theme('colors.stone.800'),
                        '--tw-prose-quote-borders': theme('colors.red.500'), 
                        '--tw-prose-invert-hr': theme('colors.stone.700'),
                        '--tw-prose-invert-th-borders': theme('colors.stone.700'),
                        '--tw-prose-invert-td-borders': theme('colors.stone.700'),
                        // Dark Theme Settings => Completed
                        '--tw-prose-invert-headings': theme('colors.red.500'), 
                        '--tw-prose-invert-bullets': theme('colors.red.500'),
                        '--tw-prose-invert-bold': theme('colors.white'),
                        '--tw-prose-invert-body': theme('colors.stone.400'), 
                        '--tw-prose-invert-links': theme('colors.stone.400'), 
                        '--tw-prose-invert-pre-code': theme('colors.stone.400'), 
                        '--tw-prose-invert-code': theme('colors.stone.400'), 
                        '--tw-prose-invert-quotes': theme('colors.white'),
                        '--tw-prose-invert-quote-borders': theme('colors.red.500'), 
                        '--tw-prose-invert-hr': theme('colors.stone.700'),
                        '--tw-prose-invert-th-borders': theme('colors.stone.700'),
                        '--tw-prose-invert-td-borders': theme('colors.stone.700'),
                    },
                },
            }),
        },
    },
    plugins: [require('@tailwindcss/typography')],
}
