import Link from 'next/link';
// import fetch from 'node-fetch';
import CardComponent from '../components/Home/CardList';
import { loadData } from '../store/actions';

const Home = props => {
  return (
    <div>
      哈囉你好嗎
      <Link href="/About">
        <a className="QQ">About</a>
      </Link>
      <div>
        <CardComponent />
      </div>
    </div>
  );
};

Home.getInitialProps = async ctx => {
  const { store } = ctx;
  store.dispatch(loadData());
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
