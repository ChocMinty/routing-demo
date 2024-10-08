export default function Docs({
  params,
}: {
  params: {
    slug: string[];
  };
}) {
  if (params.slug.length === 2) {
    return (
      <h1>
        Viewing docs feature {params.slug[0]} and concept {params.slug[1]}
      </h1>
    );
  } else {
    return <h1>Viewing docs feature {params.slug[0]}</h1>;
  }
}
