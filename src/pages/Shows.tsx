import { Link, useLoaderData, useRouteError } from 'react-router-dom'

export interface Show {
  id: number
  url: string
  name: string
  type: string
  language: string
  genres: string[]
  status: string
  runtime: number | null
  averageRuntime: number | null
  premiered: string | null
  ended: string | null
  officialSite: string | null
  schedule: {
    time: string
    days: string[]
  }
  rating: {
    average: number | null
  }
  weight: number
  network: {
    id: number
    name: string
    country: {
      name: string
      code: string
      timezone: string
    }
    officialSite: string | null
  } | null
  webChannel: {
    id: number
    name: string
    country: {
      name: string
      code: string
      timezone: string
    }
    officialSite: string | null
  } | null
  dvdCountry: string | null
  externals: {
    tvrage: number | null
    thetvdb: number | null
    imdb: string | null
  }
  image: {
    medium: string
    original: string
  } | null
  summary: string
  updated: number
  _links: {
    self: {
      href: string
    }
    previousepisode: {
      href: string
    }
  }
}

export interface TVShow {
  score: number
  show: Show
}


export default function Shows() {
  const shows = useLoaderData() as TVShow[]
  
  return (
    <div>
      <h1>TV Shows</h1>
      <ul>
        {shows.map(({ show }) => (
          <li key={show.id}>
            <img src={show.image?.medium} alt={show.name}/>
            <p>{show.name}</p>
            <Link to={show.id.toString()} key={show.id}>View Summary</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}


// Data loader
export async function showsLoader() {
  try {
    const res = await fetch(import.meta.env.PUBLIC_TVMAZE_SHOWS_API_URL)
    return await res.json()
  } catch (error) {}
  
  throw new Error('Could not fetch the list of shows')
}


// Error page
export function ShowsError() {
  const error: any = useRouteError()
  
  return (
    <div className="Shows-error">
      <h2>Error</h2>
      <p>{error.message}</p>
      <Link to="/">Refresh</Link>
    </div>
  )
}
