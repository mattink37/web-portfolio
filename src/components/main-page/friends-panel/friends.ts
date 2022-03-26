import { Friend } from "./friends-panel";

export const getFriends = (): Friend[] => {
  return [
    {
      username: "Matt",
      avatar: "./discord.jpg",
      status: "#vibin",
      role: "gamer",
    },
    {
      username: "Ethan",
      avatar: "./discord.jpg",
      status: "#vibin",
      role: "gamer",
    },
    {
      username: "Grant",
      avatar: "./discord.jpg",
      status: "#vibin",
      role: "gamer",
    },
    {
      username: "Mograin",
      avatar: "./discord.jpg",
      status: "#vibin",
      role: "BIG gamer",
    },
    {
      username: "eee",
      avatar: "./discord.jpg",
      status: "#vibin",
      role: "gamer",
    },
  ] as Friend[];
};
