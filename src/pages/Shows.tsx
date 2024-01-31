import { Link } from 'react-router-dom'
import useShows from '../hooks/useShows'
import Show from '../components/Show'

export default function Shows() {
  const { isLoading, error, shows } = useShows()
  
  if (isLoading) {
    return (
      <>
        <h2>Loading shows...</h2>
      </>
    )
  }
  
  if (error) {
    return (
      <>
        <h2>Error</h2>
        <p>{error.message}</p>
        <Link to="/">Refresh</Link>
      </>
    )
  }
  
  return (
    <>
      <h2>All Shows</h2>
      <ul className="Shows">
        {shows.map((show) => (
          <li key={show.show.id}>
            <Show show={show}/>
          </li>
        ))}
      </ul>
    </>
  )
}
