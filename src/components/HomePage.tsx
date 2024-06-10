import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthProvider";
import { useEffect } from "react";

const HomePage: React.FC = () => {
    const navigate = useNavigate();
    const { user } = useAuth();

    useEffect(() => {
        //fix it so user only has to click login once
        if (!user) {
            navigate('/landing')
        }
    }, [user, navigate]);

    return (
        <p>chat page</p>
    )
}

export default HomePage;