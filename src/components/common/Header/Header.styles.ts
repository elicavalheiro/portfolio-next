import { styled } from '../../../stitches.config';

export const HeaderContainer = styled('header', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '$medium3 $large1',

  '@lg': {
    padding: '100px 150px',
  },
});

export const HeaderLogo = styled('a', {
  cursor: 'pointer',
  fontFamily: '$alegreya',
  '@sm': {
    fontSize: '$xsmall3',
  },
  '@md': {
    fontSize: '$small2',
  },
  '@lg': {
    fontSize: '$medium2',
  },
});

export const HeaderNavigation = styled('nav', {
  display: 'flex',
  gap: '$medium2',
});

export const HeaderNavigationItem = styled('a', {
  cursor: 'pointer',
  fontSize: '$xsmall2',

  variants: {
    active: {
      true: {
        fontWeight: '$bold',
        textDecoration: 'underline',
      },
    },
  },
});

export default HeaderContainer;
