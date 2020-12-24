import {dynamicSort} from '../lib/api'
import ShowItem from '../components/showItem'
export default function AlphShows({ items }) {
  const allShows = items.sort(
  function(a, b) {
    if (a.title.toLowerCase() < b.title.toLowerCase()) return -1;
    if (a.title.toLowerCase() > b.title.toLowerCase()) return 1;
    return 0;
  }
);
  console.log(allShows)

  return (
      <div>
        {allShows.map((item ) => (
          <ShowItem
            title={item?.title}
            image={item?.image}
            dj={item?.since}
            id={item?.id}
            startTime={item?.start}
            endTime={item?.end}
          />
      ))}
      </div>
  )
}
