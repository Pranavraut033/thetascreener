// Login.tsx

const Login: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-indigo-100 to-purple-200">
      <div className="bg-white p-8 rounded-xl shadow-xl max-w-md w-full mx-4">
        <h1 className="text-3xl font-extrabold text-center text-indigo-600 mb-6">
          Welcome to Thetascreener
        </h1>
        <p className="text-center text-gray-600 mb-8">
          Please connect your wallet to continue
        </p>
        <div className="flex justify-center">
          {/* @ts-expect-error button declaration */}
          <appkit-connect-button />
        </div>
        <div className="mt-6 text-center">
          <a href="/help" className="text-sm text-indigo-500 hover:text-indigo-700 transition-colors">
            Need help connecting your wallet?
          </a>
        </div>
      </div>
    </div>
  )
}

export default Login