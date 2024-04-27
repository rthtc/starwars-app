import React from 'react'
import DataItem from '../DataItem'

const DataList = ({data, path}) => {
  return (
    <ul>
        {
            data.map((el, idx) => (
                <DataItem key={idx} dataObj={el} path={path} idx={idx}>
                    
                </DataItem>
            ))
        }
    </ul>
  )
}

export default DataList