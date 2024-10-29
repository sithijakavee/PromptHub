import { styles } from "@/utils/styles";
import { User } from "@clerk/nextjs/server";
import {
  Avatar,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/react";
import Link from "next/link";
import { GrDocumentStore } from "react-icons/gr";
import { AiOutlineLogout } from "react-icons/ai";
import { TbSwitchVertical } from "react-icons/tb";
import { useClerk } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

type Props = {
  user: User | null;
  setOpen: (open: boolean) => void;
  handleProfile: () => void;
  isSellerExist?: boolean;
};

const DropDown = ({ user, setOpen, handleProfile, isSellerExist }: Props) => {
  const { signOut } = useClerk();
  const router = useRouter();
  const handleLogOut = async () => {
    await signOut();
    router.push("/sign-in");
  };
  return (
    <Dropdown placeholder="bottom-start" className="bg-white p-5">
      <DropdownTrigger>
        <Avatar
          src={`https://api.dicebear.com/9.x/pixel-art/svg?seed=${user?.username}`}

          alt=""
          className="w-[40px] h-[40px] cursor-pointer"
        />
      </DropdownTrigger>
      <DropdownMenu aria-label="Profile Actions" variant="flat" className="flex flex-col gap-5">
        <DropdownItem
          onClick={() => {
            handleProfile();
            setOpen(false);
          }}
        >
          <div className="flex w-full items-center">
            <Avatar
              src={`https://api.dicebear.com/9.x/pixel-art/svg?seed=${user?.username}`}
              alt=""
              className="w-[30px] h-[30px] cursor-pointer"
            />
            <div className="flex flex-col">
            <span className={`${styles.label} text-black text-[16px] pl-2`}>
              My Profile
            </span>
            <span className={`${styles.label} text-black/50 text-[10px] pl-2`}>
              {"@" + user?.username}
            </span>
            </div>
          </div>
        </DropdownItem>
        <DropdownItem>
          <Link href={"/my-orders"} className="flex w-full items-center">
            <GrDocumentStore className="text-[22px] ml-2 text-black" />
            <span className={`${styles.label} text-black text-[16px] pl-2`}>
              My Orders
            </span>
          </Link>
        </DropdownItem>
        <DropdownItem className={`${!isSellerExist && "hidden"}`}>
          <Link href={"/my-shop"} className="flex w-full items-center">
            <TbSwitchVertical className="text-2xl ml-2 text-black" />
            <span className={`${styles.label} text-black text-[16px] pl-2`}>
              Switching to Seller
            </span>
          </Link>
        </DropdownItem>
        <DropdownItem onClick={handleLogOut}>
          <div className="flex items-center w-full">
            <AiOutlineLogout className="text-2xl ml-2 text-black" />
            <span className={`${styles.label} text-black text-[16px] pl-2`}>
              Log out
            </span>
          </div>
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};

export default DropDown;
