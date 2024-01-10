import React, { useEffect, useState } from 'react';
import MainContent from '../../Components/MainContent/MainContent';
import Container from '../../Components/Container/Container';
import api from '../../Services/Service';

const HomePage = () => {
    const [userPicture, setUserPicture] = useState("");
    const [username, setUsername] = useState("");
    const [playCount, setPlayCount] = useState(0);

    useEffect(() => {
        loadUserData();
    }, [username]);

    async function loadUserData() {
        try {
            const promise = (await api.get(`/?method=user.getinfo&user=gutineos&api_key=${process.env.REACT_APP_API_KEY}&format=json`)).data.user;
            setUsername(promise.name);
            setUserPicture(promise.image[2]['#text']);
            setPlayCount(parseInt(promise.playcount));
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <MainContent>
            <Container>
                <h1>Home Page</h1>
                <div className="card">
                    <img src={userPicture} alt="" width="50px" />
                    <p>{username}</p>
                    <p>Scrobbles: {playCount}</p>
                </div>
            </Container>
        </MainContent>
    );
}

export default HomePage;