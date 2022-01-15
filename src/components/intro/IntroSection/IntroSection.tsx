import IntroImage from '../IntroImage';
import * as S from './IntroSection.styles';

const IntroSection = () => (
  <S.IntroContainer>
    <IntroImage src="https://images.unsplash.com/photo-1417325384643-aac51acc9e5d?q=75&fm=jpg" />
    <S.TextWrapper>
      <S.WelcomeMessage>Hello, I&apos;m Eli!</S.WelcomeMessage>
      <S.JobTitle>Front-end Developer</S.JobTitle>
    </S.TextWrapper>
  </S.IntroContainer>
);

export default IntroSection;
