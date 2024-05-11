import { useEffect, useState } from "react";
import { MdOutlineLibraryAdd } from "react-icons/md";
import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const MyQueries = () => {
    const {user} = useAuth();
    const [myQuery, setMyQuery] = useState([])

    const url = `http://localhost:5000/queries?userEmail=${user?.email}`
    useEffect(()=>{
         fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setMyQuery(data)
            })
    },[url]);
    return (
        <div>
            <h2>My queries : {myQuery.length}</h2>
            <div className="px-8 py-2 border bg-gray-700 dark:bg-gray-50 text-gray-100 dark:text-gray-800">
                <div className="flex items-center mx-auto container justify-center md:justify-between py-2">
                    <div>
                        <span>You can add your queries here! </span>
                    </div>
                    <Link to='/addQueries' href="#" rel="noopener noreferrer" className="items-center gap-2 hidden md:flex">
                        <MdOutlineLibraryAdd></MdOutlineLibraryAdd>
                        <span className="hover:underline focus-visible:underline">Add Queries</span>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default MyQueries;