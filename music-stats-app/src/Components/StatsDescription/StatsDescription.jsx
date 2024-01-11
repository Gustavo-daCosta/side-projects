import React from 'react';
import './StatsDescription.css';

const StatsDescription = ( { title, top3 } ) => {
    return (
        <>
            <article className="description">
                <div className="description__text">
                    <h1>Os seus 20 {title} mais ouvidos de 2023!</h1>
                    <p>Parece que você realmente é um fã de {top3[0]}, {top3[1]} e {top3[2]}!</p>
                </div>
                <div className="description__share">
                    <div className="check-button">
                        <input type="checkbox" name="tag-presence" id="tag-presence" checked />
                        <label htmlFor="tag-presence">Mostrar posição?</label>
                    </div>
                    <button>
                        <img src="../../assets/icons/download-icon.png" alt="" />
                        Baixar
                    </button>
                </div>
            </article>
        </>
    );
};

export default StatsDescription;