import Image from "next/image";

const StoryCard = ({ name, src, profile }) => {
  return (
    <div className="relative overflow-hidden h-14 w-14 md:w-20 md:h-20 lg:h-56 lg:w-32 cursor-pointer p-3 hover:animate-pulse hover:scale-105 transition-transform">
      <Image
        src={profile}
        alt=""
        className="absolute aspect-square opacity-0 lg:opacity-100 object-cover rounded-full z-10 top-5"
        width={40}
        height={40}
        fixed="true"
      />
      <Image
        src={src}
        alt=""
        className="object-cover h-auto w-auto filter brightness-75 rounded-full lg:rounded-3xl"
        fill="true"
        sizes="auto"
      />
      <p className="hidden lg:block px-1 absolute z-10 bottom-5 text-white ">
        {name}
      </p>
    </div>
  );
};

export default StoryCard;
