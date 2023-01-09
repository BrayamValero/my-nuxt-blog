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
                        color: theme('colors.gray.500'),
                        fontWeight: '300',
                        a: {
                            color: theme('colors.gray.800'),
                            fontWeight: '700',
                        },
                        pre: {
                            color: theme('colors.grey.1000'),
                            backgroundColor: theme('colors.grey.100'),
                        },
                        'pre code::before': {
                            'padding-left': 'unset',
                        },
                        'pre code::after': {
                            'padding-right': 'unset',
                        },
                        code: {
                            display: 'flex',
                            flexWrap: 'wrap',
                        },
                    },
                },
            }),
            colors: {
                // primary: '#d8002d',
                // secondary: '#333',
                // dark: '#091a28',
                // elevated: '#dfe8ef',
                // linkExactActiveClass: '#fd213b',
            },
            margin: {
                'top-bar': '100px',
            },
            maxWidth: {
                '1/4': '25%',
            },
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
