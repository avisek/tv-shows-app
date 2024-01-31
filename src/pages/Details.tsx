import { Link, useParams } from 'react-router-dom'
import useShows from '../hooks/useShows'

export default function Details() {
  const { showId } = useParams()
  const { isLoading, error, shows } = useShows()
  
  if (isLoading) {
    return (
      <div className="Details-loading">
        <p>Loading Show Details...</p>
      </div>
    )
  }
  
  if (error) {
    return (
      <div className="Shows-error">
        <h2>Error</h2>
        <p>{error.message}</p>
        <Link to="/">Refresh</Link>
      </div>
    )
  }
  
  const show = shows.find(({ show }) => String(show.id) === showId)?.show
  
  if (!show) {
    return (
      <div className="Shows-error">
        <h2>Error</h2>
        <p>The show you're requesting is not found!</p>
        <Link to="/">Back to all shows</Link>
      </div>
    )
  }
  
  return (
    <div className="ShowDetails">
      <div className="ShowDetails_Left">
        <img src={show.image?.original} alt={show.name}/>
      </div>
      <div className="ShowDetails_Right">
        <h2>{show.name}</h2>
        <div dangerouslySetInnerHTML={{ __html: show.summary }}></div>
        <button>Book Movie Ticket</button>
        <Link to="/" className="Back">Back</Link>
      </div>
    </div>
  )
}
