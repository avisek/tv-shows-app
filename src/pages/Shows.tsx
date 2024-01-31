import { useEffect, useState } from 'react'

interface Show {
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

interface TVShow {
  score: number
  show: Show
}

export default function Shows() {
  const [shows, setShows] = useState<TVShow[]>([])
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://api.tvmaze.com/search/shows?q=all',
        )
        const data = await response.json()
        setShows(data)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }
    
    fetchData()
  }, [])
  
  return (
    <div>
      <h1>TV Shows</h1>
      <ul>
        {shows.map((show) => {console.log(show); return (
          <li key={show.show.id}>
            <img src={show.show.image?.medium} alt={show.show.name}/>
            <p>{show.show.name}</p>
            <button>View Summary</button>
          </li>
        )})}
      </ul>
    </div>
  )
}
