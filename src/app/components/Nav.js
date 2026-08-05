import Image from "next/image";
import NavLink from "./NavLink";
import Link from "next/link";
import { useAuth } from "../utils/hooks/useAuth";
import MobileNavButton from "./MobileNavButton";
import { DropdownMenuDemo } from "./NavDropDownMenu";

const Nav = async () => {
  const { getUserData, getProfileData } = useAuth();

  const user = await getUserData();
  const profile = await getProfileData(user.id);

  let profileImage;

  if (!profile.profile) {
    profileImage = "/images/anonymous-profile.jpg";
  } else {
    profileImage = profile.profile;
  }

  return (
    <nav className="mx-4 md:mx-32 px-6 bg-slate-700/20 backdrop-blur-lg border-b border-[#ffffff1a] shadow sticky top-3 rounded-full z-100">
      <div className="flex justify-between items-center py-3 w-full z-10">
        <div className="logo flex items-center">
          <Image
            src="/images/logo.jpg"
            className="rounded-full"
            alt="IEEE"
            width={50}
            height={50}
          />
          <span className="text-ieee-primary text-2xl font-bold ml-3">
            IEEE Damietta
          </span>
        </div>
        <ul className="hidden md:flex text-white items-center gap-6">
          <NavLink name="home" route="/" />
          <NavLink name="Events" route="/events" />
          <NavLink name="Blogs" route="/blogs" />
          <DropdownMenuDemo />
          {!user && (
            <Link
              href="/register"
              className="px-6 py-2 font-bold rounded-full text-white bg-ieee-primary hover:bg-[#004494] transition-colors"
            >
              Join now
            </Link>
          )}
          {user && (
            <>
              <Link href="/profile" className="flex items-center gap-4">
                <img
                  src={profileImage}
                  className="rounded-full"
                  alt="profile"
                  width={50}
                  height={50}
                />
              </Link>
            </>
          )}
        </ul>

        <MobileNavButton user={user} />
      </div>
    </nav>
  );
};

export default Nav;
