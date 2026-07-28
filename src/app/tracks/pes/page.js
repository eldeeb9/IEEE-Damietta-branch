import TrackHubPage from "../components/TrackHubPage";
import { trackHubs } from "../data/trackHubs";

export const metadata = {
  title: "PES Track",
  description:
    "IEEE Damietta PES track — Power & Energy Society workshops including SolidWorks, ANSYS, MPS, and Mechanical Design.",
};

export default function PesPage() {
  return <TrackHubPage hub={trackHubs.pes} />;
}
