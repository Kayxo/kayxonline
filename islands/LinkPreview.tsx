import { useSignal } from "@preact/signals";
import { JSX } from "preact";

interface LinkPreviewProps {
    href: string;
    label: string;
    bgColor: string;
    hoverColor: string;
    previewContent: JSX.Element;
    hoverScale: number;
    defaultWidth: string;
    defaultHeight: string;
    hoverWidth: string;
    hoverHeight: string;
}

export default function LinkPreview({
    href,
    label,
    bgColor,
    hoverColor,
    previewContent,
    hoverScale,
    defaultWidth,
    defaultHeight,
    hoverWidth,
    hoverHeight,
}: LinkPreviewProps) {
    const isHovered = useSignal(false);

    return (
        <div
            className="flex justify-center transition-all duration-300 ease-in-out"
            style={{
                margin: isHovered.value ? "1.5rem" : "0.5rem", // Default margin, increases on hover
            }}
        >
            <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={`relative ${bgColor} ${hoverColor} text-white rounded text-center shadow-lg transform transition-all duration-300 ease-in-out`}
                style={{
                    transform: isHovered.value
                        ? `scale(${hoverScale})`
                        : "scale(1)",
                    width: isHovered.value ? hoverWidth : defaultWidth,
                    height: isHovered.value ? hoverHeight : defaultHeight,
                }}
                onMouseEnter={() => (isHovered.value = true)}
                onMouseLeave={() => (isHovered.value = false)}
            >
                <span className="block text-xl font-bold p-4">{label}</span>
                {isHovered.value && (
                    <div className="absolute inset-0 flex items-center justify-center bg-opacity-80 bg-gray-900 p-4 rounded transition-opacity duration-300 ease-in-out">
                        {previewContent}
                    </div>
                )}
            </a>
        </div>
    );
}
