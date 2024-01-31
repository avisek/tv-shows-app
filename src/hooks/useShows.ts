import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

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

function fetchShows() {
  return axios.get<TVShow[]>(import.meta.env.PUBLIC_TVMAZE_SHOWS_API_URL)
}

export default function useShows() {
  const { isPending, error, data } = useQuery({
    queryKey: ['shows'],
    queryFn: fetchShows,
    staleTime: Infinity,
  })

  if (isPending) {
    return { isLoading: true as const, error: null, shows: null }
  }

  if (error) {
    return { isLoading: false as const, error: error, shows: null }
  }

  return { isLoading: false as const, error: null, shows: data!.data }
}
