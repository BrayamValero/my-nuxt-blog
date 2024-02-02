module.exports = {
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

                        '--tw-prose-headings': theme('colors.red.500'),
                        '--tw-prose-bullets': theme('colors.red.500'),
                        '--tw-prose-bold': theme('colors.stone.800'),
                        '--tw-prose-body': theme('colors.stone.500'),
                        '--tw-prose-links': theme('colors.stone.800'),
                        '--tw-prose-pre-code': theme('colors.stone.800'),
                        '--tw-prose-code': theme('colors.stone.800'),
                        '--tw-prose-quotes': theme('colors.stone.800'),
                        '--tw-prose-quote-borders': theme('colors.red.500'),
                        '--tw-prose-hr': theme('colors.stone.700'),
                        '--tw-prose-th-borders': theme('colors.stone.700'),
                        '--tw-prose-td-borders': theme('colors.stone.700'),
                    },
                },
            }),
        },
    },
    plugins: [require('@tailwindcss/typography')],
}
