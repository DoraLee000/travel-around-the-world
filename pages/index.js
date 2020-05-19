import Link from 'next/link';
import fetch from 'node-fetch';

const Home = props => {
  return (
    <div>
      哈囉你好嗎
      <Link href="/About">
        <a className="QQ">About</a>
      </Link>
      <div>
        <Link href="/Blog">
          <a>Blog</a>
        </Link>
      </div>
    </div>
  );
};

Home.getInitialProps = async ctx => {
  const { store } = ctx;
  console.log(store);
};

export default Home;

// export async function getServerSideProps() {
//   const res = await fetch('http://localhost:5656/getAllUser');
//   console.log(res);

//   return {
//     props: {
//       stars: res,
//     },
//   };
// }
