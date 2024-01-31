import { Link } from 'react-router-dom'
import useShows from '../hooks/useShows'

export default function Shows() {
  const { isLoading, error, shows } = useShows()
  
  if (isLoading) {
    return (
      <div className="Shows-loading">
        <h2>Loading...</h2>
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
  
  return (
    <div>
      <h1>All Shows</h1>
      <ul>
        {shows.map(({ show }) => (
          <li key={show.id}>
            <img src={show.image?.medium} alt={show.name}/>
            <p>{show.name}</p>
            <Link to={show.id.toString()} key={show.id}>
              View Summary
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
