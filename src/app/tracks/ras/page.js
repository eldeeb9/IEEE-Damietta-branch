import TrackHubPage from "../components/TrackHubPage";
import { trackHubs } from "../data/trackHubs";

export const metadata = {
  title: "RAS Track",
  description:
    "IEEE Damietta RAS track — Robotics & Automation Society workshops including Microcontrollers, Automation, Electronics, and Embedded Systems.",
};

export default function RasPage() {
  return <TrackHubPage hub={trackHubs.ras} />;
}
