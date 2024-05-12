import { useEffect, useState } from "react";
import SingleQueries from "./SingleQueries";

const AllQueries = () => {
    const [queries, setQueries] = useState([]);

    useEffect(()=>{
        fetch(`http://localhost:5000/queries`)
        .then(res=>res.json())
        .then(data=> {
            setQueries(data)
        })
    },[])
    return (
        <div>
            <h2>All queries : {queries.length}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    queries.map(query => <SingleQueries key={query._id} query={query}></SingleQueries>)
                }
            </div>
        </div>
    );
};

export default AllQueries;