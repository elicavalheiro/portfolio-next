import { styled } from '../../../stitches.config';

export const IntroContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '$medium3',
  padding: '$medium3 $large1',

  '@md': {
    flexDirection: 'row',
    gap: '180px',
  },

  '@lg': {
    padding: '100px 150px',
  },
});

export const TextWrapper = styled('div', {});

export const WelcomeMessage = styled('h2', {
  fontFamily: '$alegreya',
  fontWeight: '$extraBold',
  fontSize: '$large3',
  margin: 0,
});

export const JobTitle = styled('h3', {
  fontFamily: '$alegreya',
  fontSize: '$large1',
  fontWeight: '$regular',
  margin: 0,
});
