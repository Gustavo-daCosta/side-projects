import React from 'react';
import './CoverTable.css';

const CoverTable = ({data}) => {
    function renderRow(initialIndex, finalIndex) {
        let row = [];
        for (let index = initialIndex; index <= finalIndex; index++) {
            row.push(
                <td>
                    <img src={data[index].image[2]['#text']} alt=""/>
                    <div className="position-tag">#{data[index]['@attr'].rank}</div>
                </td>
            );
        }
        console.log(row);
        return row;
    }

    return (
        <>
            <table cellSpacing={0}>
                <tbody>
                    <tr>{renderRow(0, 3)}</tr>
                    <tr>{renderRow(4, 7)}</tr>
                    <tr>{renderRow(8, 11)}</tr>
                    <tr>{renderRow(12, 15)}</tr>
                    <tr>{renderRow(16, 19)}</tr>
                </tbody>
            </table>
        </>
    );
};

export default CoverTable;