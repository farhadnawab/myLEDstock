module.exports = {
  theme: {
    extend: {
      colors: {
        'primary': '#0071bb',
        'secondary': '#010d3d'
      },
      letterSpacing:{
          'wider': '3px',
          'widest': '6px'
      },
      fontFamily: {
        'Avenir': 'Avenir Next',
        'roboto': 'Roboto'
      },
      fontSize: {
        '2xs': '0.65rem',
        '3xs': '0.55rem',
        '4xs': '0.45rem',
        '5-5xl': '3.5rem'
      },
      borderRadius: {
        'br-15': '15px',
        'sm': '4px'
      },
      zIndex: {
        '-10': -10,
        '-20': -20,
        '-30': -30,
        '-40': -40,
        '-50': -50
      },
      padding:{
        '05': '0.05rem'
      },
      width:{
        'full-05': "105%",
        'full-10': "110%",
        'full-15': "115%",
        'full-20': "120%",
        'full-25': "125%",
        'full-30': "130%",
        'full-35': "135%",
        'full-40': "140%",
        'full-45': "145%",
        'full-50': "150%"
      },
      maxWidth:{
        '0': 'none',
        '2xs': '18rem',
        '3xs': '16rem',
        '4xs': '14rem',
        '5xs': '12rem',
        '6xs': '10rem',
        '50': '50%'
      },
      height:{
        '72': '18rem',
        '80': '20rem',
        '88': '22rem',
        '96': '24rem',
        '104': '26rem',
        '112': '28rem',
        '120': '30rem',
        '128': '32rem',
        '136': '34rem',
        '144': '36rem',
        '152': '38rem',
        '180': '40rem'
      },
      minHeight:{
        '64': '16rem',
        '72': '18rem',
        '80': '20rem',
        '88': '22rem',
        '96': '24rem',
        '104': '26rem',
        '112': '28rem',
        '120': '30rem',
        '128': '32rem',
        '136': '34rem',
        '144': '36rem',
        '152': '38rem',
        '180': '40rem'
      },
      backgroundPosition:{
        'right-center': 'right center'
      },
      boxShadow:{
        'one': '0px 2px 12px 5px rgba(0,0,0,0.11)',
        'two': '-25px 30px 80px rgba(40,44,65,0.26)'
      }
    }
  },
  variants: ['responsive', 'hover', 'focus', 'group-hover'],
  plugins: []
}
