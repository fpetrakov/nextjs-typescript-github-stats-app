import Image from "next/image";
import React, { FC } from "react";
import { Box } from ".";
import styles from "../styles/modules/UserCard.module.css";
import { RepoType, UserType } from "../types";

interface Props {
  user: UserType;
}

const UserCard: FC<Props> = ({ user }) => {
  return (
    <Box>
      <Image
        src={user.avatar_url}
        width={150}
        height={150}
        className={styles.avatar}
        alt="user avatar"
      />
      <h2 className={styles.name}>{user.name}</h2>
      <a className={styles.login} href={user.html_url}>{`@${user.login}`}</a>
      <table className={styles.table}>
        <tbody>
          <tr>
            <th>Repositories</th>
            <th>Followers</th>
            <th>Following</th>
          </tr>
          <tr>
            <td>{user.public_repos}</td>
            <td>{user.followers}</td>
            <td>{user.following}</td>
          </tr>
        </tbody>
      </table>
    </Box>
  );
};

export default UserCard;
