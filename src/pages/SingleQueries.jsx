import PropTypes from 'prop-types';
import { FcComments } from "react-icons/fc";

const SingleQueries = ({query
}) => {
    const {product_name, brand_name, product_image, query_title, boycotting_reason, userEmail, userName, userImage, currentDate, recommendationCount} = query;
    return (
        <div className="flex flex-col max-w-lg p-6 space-y-6 overflow-hidden rounded-lg shadow-md bg-gray-900 dark:bg-gray-50 text-gray-100 dark:text-gray-800">
            <div className="flex space-x-4">
                <img alt="" src={userImage} className="object-cover w-12 h-12 rounded-full shadow bg-gray-500 dark:bg-gray-500" />
                <div className="flex flex-col space-y-1">
                    <a rel="noopener noreferrer" href="#" className="text-sm font-semibold">{userName}</a>
                    <span className="text-xs text-gray-400 dark:text-gray-600">{currentDate}</span>
                </div>
            </div>
            <div className='flex-grow space-y-2'>
                <img src="https://source.unsplash.com/random/100x100/?5" alt="" className="object-cover w-full mb-4 h-40 sm:h-60 bg-gray-500 dark:bg-gray-500" />
                <h2 className="mb-1 text-xl font-semibold">{product_name}</h2>
                <small className='uppercase text-green-600 small'>{brand_name}</small>
                <h4><span className='font-medium mr-2'>Query Title :</span>{query_title}</h4>
                <p className="text-sm text-gray-400 dark:text-gray-600"><span className='mr-2'>Alternation Reason :</span>{boycotting_reason}</p>
            </div>
            <div className="flex flex-wrap justify-between items-center">
                <div className="space-x-2">
                    <p className='flex gap-2 items-center'><FcComments/> {recommendationCount}</p>
                </div>
                <div>
                   <button className='btn btn-outline'>Recommendation</button>
                </div>
            </div>
        </div>
    );
};

SingleQueries.propTypes = {
    query : PropTypes.object
}

export default SingleQueries;