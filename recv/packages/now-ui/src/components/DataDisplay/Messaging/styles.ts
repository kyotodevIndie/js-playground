import { styled } from '../../../../stitches.config'
import { fileMessageVariantsStyle, messageVariantsStyle } from './consts'

export const Message: any = styled('div', {
  display: 'flex',
  justify: 'center',
  align: 'center',
  w: 'fit-content',
  p: '10px',
  fontSize: '0.875rem', // 14px
  fontStyle: 'normal',
  fontWeight: 500,
  lineHeight: '1.75rem', // 28px
  letterSpacing: '-0.0187rem',
  variants: messageVariantsStyle,
})

export const MessageContainer: any = styled('div', {
  display: 'flex',
  justify: 'center',
  align: 'center',
  gap: '5px',
  bg: '$primary25',
  color: '$primary400',
  w: 'fit-content',
  p: '0px 5px',
  bRad: '6px',
  fontSize: '12px',
  fontWeight: '500',
  lineHeight: '20px',
  cursor: 'pointer',
  border: 'none',
  outline: 'none',
})

export const TextBoxContainer: any = styled('div', {
  display: 'flex',
  justify: 'center',
  align: 'center',
  gap: '6px',
})

export const FileMessage: any = styled('div', {
  display: 'flex',
  justify: 'center',
  align: 'center',
  gap: '12px',
  w: 'fit-content',
  p: '10px',
  fontSize: '0.875rem', // 14px
  bg: '$slate25',
  color: '$slate800',
  bRad: '10px 10px 10px 0',
  border: '1px solid $unlisted2',
  variants: fileMessageVariantsStyle,
})

export const ImageMessage: any = styled('img', {
  maxWidth: '400px',
  maxHeight: '400px',
  variants: fileMessageVariantsStyle,
})
