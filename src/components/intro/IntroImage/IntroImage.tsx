import Image from 'next/image';
import * as S from './IntroImage.styles';

type IntroImageProps = {
  src: string;
};

const IntroImage = ({ src }: IntroImageProps) => (
  <S.IntroImageContainer>
    <Image src={src} width={320} height={320} />
  </S.IntroImageContainer>
);

export default IntroImage;
