import { useQuery } from 'graphql-hooks';

const INTRO_QUERY = `query getIntro {
  intro {
    jobTitle
    photo {
      id
      url
      alt
    }
  }
}`;

function App(): JSX.Element {
  const { loading, error, data } = useQuery(INTRO_QUERY);

  if (loading) return <p>Loading...</p>;
  if (error) return <></>;

  return (
    <div>
      {data && (
        <div>
          <img
            src={data.intro.photo.url}
            alt={data.intro.photo.alt}
            style={{ width: '100px' }}
          />
          <p>{data?.intro?.jobTitle}</p>
        </div>
      )}
    </div>
  );
}

export default App;
