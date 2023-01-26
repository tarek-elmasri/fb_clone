import StoryCard from "./StoryCard";
import {
  bill1,
  bill2,
  elon1,
  elon2,
  jeff1,
  jeff2,
  mark1,
  mark2,
} from "../assets/images";

const stories = [
  {
    name: "Elon Musk",
    src: elon1,
    profile: elon2,
  },
  {
    name: "Jeff Beziz",
    src: jeff1,
    profile: jeff2,
  },
  {
    name: "Mark Zuckerberg",
    src: mark1,
    profile: mark2,
  },
  {
    name: "Bill Gates",
    src: bill1,
    profile: bill2,
  },
];

const Stories = () => {
  return (
    <div className="flex justify-center space-x-3 mx-auto">
      {stories &&
        stories.map(({ src, name, profile }) => (
          <StoryCard key={name} name={name} src={src} profile={profile} />
        ))}
    </div>
  );
};

export default Stories;
