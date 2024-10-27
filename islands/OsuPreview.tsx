import LinkPreview from "./LinkPreview.tsx";

export default function OsuLink() {
    return (
        <LinkPreview
            href="https://osu.ppy.sh/users/16219419"
            label="osu!"
            bgColor="bg-pink-400"
            hoverColor="hover:bg-pink-600"
            previewContent={
                <p className="text-sm">Check out my osu! profile and scores!</p>
            }
            hoverScale={1.1}
            defaultWidth="200px"
            defaultHeight="50px"
            hoverWidth="500px"
            hoverHeight="500px"
        />
    );
}
