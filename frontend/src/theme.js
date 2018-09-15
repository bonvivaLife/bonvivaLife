import { css } from 'styled-components'

export const mediaDimensions = {
  s: 750,
  m: 1007,
  l: 1008
}

const media = (...query) => (...rules) =>  css`
  @media ${css(...query)} {
      ${css(...rules)};
  }
`

export default {
    darkBlue: '#17385e',
    green: '#548318',
    red: '#90351A',
    fadedRed: '#90751A',
    lightGray: '#ccd0d3',
    s: media`(max-width: ${mediaDimensions.s}px)`,
    m: media`(max-width: ${mediaDimensions.m}px)`,
    l: media`(min-width: ${mediaDimensions.l}px)`
}

