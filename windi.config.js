import { defineConfig } from 'windicss/helpers'
import defaultTheme from 'windicss/defaultTheme'
import colors from 'windicss/colors'

export default defineConfig({
    darkMode: false,
    theme: {
        colors: {
            orange: colors.orange,
            gray: colors.trueGray,
            green: colors.green,
            transparent: 'transparent'
        },
        container: {
            center: true,
            padding: {
                DEFAULT: "1rem",
            },
        },
        extend: {
            screens: {
                'x-sm': { 'raw': '(min-height: 500px) and (max-height: 1024px) and (min-width:300px) and (max-width:640px)' }
            },
            fontFamily: {
                'heading': [
                    'Dancing Script',
                    ...defaultTheme.fontFamily.mono,
                ],
                'body': [
                    'Nunito Sans',
                    ...defaultTheme.fontFamily.sans,
                ]
            },
            outline: {
                blue: ['2px solid #0000ff', '1px'],
            },
            backgroundImage: theme => ({
                'body-pattern': "url('~assets/images/background/backgroundMobile.jpg')",
                'body-pattern-desktop': "url('~assets/images/background/backgroundDesktop.jpg')",
                'body-pattern-2x': "url('~assets/images/background/backgroundx2.jpg')",
                'card-gradient': "url('~assets/images/homepage/pizza-pattern.svg'), linear-gradient(148.39deg, #9A3412 0%, #EA580C 98.74%)",
                'cta-order-m': "url('~/assets/images/cta/pizza-cta-commander-m.jpg'), linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.6))",
                'cta-order-hd': "url('~/assets/images/cta/pizza-cta-commander-hd.jpg'), linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.6))",
                'cta-order-x2': "url('~/assets/images/cta/pizza-cta-commander-x2.jpg'), linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.6))",
                'cta-book-m': "url('~/assets/images/cta/pizza-cta-reserver-m.jpg'), linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.6))",
                'cta-book-hd': "url('~/assets/images/cta/pizza-cta-reserver-hd.jpg'), linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.6))",
                'cta-book-2x': "url('~/assets/images/cta/pizza-cta-reserver-x2.jpg'), linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.6))"
            }),
            backgroundPosition: {
                'pizza-pattern-position': "25% 20%"
            }
        },
    },
    shortcuts: {},
    plugins: [
        require('@windicss/animations')({
            settings: {
              animatedSpeed: 1000,
              heartBeatSpeed: 1000,
              hingeSpeed: 2000,
              bounceInSpeed: 750,
              bounceOutSpeed: 750,
              animationDelaySpeed: 1000,
            },
          }),
    ],
})