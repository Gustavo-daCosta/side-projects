import React, { useEffect, useState } from 'react';
import MainContent from '../../Components/MainContent/MainContent';
import Container from '../../Components/Container/Container';
import albumsData from '../../Utils/TemporaryData';
import CoverTable from '../../Components/CoverTable/CoverTable';
import StatsDescription from '../../Components/StatsDescription/StatsDescription';
import './StatsPage.css';
// import api from '../../Services/Service';

const StatsPage = () => {
    // const [albumsData, setAlbumsData] = useState();
    // useEffect(() => {
    //     loadAlbuns();
    // }, [albumsData]);

    // async function loadAlbuns() {
    //     try {
    //         const promise = await api.get(`method=user.gettopalbums&user=gutineos&period=12month&limit=20&api_key=${process.env.REACT_APP_API_KEY}&format=json`);
    //         setAlbumsData(promise.data.topalbums);
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }

    return(
        <MainContent>
            <Container>
                <section id='artists' className='artists'>
                    <CoverTable data={albumsData.topalbums.album}/>
                    <StatsDescription title="artistas" top3={["tchungflais", "estragabofe", "xexelento"]} />
                </section>
                <section id='albums' className='albums'></section>
                <section id='tracks' className='tracks'></section>
            </Container>
        </MainContent>
    );
}

export default StatsPage;