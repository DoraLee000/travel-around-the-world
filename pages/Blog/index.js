import React from 'react';

const Page = ({ bar }) => {
  return <div>Book {bar}</div>;
};

// Page.getInitialProps = async (ctx) => {
//   // Fetch data from external API
//   let res = await fetch('https://dog.ceo/api/breeds/image/random ');
//   let data = await res.json();
//   console.log('res', data);
//   return {
//     props: { data },
//   };
// };

// export async function getServerSideProps() {
//   const res = await fetch('https://dog.ceo/api/breeds/image/random');
//   const posts = await res.json();

// By returning { props: posts }, the Blog component
// will receive `posts` as a prop at build time
//   return {
//     props: {
//       posts,
//     },
//   };

//   return { props: { name: 'World!' } };
// }

Page.getInitialProps = () => {
  return { bar: 100 };
};

export default Page;

// https://api.github.com/repos/zeit/next.js
// https://dog.ceo/api/breeds/image/random
