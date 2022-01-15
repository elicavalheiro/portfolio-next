import type { NextPage } from 'next';
import IntroSection from '../components/intro/IntroSection';
import Meta from '../components/Meta';
import { globalStyles } from '../styles/globalStyles';

const Home: NextPage = () => {
  globalStyles();

  return (
    <div>
      <Meta />
      <main>
        <IntroSection />
      </main>
    </div>
  );
};

export default Home;
