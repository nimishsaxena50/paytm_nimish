export const Balance = ({ label }) => {
    return (
        <div className="bg-gray-400 text-black mt-10 h-10 flex justify-between">
            <div>Your account balance is {label}</div>
        </div>
    );
};