import AuthGuard from '@/components/AuthGuard'

export default function DashboardPage() {
  return (
    <AuthGuard>
      <div className="min-h-screen bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
            <h1 className="text-3xl font-bold text-white mb-8">
              Dashboard
            </h1>
            
            <div className="bg-gray-800 rounded-lg shadow p-6">
              <h2 className="text-xl font-semibold text-white mb-4">
                Welcome to your dashboard!
              </h2>
              <p className="text-gray-300 mb-4">
                This is a protected page. You can only see this content if you're authenticated.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-gray-700 p-4 rounded-lg">
                  <h3 className="text-lg font-medium text-white mb-2">Feature 1</h3>
                  <p className="text-gray-400">Placeholder content for your first feature.</p>
                </div>
                <div className="bg-gray-700 p-4 rounded-lg">
                  <h3 className="text-lg font-medium text-white mb-2">Feature 2</h3>
                  <p className="text-gray-400">Placeholder content for your second feature.</p>
                </div>
                <div className="bg-gray-700 p-4 rounded-lg">
                  <h3 className="text-lg font-medium text-white mb-2">Feature 3</h3>
                  <p className="text-gray-400">Placeholder content for your third feature.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AuthGuard>
  )
} 