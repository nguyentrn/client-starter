import Link from "next/link";

const IndexPage = () => {
  return (
    <>
      <Link href="/counter">
        <a>Counter</a>
      </Link>
      Home
    </>
  );
};

export default IndexPage;
