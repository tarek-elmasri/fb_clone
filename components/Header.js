import Image from "next/image";
import {
  BellIcon,
  ChevronDownIcon,
  ChatBubbleOvalLeftEllipsisIcon,
  HomeIcon,
  UserGroupIcon,
  RectangleGroupIcon,
} from "@heroicons/react/24/solid";
import {
  FlagIcon,
  PlayCircleIcon,
  MagnifyingGlassIcon,
  ShoppingCartIcon,
} from "@heroicons/react/24/outline";
import fbLogo from "../assets/images/fb-logo.png";
import { HeaderIcon } from "@/components";
import { signOut, useSession } from "next-auth/react";
const Header = () => {
  const { data: session } = useSession();
  return (
    <div className="sticky top-0 z-50 bg-white flex items-center p-2 lg:px-5 shadow-md">
      <div className="flex items-center">
        <Image
          src={fbLogo}
          alt="Facebook Clone"
          width={40}
          height={40}
          fixed="true"
        />
        <div className="flex ml-2 items-center rounded-full bg-gray-100 p-2">
          <MagnifyingGlassIcon className="h-6 text-gray-600" />
          <input
            className="hidden md:inline-flex ml-2 items-center bg-transparent outline-none placeholder-gray-500 flex-shrink"
            type="text"
            placeholder="Search"
          />
        </div>
      </div>
      <div className="flex justify-center flex-grow">
        <div className="flex space-x-6 md:space-x-2">
          <HeaderIcon Icon={HomeIcon} active />
          <HeaderIcon Icon={FlagIcon} />
          <HeaderIcon Icon={PlayCircleIcon} />
          <HeaderIcon Icon={ShoppingCartIcon} />
          <HeaderIcon Icon={UserGroupIcon} />
        </div>
      </div>

      <div className="flex items-center sm:space-x-2 justify-end">
        <Image
          src={session.user.image}
          alt="Signout"
          onClick={signOut}
          width={40}
          height={40}
          fixed="true"
          className="rounded-full cursor-pointer"
        />
        <p className="font-semibold whitespace-nowrap pr-3">Tarek Elmasri</p>
        <RectangleGroupIcon className="icon" />
        <ChatBubbleOvalLeftEllipsisIcon className="icon" />
        <BellIcon className="icon" />
        <ChevronDownIcon className="icon" />
      </div>
    </div>
  );
};

export default Header;
