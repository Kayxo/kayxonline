import DarkModeToggle from "../islands/DarkModeToggle.tsx";

export default function Navbar() {
  return (
    <header className="w-full bg-gray-800 dark:bg-gray-900 p-4 relative">
      <div className="flex items-center justify-between h-16">
        <a href="/" className="relative inline-block text-lg group">
          <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 dark:text-gray-200 transition-colors duration-300 ease-out border-2 border-gray-900 dark:border-gray-200 rounded-lg group-hover:text-white dark:group-hover:text-gray-900">
            <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50 dark:bg-gray-800" />
            <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 dark:bg-gray-200 group-hover:-rotate-180 ease" />
            <span className="relative font-bold">Kayxo_</span>
          </span>
          <span
            className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 dark:bg-gray-200 rounded-lg group-hover:mb-0 group-hover:mr-0"
            data-rounded="rounded-lg"
          />
        </a>
        {/* Dark Mode Toggle */}
        <DarkModeToggle />
      </div>
    </header>
  );
}
