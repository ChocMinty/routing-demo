import { Metadata } from "next/types";

type ProductDetailsProps = {
  params: {
    productId: string;
  };
};

export const generateMetadata = async ({
  params,
}: ProductDetailsProps): Promise<Metadata> => {
  const title = await new Promise((resolve) => {
    setTimeout(() => {
      resolve(`iPhone ${params.productId}`);
    });
  });
  return {
    title: `Product ${title}`,
  };
};

export default function ProductDetails({ params }: ProductDetailsProps) {
  return <h1> Details about da prod {params.productId}</h1>;
}
