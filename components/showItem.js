import Link from 'next/link'
export default function ShowItem({
  title,
  image,
  dj,
  id,
  startTime,
  endTime,
}){
  function GetDayOfWeek(date) {
    const dayOfWeek = new Date(date).getDay();
    return isNaN(dayOfWeek) ? null :
      ['Sundays', 'Mondays', 'Tuesdays', 'Wednesdays', 'Thursdays', 'Fridays', 'Saturdays'][dayOfWeek];
  }
  function CleanTime(time) {
    if(time?.charAt(0)==="0"){
      return time.substring(1)
    }
    return time
  }
  var date = GetDayOfWeek(startTime?.substring(0,10))
  startTime = CleanTime(startTime?.substring(11,16))
  endTime = CleanTime(endTime?.substring(11,16))
  if(id) {
    return (
      <div>
        <h3 className="text-3xl mb-3 leading-snug inline">

        <img
        src={image}
        className="w-12 h-12 rounded-full mr-4"
        />
          <Link as={`/shows/${id}`} href="/shows/[id]">
            <a
              className="hover:underline"
              dangerouslySetInnerHTML={{ __html: title }}
            ></a>
          </Link>
        </h3>
        <div className="text-lg mb-4">
          {date} {startTime} {endTime}
        </div>
        <div className="text-lg leading-relaxed mb-4">
        {dj}
        </div>

    </div>
    )
  }
  return ("")
}
