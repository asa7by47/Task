export interface Projects {
  id: number;
  title: string;
  description: string;
  technologiesUsed: string[];
}

export interface LoginBody {
  name: string;
  email: string;
  password: string;
  specialization: string;
}

export interface AuthTokenResponse {
  id: number;
  name: string;
  email: string;
  password: string;
  role: string;
  specialization: string;
}
