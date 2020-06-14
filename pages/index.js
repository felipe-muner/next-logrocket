import Link from "next/link";
import fetch from "isomorphic-unfetch";

export default function Index({ shows }) {
  console.log("shows:", shows);
  // shows.map((show) => console.log(show));
  return (
    <>
      <h2>home</h2>
      <Link href="/about">
        <a>about</a>
      </Link>

      <h1>Series</h1>
      <ul>
        {shows.map((show) => (
          <li key={show.id}>
            <Link href="/show/[id]" as={`/show/${show.id}`}>
              <a>{show.name}</a>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}

Index.getInitialProps = async function () {
  const res = await fetch("https://api.tvmaze.com/search/shows?q=sherlock");
  const data = await res.json();
  const shows = { shows: data.map((entry) => entry.show) };
  console.log("rendering...", shows);

  return shows;
};
