import DataList from '../../components/DataList'
import { useSelector } from 'react-redux'
import { setError } from '../../store/planets/planetsSlice'
import DataCard from '../../components/DataCard/DataCard'
import { useGetData } from '../../hooks/useGetData'

const Planets = () => {
    const { data, prevBtnLink, nextBtnLink, cardData,isLoading, btnClickHandle } = useGetData('planets', setError)
    const planetsError = useSelector((s) => s.planets.error)
    return (
        <div className='container-pages'>
            {
                isLoading ? <div className="loading-animation"></div> : (
                    <div className='list'>
                        {planetsError ? <>Something go wrong! Try later!</> : <DataList data={data} path='planets' />}
                        <div className="btns">
                            {prevBtnLink && <button className='btn' onClick={(e) => btnClickHandle(e)} value='prev'>Prev</button>}
                            {nextBtnLink && <button className='btn' onClick={(e) => btnClickHandle(e)} value='next'>Next</button>}
                        </div>
                    </div>
                )
            }

            {<DataCard data={cardData} />}
        </div>
    )
}

export default Planets