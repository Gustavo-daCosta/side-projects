import React, { useEffect, useState } from 'react';
import MainContent from '../../Components/MainContent/MainContent';
import Container from '../../Components/Container/Container';

const HomePage = () => {
    const [userPicture, setUserPicture] = useState("");
    const [username, setUsername] = useState("");

    useEffect(() => {
        loadUserData();
    });

    async function loadUserData() {
        try {
            
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <MainContent>
            <Container>
                <h1>Home Page</h1>
            </Container>
        </MainContent>
    );
}

export default HomePage;