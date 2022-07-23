interface MuseumResponse {
  artObjects: {
    id: string;
    longTitle: string;
    webImage: { url: string };
  }[];
}

interface State {
  data?: MuseumResponse;
  isLoading: boolean;
  error?: string;
}

type Action =
  | { type: "request" }
  | { type: "success"; results: MuseumResponse }
  | { type: "failure"; error: string };
