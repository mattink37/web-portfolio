import { AboutMe, Education, Experience } from "../../../common/enumerations/channels";
import { Friend } from "./friends-panel";

export const getFriends = (): Friend[] => {
  return [
    {
      username: "Matt Inkeles",
      avatar: "./mattProfile.jpg",
      status: "#vibin",
      role: "Software Engineer",
      color: "#FFFFFF",
      onClick: AboutMe,
    },
    {
      username: "NCR",
      avatar: "./ncr.png",
      status: "#vibin",
      role: "Experience",
      color: "#54B948",
      onClick: Experience,
    },
    {
      username: "Blue Yonder",
      avatar: "./by.jpg",
      status: "#vibin",
      role: "Experience",
      color: "#4682b4",
      onClick: Experience,
    },
    {
      username: "Target",
      avatar: "./target.png",
      status: "#vibin",
      role: "Experience",
      color: "#CC0000",
      onClick: Experience,
    },
    {
      username: "Kohl's",
      avatar: "./kohls.png",
      status: "#vibin",
      role: "Experience",
      color: "#7fffcc",
      onClick: Experience,
    },
    {
      username: "UCF",
      avatar: "./ucf.png",
      status: "#vibin",
      role: "Education",
      color: "#B7A369",
      onClick: Education,
    },
    {
      username: "KSU",
      avatar: "./ksu.jpg",
      status: "#vibin",
      role: "Education",
      color: "#ffc629",
      onClick: Education,
    },
  ] as Friend[];
};
