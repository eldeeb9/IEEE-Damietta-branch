import Footer from "../components/Footer";
import Nav from "../components/Nav";
import AcademicInfo from "./components/AcademicInfo";
import PersonalInfo from "./components/PersonalInfo";
import UserDetails from "./components/UserDetails";
import { useAuth } from "@/app/utils/hooks/useAuth";

export const metadata = {
  title: "Profile",
  description:
    "Personal profile page for IEEE Damietta members. View your registration details and branch activity.",
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
};

const page = async () => {
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
    <>
      <Nav />
      <div className="container py-12!">
        <UserDetails
          username={user.user_metadata.username}
          profile={profileImage}
        />
        <PersonalInfo
          username={user.user_metadata.username}
          email={user.email}
        />
      </div>
      <Footer />
    </>
  );
};

export default page;
