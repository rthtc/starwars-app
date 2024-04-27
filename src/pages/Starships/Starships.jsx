
import DataList from '../../components/DataList'
import { setError } from '../../store/starships/starshipsSlice'
import { useSelector, useDispatch } from 'react-redux'
import DataCard from '../../components/DataCard/DataCard'
import { useGetData } from '../../hooks/useGetData'

const Starships = () => {
    const { data, prevBtnLink, nextBtnLink, cardData, isLoading, btnClickHandle } = useGetData('starships', setError)
    const starshipsError = useSelector((s) => s.starships.error)

    return (
        <div className='container-pages'>
            {isLoading ? <div className="loading-animation"></div> : (
                <div className='list'>
                    {starshipsError ? <>Something go wrong! Try later!</> : <DataList data={data} path='starships' />}
                    <div className="btns">
                        {prevBtnLink && <button className='btn' onClick={(e) => btnClickHandle(e)} value='prev'>Prev</button>}
                        {nextBtnLink && <button className='btn' onClick={(e) => btnClickHandle(e)} value='next'>Next</button>}
                    </div>
                </div>
            )}

            {localStorage.getItem('dataObj') !== null ? <DataCard data={cardData} /> : <></>}
        </div>
    )
}


export default Starships