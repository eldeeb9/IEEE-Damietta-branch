import Nav from "../components/Nav";
import Footer from "../components/Footer";
import BookingPanel from "./components/BookingPanel";
import { createServer } from "../utils/supabase/server";
import { useAuth } from "../utils/hooks/useAuth";

const page = async () => {
  const { checkAuth } = useAuth();
  const user = await checkAuth();

  const supabase = await createServer();
  const { data, error } = await supabase.from("automation_dates").select(
    `
    *,
    automation_dates_reservations(user_id)
  `,
  );

  if (error) {
    console.error("Failed to load automation dates:", error.message);
  }

  return (
    <>
      <Nav />
      <BookingPanel dates={data ?? []} user={user} />
      <Footer />
    </>
  );
};

export default page;
