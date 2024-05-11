import { MdOutlineLibraryAdd } from "react-icons/md";
import { Link } from "react-router-dom";

const MyQueries = () => {
    return (
        <div>
            <h2>My queries</h2>
            <div className="px-8 py-2 border bg-gray-700 dark:bg-gray-50 text-gray-100 dark:text-gray-800">
                <div className="flex items-center mx-auto container justify-center md:justify-between py-2">
                    <div>
                        <span>You can add your queries here!</span>
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