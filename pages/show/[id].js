import Link from "next/link";

function Show({ show }) {
  // return <p>{JSON.stringify(show)}</p>;
  return (
    <>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>
      <h1>{show.name}</h1>
      <h3>{show.summary}</h3>
      {show.image ? <img src={show.image.medium} /> : null}
    </>
  );
}

Show.getInitialProps = async function (context) {
  debugger;
  const { id } = context.query;
  const res = await fetch(`https://api.tvmaze.com/shows/${id}`);
  const show = await res.json();
  console.log("rendering...", show);

  return { show };
};

export default Show;
