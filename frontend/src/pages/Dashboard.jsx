// Dashboard.jsx
import { AppBar } from "../Component/AppBar";
import { Button } from "../Component/Button";
import { Balance } from "../Component/Balance";
import { InputBox } from "../Component/InputBox";

export const Dashboard = () => {
    return (
        <div>
            <AppBar />
            <Balance label="1000" />
            <InputBox title="Search your friends" placeholder="Search contact..." />
            <div className="flex justify-between items-center mt-4">
                <div>Nimish Saxena</div>
                <Button label="Send Money" onClick={() => {}} />
            </div>
        </div>
    );
}
