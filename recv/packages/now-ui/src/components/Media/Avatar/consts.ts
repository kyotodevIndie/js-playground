export const sizeVariantsOptions = ['xs', 'sm', 'md', 'lg', 'xl', '2xl']
export const shapeVariantsOptions = ['circle', 'rounded', 'square']
export const statusVariantsOptions = ['online', 'offline', 'image']

export const avatarVariantsStyle = {
  size: {
    xs: {
      w: '24px',
      h: '24px',
    },
    sm: {
      w: '32px',
      h: '32px',
    },
    md: {
      w: '40px',
      h: '40px',
    },
    lg: {
      w: '56px',
      h: '56px',
    },
    xl: {
      w: '64px',
      h: '64px',
    },
    '2xl': {
      w: '96px',
      h: '96px',
    },
  },
  shape: {
    circle: {
      bRad: '50%',
    },
    rounded: {
      bRad: '20%',
    },
    square: {
      bRad: 0,
    },
  },
}
export const statusVariantsStyle = {
  status: {
    online: {
      bg: '$success300',
    },
    offline: {
      bg: '$dark100',
    },
  },
}
