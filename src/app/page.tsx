import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1>Hello Everybody</h1>
      <Link href="/blog">Bloggy</Link>
      <Link href="/products">Products</Link>
    </>
  );
}
