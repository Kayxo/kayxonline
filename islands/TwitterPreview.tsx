import LinkPreview from "./LinkPreview.tsx";

export default function TwitterLink() {
    return (
        <LinkPreview
            href="https://twitter.com/kayxo_kayxo_"
            label="Twitter"
            bgColor="bg-blue-500"
            hoverColor="hover:bg-blue-600"
            previewContent={
                <p className="text-sm">Follow me on Twitter for updates!</p>
            }
            hoverScale={1.1}
            defaultWidth="200px"
            defaultHeight="50px"
            hoverWidth="280px"
            hoverHeight="100px"
        />
    );
}
