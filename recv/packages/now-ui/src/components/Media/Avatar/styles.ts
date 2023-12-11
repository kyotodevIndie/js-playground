import { styled } from '../../../../stitches.config'
import { avatarVariantsStyle, statusVariantsStyle } from './consts'

export const AvatarContainer: any = styled('img', {
  bRad: '50%',
  objectFit: 'cover',
  variants: avatarVariantsStyle,
})

export const StatusIcon: any = styled('div', {
  bRad: '50%',
  w: '14px',
  h: '14px',
  position: 'relative',
  top: '36px',
  right: '22px',
  border: '1px solid $base00',
  variants: statusVariantsStyle,
})

export const StatusImage: any = styled('img', {
  bRad: '50%',
  w: '10px',
  h: '10px',
})
