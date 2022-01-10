import type { NextPage } from 'next';
import Meta from '../components/Meta';
import { globalStyles } from '../styles/globalStyles';

const Home: NextPage = () => {
  globalStyles();

  return (
    <div>
      <Meta />
      <main>Hello World</main>
    </div>
  );
};

export default Home;
