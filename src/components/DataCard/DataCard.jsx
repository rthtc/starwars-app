
import { useEffect, useState } from 'react'

const DataCard = ({data}) => {
    useEffect(() => {
        localStorage.setItem('dataObj', JSON.stringify(data))
    })
    return ( 
        <>
            {data && (
                <div className='info'>
                    <div className="info-conatiner">
                    <p>Name: {data?.fields.name || data?.fields.starship_class}</p>
                    <p>
                        {typeof data?.fields.gender === 'string' ? 'Gender: ' + data?.fields.gender : ''}
                        {typeof data?.fields.MGLT === 'string' ? 'MGLT: ' + data?.fields.MGLT : ''}
                        {typeof data?.fields.climate === 'string' ? 'Climate: ' + data?.fields.climate : ''}
                    </p>
                    <p>
                        {typeof data?.fields.height === 'string' ? 'Height: ' + data?.fields.height + ' cm' : ''}
                        {typeof data?.fields.hyperdrive_rating === 'string' ? 'Hyperdrive rating: ' + data?.fields.hyperdrive_rating : ''}
                        {typeof data?.fields.orbital_period === 'string' ? 'Orbital period: ' + data?.fields.orpital_period : ''}
                    </p>
                    <p>
                        {typeof data?.fields.mass === 'string' ? 'Mass: ' + data?.fields.mass + ' kg' : ''}
                        {typeof data?.fields.terrain === 'string' ? 'Terrain: ' + data?.fields.terrain : ''}
                    </p>
                </div>
                </div>
            )}
        </>
    )
}

export default DataCard