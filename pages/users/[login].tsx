import { FC } from "react";
import { UserType } from "../../types";
import { GetServerSideProps } from "next";
import { ParsedUrlQuery } from "querystring";

interface Params extends ParsedUrlQuery {
  login: string;
}

export const getServerSideProps: GetServerSideProps = async context => {
  const { login } = context.params as Params;

  const response = await fetch(`https://api.github.com/users/${login}`);
  const data = await response.json();

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      user: data,
    },
  };
};

interface Props {
  user: UserType;
}

const UserPage: FC<Props> = ({ user }) => {
  return (
    <div>
      <h1>User Page</h1>
      <h2>{user.login}</h2>
      <ul>
        <li>{user.public_repos}</li>
        <li>{user.created_at}</li>
        <li>{user.followers}</li>
        <li>{user.following}</li>
      </ul>
    </div>
  );
};

export default UserPage;
