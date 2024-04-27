import React from 'react';
import DataList from '../../components/DataList';
import { useSelector } from 'react-redux';
import { setError } from '../../store/characters/charactersSlice';
import DataCard from '../../components/DataCard/DataCard';
import { useGetData } from '../../hooks/useGetData';
import '../../index.css'

const Characters = () => {
    const { data, prevBtnLink, nextBtnLink, cardData, isLoading, btnClickHandle } = useGetData('people', setError);
    const charactersError = useSelector((s) => s.planets.error);

    return (
        <div className='container-pages'>
            {isLoading ? (
                <div className="loading-animation"></div>
            ) : (
                <div className='list'>
                    {charactersError ? <>Something go wrong! Try later!</> : <DataList data={data} path='characters' />}
                    <div className='btns'>
                        {prevBtnLink && <button className='btn' onClick={(e) => btnClickHandle(e)} value='prev'>Prev</button>}
                        {nextBtnLink && <button className='btn' onClick={(e) => btnClickHandle(e)} value='next'>Next</button>}
                    </div>
                </div>
            )}

            {localStorage.getItem('dataObj') !== null ? <DataCard data={cardData} /> : <></>}
        </div>
    );
}

export default Characters;
