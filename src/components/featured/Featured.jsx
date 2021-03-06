import React, { useContext } from 'react'
import useFetch from '../../hooks/useFetch.js';
import "./featured.css";
import arta from "../pictures/arta.png"
import athina from "../pictures/athens.png"
import chania from "../pictures/chania.png"
import nafplio from "../pictures/nafplio.png"
import { useNavigate } from 'react-router-dom';
import { SearchContext } from '../../context/SearchContext.jsx';

const Featured = () => {

    const { data, loading, error } = useFetch("/api/hotels/countByCity?cities=arta,athens,giannena,nafplio")
    const navigate = useNavigate();
    const { dispatch } = useContext(SearchContext)

    // const handleClick = () => {
    //     dispatch({ type: "NEW_SEARCH", payload: { arta, dates, options } })
    //     navigate("/hotels", { state: { arta, dates, options } });
    // }


    return (
        <div className="featured">
            {loading ? ("Loading please wait") : (
                <>
                    <div className="featuredItem">
                        <img  src={arta} alt="" className='featuredImg' />
                        <div className="featuredTitles">
                            <h1>Arta</h1>
                            <h2>{data[0]} Properties</h2>
                        </div>
                    </div>
                    <div className="featuredItem">
                        <img src={athina} alt="" className='featuredImg' />
                        <div className="featuredTitles">
                            <h1>Athens</h1>
                            <h2>{data[1]} Properties</h2>
                        </div>
                    </div>
                    <div className="featuredItem">
                        <img src={chania} alt="" className='featuredImg' />
                        <div className="featuredTitles">
                            <h1>Giannena</h1>
                            <h2>{data[2]} Properties</h2>
                        </div>
                    </div>
                    <div className="featuredItem">
                        <img src={nafplio} alt="" className='featuredImg' />
                        <div className="featuredTitles">
                            <h1>Nafplio</h1>
                            <h2>{data[3]} Properties</h2>
                        </div>
                    </div></>)}
        </div>
    )
}

export default Featured