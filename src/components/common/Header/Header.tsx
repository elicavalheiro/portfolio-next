import Link from 'next/link';
import { useRouter } from 'next/router';
import * as S from './Header.styles';

const Header = () => {
  const router = useRouter();

  const navigation = [
    {
      title: 'about',
      url: '/',
    },
    {
      title: 'projects',
      url: '/projects',
    },
  ];

  return (
    <S.HeaderContainer>
      <Link href="/teste">
        <S.HeaderLogo>Eli Cavalheiro</S.HeaderLogo>
      </Link>
      <S.HeaderNavigation>
        {navigation.map(({ title, url }) => (
          <Link href={url} key={`${title}+${url}`}>
            <S.HeaderNavigationItem active={router.pathname === url}>
              {title}
            </S.HeaderNavigationItem>
          </Link>
        ))}
      </S.HeaderNavigation>
    </S.HeaderContainer>
  );
};

export default Header;
