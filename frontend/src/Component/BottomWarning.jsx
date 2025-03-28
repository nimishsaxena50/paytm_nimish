import { Link } from "react-router-dom";
export function BottomWarning({ label, buttontext, to }) {
    return (
        <div className="rounded-lg border border-gray-500 w-50 flex justify-center font-medium">
            <div className="pd-2 text-sm">
                <div>{label}</div>
                <Link className="underline cursor-pointer text-blue-900" to={to}>
                    {buttontext}
                </Link>
            </div>
        </div>
    );
}