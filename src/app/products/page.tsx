import Link from "next/link";

export default function ProductList() {
  const prodId = 100;

  return (
    <>
      <Link href="\">Home</Link>
      <h1>Products List</h1>
      <h1>
        <Link href="products/1">Produncts 1</Link>
      </h1>
      <h1>
        <Link href="products/1">Produncts 2</Link>
      </h1>
      <h1>
        <Link href="products/1" replace>
          Produncts 3
        </Link>
      </h1>
      <h1>
        <Link href="products/1">Produncts 4</Link>
      </h1>
      <h1>
        <Link href={`products/${prodId}`}>Produncts ${prodId}</Link>
      </h1>
    </>
  );
}
