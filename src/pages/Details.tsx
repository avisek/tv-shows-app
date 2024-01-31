import {
  Link,
  LoaderFunctionArgs,
  useLoaderData, useRouteError,
} from 'react-router-dom'
import { Show, TVShow } from './Shows'

export default function Details() {
  const show = useLoaderData() as Show | null
  
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
      <h2>{show.name}</h2>
      <img src={show.image?.original} alt={show.name} />
      <p>{show.summary}</p>
      <button>Book Movie Ticket</button>
    </div>
  )
}


// Data loader
export async function detailsLoader({ params }: LoaderFunctionArgs): Promise<Show | null> {
  const { showId } = params
  
  try {
    const res = await fetch(import.meta.env.PUBLIC_TVMAZE_SHOWS_API_URL)
    const shows: TVShow[] = await res.json()
    const show = shows.find(({ show }) => String(show.id) === showId)
    return show?.show ?? null
  } catch (error) {}
  
  throw new Error('Could not fetch the list of shows')
}


// Error page
export function DetailsError() {
  const error: any = useRouteError()
  
  return (
    <div className="Shows-error">
      <h2>Error</h2>
      <p>{error.message}</p>
      <Link to="/">Refresh</Link>
    </div>
  )
}
