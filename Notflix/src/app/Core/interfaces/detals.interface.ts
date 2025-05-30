export interface Moviedetails {
    adult: boolean;
    backdrop_path: string;
    belongs_to_collection: BelongsToCollection;
    budget: number;
    genres: (GenresEntity)[];
    homepage: string;
    id: number;
    imdb_id: string;
    origin_country: (string)[];
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    production_companies: (ProductionCompaniesEntity)[];
    production_countries: (ProductionCountriesEntity)[];
    release_date: string;
    revenue: number;
    runtime: number;
    spoken_languages: (SpokenLanguagesEntity)[];
    status: string;
    tagline: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
  }
  export interface BelongsToCollection {
    id: number;
    name: string;
    poster_path: string;
    backdrop_path: string;
  }
  export interface GenresEntity {
    id: number;
    name: string;
  }
  export interface ProductionCompaniesEntity {
    id: number;
    logo_path: string;
    name: string;
    origin_country: string;
  }
  export interface ProductionCountriesEntity {
    iso_3166_1: string;
    name: string;
  }
  export interface SpokenLanguagesEntity {
    english_name: string;
    iso_639_1: string;
    name: string;
  }
  