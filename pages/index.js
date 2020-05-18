import Link from "next/link";
const Home = props => {
  return (
    <div>
      Hello World.{" "}
      <Link href="/about">
        <a>About</a>
      </Link>
    </div>
  );
};

Home.getInitialProps = async ctx => {
  const { store } = ctx;
  console.log("store:", store);
};

export default Home;
