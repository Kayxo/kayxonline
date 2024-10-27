import { useSignal } from "@preact/signals";
import { useEffect } from "preact/hooks";

export default function DarkModeToggle() {
    // Initialize with device preference if no saved preference in localStorage
    const isDark = useSignal(
        localStorage.getItem("dark-mode") === "true" ||
            (!localStorage.getItem("dark-mode") &&
                typeof window !== "undefined" && // Ensure we are in a browser environment
                globalThis.matchMedia("(prefers-color-scheme: dark)").matches),
    );

    useEffect(() => {
        const html = document.documentElement;
        if (isDark.value) {
            html.classList.add("dark");
        } else {
            html.classList.remove("dark");
        }
    }, [isDark.value]);

    const toggleDarkMode = () => {
        isDark.value = !isDark.value;
        if (isDark.value) {
            document.documentElement.classList.add("dark");
            localStorage.setItem("dark-mode", "true");
        } else {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("dark-mode", "false");
        }
    };

    return (
        <div className="toggle-container">
            <input
                id="toggle"
                className="toggle"
                type="checkbox"
                checked={isDark.value}
                onChange={toggleDarkMode}
            />
        </div>
    );
}
