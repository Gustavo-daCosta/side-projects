import React, { useEffect, useState } from 'react';
import MainContent from '../../Components/MainContent/MainContent';
import Container from '../../Components/Container/Container';
import CoverTable from '../../Components/CoverTable/CoverTable';
import StatsDescription from '../../Components/StatsDescription/StatsDescription';
import './StatsPage.css';
import api from '../../Services/Service';

const StatsPage = () => {
    const [albumsData, setAlbumsData] = useState();
    // const [tracksData, setTracksData] = useState();

    useEffect(() => {
        loadAlbuns();
    }, [albumsData]);

    async function loadAlbuns() {
        try {
            const promise = await api.get(`https://ws.audioscrobbler.com/2.0/?method=user.gettopalbums&user=gutineos&period=12month&limit=20&api_key=${process.env.REACT_APP_API_KEY}&format=json`);
            setAlbumsData(promise.data.topalbums.album);
        } catch (error) {
            console.log(error);
        }
    }

    // async function loadTracks() {
    //     try {
    //         const promise = await api.get(`https://ws.audioscrobbler.com/2.0/?method=user.gettoptracks&user=gutineos&period=12month&limit=20&api_key=${process.env.REACT_APP_API_KEY}&format=json`);
    //         console.log(promise.data);
    //         setTracksData(promise.data.toptracks.track);
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }

    return(
        <MainContent>
            <section id='artists'>
                <Container>
                    <div className="section-flex">
                        <CoverTable data={albumsData}/>
                        <StatsDescription title="artistas" top3={["tchungflais", "estragabofe", "xexelento"]} />
                    </div>
                </Container>
            </section>
            <section id='albums' className='invert'>
                <Container>
                    <div className="section-flex">
                        <StatsDescription
                            title="álbuns"
                            top3={[
                                albumsData[0].artist.name,
                                albumsData[1].artist.name,
                                albumsData[2].artist.name,
                            ]}
                        />
                        <CoverTable data={albumsData}/>
                    </div>
                </Container>
            </section>
            <section id='tracks'>
                <Container>
                    <div className="section-flex">
                        <CoverTable data={albumsData}/>
                        <StatsDescription
                            title="músicas"
                            top3={["tchungflais", "estragabofe", "xexelento"]}
                        />
                    </div>
                </Container>
            </section>
        </MainContent>
    );
}

export default StatsPage;