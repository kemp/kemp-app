module.exports = {
    purge: [
        './src/index.html',
        './src/components/*.vue',
    ],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                'primary-dark': 'midnightblue',
                'primary-light': 'ghostwhite',
            }
        },
        fontFamily: {
            'sans': [
              'system-ui',
              'BlinkMacSystemFont',
              '-apple-system',
              'Segoe UI',
              'Roboto',
              'Oxygen',
              'Ubuntu',
              'Cantarell',
              'Fira Sans',
              'Droid Sans',
              'Helvetica Neue',
              'sans-serif',
            ],
            'cursive': [
                'Pacifico',
                'cursive'
            ],
            'mono': [
              'Menlo',
              'Monaco',
              'Consolas',
              'Liberation Mono',
              'Courier New',
              'monospace',
            ],
        }
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
