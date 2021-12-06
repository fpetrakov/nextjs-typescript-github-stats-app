export interface UserType {
  login: string;
  avatar_url: string;
  html_url: string;
  repos_url: string | null;
  name: string | null;
  followers: number;
  following: number;
  public_repos: number;
}

export interface RepoType {
  name: string;
  html_url: string;
  description: string;
  language: string | null;
  stargazers_count: number;
}
