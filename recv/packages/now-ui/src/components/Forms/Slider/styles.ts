import { styled } from '../../../../stitches.config'
import { variantsStyle } from './consts'

export const SliderContainer: any = styled('div', {
  display: 'flex',
  justify: 'center',
  align: 'center',
  gap: '5px',
  color: '$base00',
  w: 'fit-content',
  p: '6px 12px',
  bRad: '6px',
  fontSize: '14px',
  fontWeight: '500',
  lineHeight: '24px',
  cursor: 'pointer',
  border: 'none',
  outline: 'none',
  bg: 'none',
  variants: variantsStyle,
})

export const Input = styled('input', {})
