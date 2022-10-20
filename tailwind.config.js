const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
    content: [
      './_includes/**/*.html',
      './_layouts/**/*.html',
      './_posts/**/*.(markdown|md)',
      './*.html',
      './news/*.html',
    ],    
    prefix: 'tw__',
    darkMode: 'class',
    theme: {
        extend: {
            fontFamily: {
                'sans': ['Inter', ...defaultTheme.fontFamily.sans],
            },
            animation: {
                toastFadeInOut: "toastFadeIn 0.5s, toastFadeOut 0.5s 4.5s"
            },
            keyframes: {
                toastFadeIn: {
                    from: {
                        bottom: "0",
                        opacity: "0"
                    },
                    to: {
                        bottom: "20px",
                        opacity: "1"
                    }
                },
                toastFadeOut: {
                    to: {
                        bottom: "0",
                        opacity: "0"
                    },
                    from: {
                        bottom: "20px",
                        opacity: "1"
                    }
                }
            },
            colors: {
                'primary': {
                    DEFAULT: '#0B1D51',
                    '50': '#7896ED',
                    '100': '#6788EA',
                    '200': '#436CE5',
                    '300': '#1F51E1',
                    '400': '#1A44BD',
                    '500': '#153799',
                    '600': '#102A75',
                    '700': '#0B1D51',
                    '800': '#040B20'
                },
                'blue': {
                    DEFAULT: '#4285F4',
                    '50': '#F0F5FE',
                    '100': '#DCE9FD',
                    '200': '#B6D0FB',
                    '300': '#8FB7F8',
                    '400': '#699EF6',
                    '500': '#4285F4',
                    '600': '#0E63F0',
                    '700': '#0B4DBB',
                    '800': '#083786',
                    '900': '#052151'
                },
                'red': {
                    DEFAULT: '#FC1D6B',
                    '50': '#FED2E2',
                    '100': '#FEBED4',
                    '200': '#FE96BA',
                    '300': '#FD6EA0',
                    '400': '#FD4585',
                    '500': '#FC1D6B',
                    '600': '#DE0350',
                    '700': '#A7023C',
                    '800': '#6F0128',
                    '900': '#380114'
                },
                'green': {
                    '50': '#7DFFAA',
                    '100': '#68FF9D',
                    '200': '#3FFF82',
                    '300': '#17FF67',
                    '400': '#00ED52',
                    '500': '#00C444',
                    '600': '#008C31',
                    '700': '#00541D',
                    '800': '#001C0A'
                },
                'yellow': {
                    DEFAULT: '#FF9914',
                    '50': '#FFE9CC',
                    '100': '#FFE0B7',
                    '200': '#FFCE8E',
                    '300': '#FFBC66',
                    '400': '#FFAB3D',
                    '500': '#FF9914',
                    '600': '#DB7C00',
                    '700': '#A35C00',
                    '800': '#6B3C00',
                    '900': '#331D00'
                }
            },
        },
    },
    variants: {},
    plugins: [
      require('@tailwindcss/typography'),
    ],
}