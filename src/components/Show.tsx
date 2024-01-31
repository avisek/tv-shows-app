import { Link } from 'react-router-dom'
import { TVShow } from '../hooks/useShows'

export type ShowItemProps = {
  show: TVShow
}

export default function Show({ show }: ShowItemProps) {
  return (
    <div className="Show">
      <div className="Show_Preview">
        <img src={show.show.image?.medium} alt={show.show.name} />
      </div>
      <div className="Show_Info">
        <h3>{show.show.name}</h3>
        <Link to={show.show.id.toString()} key={show.show.id}>
          View Summary
        </Link>
      </div>
    </div>
  )
}
