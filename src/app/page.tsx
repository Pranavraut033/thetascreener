import WithLogin from "@/components/WithLogin";

export default function Home() {
  return (
    <WithLogin>
      <div className="min-h-screen bg-gray-100">
        <header className="bg-white shadow-md p-4">
          <div className="container mx-auto flex justify-between items-center">
            <div className="text-xl font-bold text-gray-800">
              My Dashboard
            </div>
            <div className="flex items-center space-x-3">
              {/* @ts-expect-error button declaration */}
              <appkit-network-button />
              {/* @ts-expect-error button declaration */}
              <appkit-account-button />
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="container mx-auto mt-8">
          <h1 className="text-2xl font-semibold mb-4">Welcome to Your Dashboard</h1>
          <p>This is a dummy dashboard page.</p>
          {/* Add more dashboard content here */}
        </main>
      </div>

    </WithLogin>
  );
}
