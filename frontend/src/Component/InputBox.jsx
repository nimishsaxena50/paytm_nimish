export const InputBox = ({ title, placeholder, onChange, type = "text" }) => {
    return (
        <div className="flex flex-col text-left py-2">
            <label className="text-sm font-medium pb-1">{title}</label>
            <input
                onChange={onChange}
                type={type}
                placeholder={placeholder}
                className="border p-2 rounded w-full"
            />
        </div>
    );
};
