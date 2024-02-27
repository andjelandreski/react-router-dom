import { useParams, useNavigate } from "react-router-dom";
import { UsersContext } from "../context/UserContext";
import { useContext, useEffect, useState } from "react";

const UserItem = () => {
    const {userId} = useParams();
    const {users} = useContext(UsersContext);
    const [user, setUser] = useState(undefined);

    const navigate = useNavigate();

    const handleHomeButton = () => {
        navigate("/");
    };

    const handleBackButton = () => {
        navigate(-1);
    };

    useEffect(() => {
        const user = users.find((user) => user.id === parseInt(userId));
        setUser(user);
    }, []);

    return (
        <>
            <h1>User item</h1>
            <button onClick={handleHomeButton}>Home</button>
            <button onClick={handleBackButton}>Back</button>
            <div>
                <p>name: {user.name}</p>
                <p>email: {user.email}</p>
                <p>website: {user.website}</p>
            </div>

        </>
    );
};

export default UserItem;