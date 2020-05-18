import Link from 'next/link';

const Home = (props) => {
  return (
    <div>
      哈囉你好嗎
      <Link href="/About">
        <a className="QQ">About</a>
      </Link>
    </div>
  );
};

Home.getInitialProps = async (ctx) => {
  const { store } = ctx;
  console.log('store:', store);
};

export default Home;
