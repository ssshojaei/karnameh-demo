export type TProblems = {
  id: number;
  title: string;
  body: string;
  date: string;
  user: TUser;
  solutions: TSolutions[];
};

export type TSolutions = {
  id: number;
  body: string;
  like: number;
  dislike: number;
  date: string;
  user: TUser;
};

export type TUser = {
  avatar: string;
  name: string;
};
