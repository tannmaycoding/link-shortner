export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="max-w-2xl w-full bg-white shadow-lg rounded-2xl p-8">
        
        <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">
          Link Shortener
        </h1>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-700 mb-3">
            Why is it Needed?
          </h2>

          <ul className="space-y-2 text-gray-600">
            <li className="flex items-start gap-2">
              <span className="font-bold text-blue-500">1.</span>
              Links can sometimes be very long.
            </li>

            <li className="flex items-start gap-2">
              <span className="font-bold text-blue-500">2.</span>
              Long URLs may look messy or hard to share.
            </li>

            <li className="flex items-start gap-2">
              <span className="font-bold text-blue-500">3.</span>
              Shortened links make them clean and compact.
            </li>
          </ul>
        </section>

        <section className="border-t pt-5">
          <h2 className="text-2xl font-semibold text-gray-700 mb-2">
            How to Access
          </h2>

          <p className="text-gray-600">
            Click the <span className="font-semibold text-blue-600">"Shorten Links"</span> 
            button in the navigation bar above to create your shortened link.
          </p>
        </section>

      </div>
    </div>
  );
}