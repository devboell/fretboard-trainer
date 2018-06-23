import { css } from 'styled-components'


export const deviceSizes = {
  desktop: 992,
  tablet: 768,
  phone: 500,
}

// Iterate through the sizes and create a media template
export default Object.keys(deviceSizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${deviceSizes[label] / 16}em) {
      ${css(...args)}
    }
  `
  return acc
}, {})
