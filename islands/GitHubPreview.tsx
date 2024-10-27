import LinkPreview from "./LinkPreview.tsx";

export default function GitHubLink() {
    return (
        <LinkPreview
            href="https://github.com/kayxo"
            label="GitHub"
            bgColor="bg-gray-900"
            hoverColor="hover:bg-gray-800"
            previewContent={
                <p className="text-sm">Explore my projects on GitHub!</p>
            }
            hoverScale={1.1}
            defaultWidth="200px"
            defaultHeight="50px"
            hoverWidth="260px"
            hoverHeight="130px"
        />
    );
}
