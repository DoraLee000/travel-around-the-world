import Link from "next/link";
const About = props => (
  <div>
    About us{" "}
    <Link href="/">
      <a>Home</a>
    </Link>
  </div>
);

About.getInitialProps = async ctx => {
  const { store } = ctx;
  console.log("store:", store);
};

export default About;
