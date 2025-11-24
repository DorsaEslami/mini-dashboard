export interface ServerUsersResponse {
  readonly users: ReadonlyArray<{ id: number; name: string; email: string }>;
}

export const getUsersServer = async (): Promise<ServerUsersResponse> => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users", { cache: "no-store" });
  const data = (await res.json()) as Array<{ id: number; name: string; email: string }>;
  return { users: data };
};

export interface ClientPostsResponse {
  readonly posts: ReadonlyArray<{ id: number; title: string }>;
}

export const getPostsClient = async (): Promise<ClientPostsResponse> => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = (await res.json()) as Array<{ id: number; title: string }>;
  return { posts: data };
};

