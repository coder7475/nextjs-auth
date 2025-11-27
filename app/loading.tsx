export default function Loading() {
  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-gray-50">
      <div className="flex flex-col items-center gap-4">
        {/* Loading Spinner */}
        <div className="h-12 w-12 animate-spin rounded-full border-4 border-gray-200 border-t-blue-600" />
        
        {/* Loading Text */}
        <p className="text-sm font-medium text-gray-500 animate-pulse">
          Loading content...
        </p>
      </div>
    </div>
  );
}
