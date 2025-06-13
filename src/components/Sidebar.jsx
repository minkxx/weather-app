const Sidebar = () => {
  return (
    <div className="w-20 bg-slate-800 flex flex-col items-center py-6">
      <div className="mb-8">
        {/* Weather app logo/icon */}
        <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-500 rounded-lg flex items-center justify-center">
          <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
