import { use, useContext, userContext, useStae } from "react";
import { useNavigate } from "react-router-dom";
import { Authcontext } from  "../context/AuthContext";

const users = [
    { role: "admin", email: "admin@gmail.com", password: "admin1234" },
    { role: "customer", email: "customer@gmail.com", password: "customer1234" },
];

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const {login} = useContext(Authcontext);
    const navigate = useNavigate();
    const handleLogin = () => {
        const foundUser = users.find((u) => u.email === email && u.password) === password);
        if (!foundUser) {
            alert("Invalid credentials");
            return;
        }
        login(foundUser);
        if (foundUser.role === "admin") {
            navigate("/admin/dashboard");
        } else {
            navigate("/customers/dashboard");
        }
    };
    return (
        <div style={{ padding: "40px" }}>
            <h2>Login </h2>
            <input placeholder="Email" onChange={(e) =>
                setEmail(e.target.value)} />
                <br />
                <input
                placeholder="Password"
                type="password"
                onChange={(e) => setPassword(e.target.value)}
            />
            <br />
            <button onClick={handleLogin}>Login</button>
        </div>
    );


    };

export deault Login;