export interface MovieActors {
    id: number;
    cast: (CastEntity)[];
   
  }
  export interface CastEntity {
    adult: boolean;
    gender: number;
    id: number;
    known_for_department: string;
    name: string;
    original_name: string;
    popularity: number;
    profile_path: string;
    cast_id: number;
    character: string;
    credit_id: string;
    order: number;
  }


  export interface MoviePoster {
    backdrops: (BackdropsEntity)[];
  }
  export interface BackdropsEntity {
    aspect_ratio: number;
    height: number;
    file_path: string;
    vote_average: number;
    vote_count: number;
    width: number;
  }
  