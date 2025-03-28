export const AppBar = () => {
    return (
        <div className="bg-blue-600 text-white p-4 shadow-md flex items-center justify-between">
            <div className="flex flex-col h-full ml-4">
                <h1 className="text-xl font-semibold">Paytm</h1>
            </div>
            <div className="flex items-center">
                <div className="flex flex-col h-full mr-2">
                    <span className="text-sm">Welcome, User</span>
                </div>
                <div className="rounded-full h-12 w-12 bg-slate-200 flex items-center justify-center">
                    <span className="text-blue-600 font-bold">U</span>
                </div>
            </div>
        </div>
    );
};