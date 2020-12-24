import Link from 'next/link'

export default function ShowItem({
  title,
  image,
  dj,
  id,
  startTime,
  endTime,
}) {
  return (
    <div>
      <h3 className="text-3xl mb-3 leading-snug">
      <img
      src={image}
      className="w-12 h-12 rounded-full mr-4"
      alt={title}
      />
        <Link as={`/shows/${id}`} href="/shows/[id]">
          <a
            className="hover:underline"
            dangerouslySetInnerHTML={{ __html: title }}
          ></a>
        </Link>
      </h3>
      <div className="text-lg mb-4">
        from {startTime} to {endTime}
      </div>
      <div className="text-lg leading-relaxed mb-4">
      with {dj}
      </div>

  </div>
  )
}
