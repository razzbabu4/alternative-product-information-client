import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { FcComments } from "react-icons/fc";
import { Link } from 'react-router-dom';

const SingleQueries = ({query}) => {
    const {_id, product_name, brand_name, product_image, query_title, boycotting_reason, userName, userImage, currentDate, recommendationCount} = query;

    const [recommendations, setRecommendations] = useState([]);

    const url = `https://alternative-product-information-server.vercel.app/recommendation?queryId=${_id}`
    useEffect(()=>{
        fetch(url)
        .then(res=> res.json())
        .then(data=> {
            setRecommendations(data)
        })
    },[url]);

    return (
        <div className="flex flex-col max-w-lg p-6 space-y-6 overflow-hidden rounded-lg shadow-lg border">
            <div className="flex space-x-4">
                <img alt="" src={userImage} className="object-cover w-12 h-12 rounded-full shadow" />
                <div className="flex flex-col space-y-1">
                    <a rel="noopener noreferrer" href="#" className="text-sm font-semibold">{userName}</a>
                    <span className="text-xs">{currentDate}</span>
                </div>
            </div>
            <div className='flex-grow space-y-2'>
                <img src={product_image} alt="" className="object-cover w-full mb-4 h-40 sm:h-60" />
                <h2 className="mb-1 text-xl font-semibold">{product_name}</h2>
                <small className='uppercase text-green-600 small'>{brand_name}</small>
                <h4><span className='font-medium mr-2'>Query Title :</span>{query_title}</h4>
                <p className="text-sm"><span className='mr-2'>Alternation Reason :</span>{boycotting_reason}</p>
            </div>
            <div className="flex flex-wrap justify-between items-center">
                <div className="space-x-2">
                    <p className='flex gap-2 items-center text-xl'><FcComments/> {recommendations?.length || recommendationCount}</p>
                </div>
                <div>
                   <Link to={`/queryDetails/${_id}`} className='btn btn-outline'>Recommend</Link>
                </div>
            </div>
        </div>
    );
};

SingleQueries.propTypes = {
    query : PropTypes.object
}

export default SingleQueries;