import Link from 'next/link'

export default function ShowPersonas({
  name,
  id,
  autoDJ,
}) {
  if(!autoDJ) {
    return (
      <Link as={`/personas/${id}`} href="/personas/[id]">
        <a
          className="hover:underline"
          dangerouslySetInnerHTML={{ __html: name }}
        ></a>
      </Link>
    )
  }
  return (
      <h3 className="text-3xl mb-3 leading-snug" dangerouslySetInnerHTML={{ __html: name }}>
      </h3>
  )
}
