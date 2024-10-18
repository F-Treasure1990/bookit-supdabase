export default function Heading({
  title = "insert heading",
}: {
  title: string;
}) {
  return (
    <h2 className="mb-6 scroll-m-20 border-b pb-2 text-3xl font-semibold capitalize tracking-tight first:mt-0">
      {title}
    </h2>
  );
}
