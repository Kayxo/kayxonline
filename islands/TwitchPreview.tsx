import LinkPreview from "./LinkPreview.tsx";

export default function TwitchLink() {
    return (
        <LinkPreview
            href="https://twitch.tv/kayxo_kayxo_"
            label="Twitch"
            bgColor="bg-purple-700"
            hoverColor="hover:bg-purple-800"
            previewContent={
                <p className="text-sm">Watch my Twitch streams live!</p>
            }
            hoverScale={1.1}
            defaultWidth="200px"
            defaultHeight="50px"
            hoverWidth="300px"
            hoverHeight="150px"
        />
    );
}
