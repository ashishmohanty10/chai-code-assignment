export interface randomUser {
  statusCode: number;
  data: {
    gender: string;
    name: {
      title: string;
      first: string;
      last: string;
    };
    location: {
      street: {
        number: number;
        name: string;
      };
      city: string;
      state: string;
      country: string;
      postcode: number;
      coordinates: {
        latitude: string;
        longitude: string;
      };
      timezone: {
        offset: string;
        description: string;
      };
    };
    email: string;
    login: {
      uuid: string;
      username: string;
      password: string;
      salt: string;
      md5: string;
      sha1: string;
      sha256: string;
    };
    dob: {
      date: string;
      age: number;
    };
    registered: {
      date: string;
      age: number;
    };
    phone: string;
    cell: string;
    id: number;
    picture: {
      large: string;
      medium: string;
      thumbnail: string;
    };
    nat: string;
  };
  message: string;
  success: boolean;
}

export const defaultUserData = {
  data: {
    cell: "064-2016-722",
    dob: {
      age: 33,
      date: "1990-03-13T11:05:43.482Z",
    },
    email: "janko.kojic@example.com",
    gender: "male",
    id: 102,
    location: {
      city: "Preševo",
      coordinates: {
        latitude: "8.9872",
        longitude: "-129.5470",
      },
      country: "Serbia",
      postcode: 54870,
      state: "Šumadija",
      street: {
        name: "Porodice Stojić",
        number: 2059,
      },
      timezone: {
        description: "Bangkok, Hanoi, Jakarta",
        offset: "+7:00",
      },
    },
    login: {
      md5: "3f7a25b3e168b809fb5f14f2fa7a2b0a",
      password: "celtic",
      salt: "JF938Twk",
      sha1: "d5262f1e9099a4cc29ee9e60f280242f1c195a1c",
      sha256:
        "8de083d98a1636022a86d26f4a88e6295fc768e17e2aa5ffeea95900a29039d2",
      username: "greenpanda411",
      uuid: "16bc03b7-442b-4229-aaf1-349f4d7d0b87",
    },
    name: {
      first: "Janko",
      last: "Kojić",
      title: "Mr",
    },
    nat: "RS",
    phone: "025-1839-386",
    picture: {
      large: "https://randomuser.me/api/portraits/men/19.jpg",
      medium: "https://randomuser.me/api/portraits/med/men/19.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/men/19.jpg",
    },
    registered: {
      age: 3,
      date: "2019-10-28T02:52:26.813Z",
    },
  },
  message: "Random user fetched successfully",
  statusCode: 200,
  success: true,
};

export interface jokesResponse {
  statusCode: number;
  data: {
    categories: string[];
    id: number;
    content: string;
  };
  message: string;
  success: boolean;
}

export const defaultJokeResponse: jokesResponse = {
  statusCode: 200,
  data: {
    categories: [],
    id: 773,
    content:
      "Do you know why Chuck Norris doesn't have hair on his balls? Because hair doesn't grow on steel!",
  },
  message: "Random joke fetched successfully",
  success: true,
};

export interface CatData {
  weight: {
    imperial: string;
    metric: string;
  };
  id: number;
  name: string;
  cfa_url?: string;
  vetstreet_url?: string;
  vcahospitals_url?: string;
  temperament: string;
  origin: string;
  country_codes: string;
  country_code: string;
  description: string;
  life_span: string;
  indoor: number;
  lap?: number;
  alt_names: string;
  adaptability: number;
  affection_level: number;
  child_friendly: number;
  dog_friendly: number;
  energy_level: number;
  grooming: number;
  health_issues: number;
  intelligence: number;
  shedding_level: number;
  social_needs: number;
  stranger_friendly: number;
  vocalisation: number;
  experimental: number;
  hairless: number;
  natural: number;
  rare: number;
  rex: number;
  suppressed_tail: number;
  short_legs: number;
  wikipedia_url?: string;
  hypoallergenic: number;
  image: string;
}

export interface CatAPIResponse {
  statusCode: number;
  data: {
    page: number;
    limit: number;
    totalPages: number;
    previousPage: boolean;
    nextPage: boolean;
    totalItems: number;
    currentPageItems: number;
    data: CatData[];
  };
  message: string;
  success: boolean;
}
