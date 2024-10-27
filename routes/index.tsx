import Navbar from "../components/Navbar.tsx";
import TwitchPreview from "../islands/TwitchPreview.tsx";
import OsuPreview from "../islands/OsuPreview.tsx";
import TwitterPreview from "../islands/TwitterPreview.tsx";
import GitHubPreview from "../islands/GitHubPreview.tsx";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-900">
        {/* Profile Section */}
        <section className="text-center mb-6">
          <div className="flex justify-center">
            <img
              src="osuprofilepicture.jpg"
              alt="Profile picture of Kayxo_"
              className="rounded-full w-32 h-32 mb-4"
            />
          </div>
          <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-200">
            Kayxo_
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Welcome to my website, check out my socials to know more about me!
          </p>
        </section>

        {/* Social Media Links with Flex Gap for Spacing */}
        <section className="flex flex-col items-center gap-3 w-full max-w-xs">
          <TwitchPreview />
          <OsuPreview />
          <TwitterPreview />
          <GitHubPreview />
        </section>
      </main>
    </>
  );
}
