export interface Services {
  count: number;
  results: ServicesResults[];
  next: string | null;
  pages_number: number;
  previous: string | null;
}

export interface ServicesResults {
  id: number;
  title: string;
  description: string;
  image: string;
}
