import { useEffect, useState } from "react";
import SingleQueries from "./SingleQueries";

const AllQueries = () => {
    const [queries, setQueries] = useState([]);

    const [queryLength, setQueryLength] = useState(false);

    const handleShowAll = () => {
        setQueryLength(!queryLength);
    }

    useEffect(()=>{
        fetch(`https://alternative-product-information-server.vercel.app/queries`)
        .then(res=>res.json())
        .then(data=> {
            setQueries(data)
        })
    },[])
    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    queries.slice(0, queryLength ? queries.length : 4).map(query => <SingleQueries key={query._id} query={query}></SingleQueries>)
                }
            </div>
            <div className="text-center">
                <button onClick={handleShowAll} className="btn btn-outline bg-[#023047] text-white my-4">
                    {!queryLength ? 'Show All' : 'Show Less'}
                </button>
            </div>
        </div>
    );
};

export default AllQueries;