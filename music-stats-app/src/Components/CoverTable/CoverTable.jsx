import React from 'react';

const CoverTable = (data) => {
    function renderRow(initialIndex, finalIndex) {
        for (let index = initialIndex; index < finalIndex; index++) {
            return (
                <td>
                    <img src="../../assets/covers/cover-1.jpg" alt=""/>
                    <div class="position-tag">{index + 1}</div>
                </td>
            );
        }
    }

    return (
        <>
            <table cellSpacing={0}>
                <tr>{renderRow}</tr>
                <tr>{renderRow}</tr>
                <tr>{renderRow}</tr>
                <tr>{renderRow}</tr>
                <tr>{renderRow}</tr>
            </table>
        </>
    );
};

export default CoverTable;