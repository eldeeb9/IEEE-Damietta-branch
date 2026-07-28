import TrackHubPage from "../components/TrackHubPage";
import { trackHubs } from "../data/trackHubs";

export const metadata = {
  title: "CS Track",
  description:
    "IEEE Damietta Computer Society track — Competitive Programming and computer science workshops.",
};

export default function CsPage() {
  return <TrackHubPage hub={trackHubs.cs} />;
}
