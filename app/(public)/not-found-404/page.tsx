import Link from "next/link";
import { TbError404 } from "react-icons/tb";

export default function NotFound404() {
  return (
    <main className="flex items-center justify-center h-screen max-h-[calc(100vh-4rem)]">
      <div className="text-center py-12 px-20 bg-b-section-2 text-t-dark-main rounded-lg shadow-lg">
        <TbError404 className="w-full text-8xl mb-6" />
        <h1 className="text-4xl font-bold mb-4">Page Not Found</h1>
        <p className="text-xl mb-6">
          Sorry, the page you are looking for doesn’t exist.
        </p>
        <Link
          href="/"
          className="inline-block bg-btn-primary text-btn-text px-6 py-2 rounded-lg hover:bg-btn-hover transition duration-300"
        >
          Go Back Home
        </Link>
      </div>
    </main>
  );
}