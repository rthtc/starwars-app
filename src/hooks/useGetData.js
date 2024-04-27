import {useState, useEffect} from 'react'
import { useDispatch } from 'react-redux'
import axios from 'axios'
import { useParams } from 'react-router-dom'


export const useGetData = (path, errHandle) => {
    const [data, setCharacters] = useState([])
    const [prevBtnLink, setPrevBtnLink] = useState('')
    const [nextBtnLink, setNextBtnLink] = useState('')
    const [cardData, setCardData] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const dispatch = useDispatch()
    const {num} = useParams()

    useEffect(() => {
        num && setCardData(data.find((obj, indx) => indx === +num))
    }, [num])
    
    useEffect(() => {
        axios(`https://swapi-node.now.sh/api/${path}?page=1`)
            .then(({ data }) => {
                setCharacters(data.results)
                setPrevBtnLink(data.previous)
                setNextBtnLink(data.next)
            })
            .catch(err => dispatch(errHandle()))
            .finally(() => setIsLoading(false))
    }, [])
    const btnClickHandle = (e) => { 
        axios(`https://swapi-node.now.sh${e.target.value === "prev" ? prevBtnLink : nextBtnLink}`)
            .then(({ data }) => {
                setCharacters(data.results)
                setPrevBtnLink(data.previous)
                setNextBtnLink(data.next)
            })
    }
    return {data, prevBtnLink, nextBtnLink, cardData, btnClickHandle, isLoading}
}