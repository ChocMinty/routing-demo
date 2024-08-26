import { notFound } from "next/navigation";

type ReviewDetailsProps = {
  productId: string;
  reviewId: string;
};

function getRandomInt(count: number) {
  return Math.floor(Math.random() * count);
}

export default function ReviewDetail({
  params,
}: {
  params: ReviewDetailsProps;
}) {
  const random = getRandomInt(2);

  if (random === 1) {
    throw new Error("Error done loading review");
  }

  if (parseInt(params.reviewId) > 1000) {
    notFound();
  }
  return (
    <h1>
      This is review number {params.reviewId} for product {params.productId}
    </h1>
  );
}
