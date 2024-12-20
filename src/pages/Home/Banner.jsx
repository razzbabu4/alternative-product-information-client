import { Link } from "react-router-dom";


const Banner = () => {
    return (
        <div className="p-6 py-12 bg-violet-400 dark:bg-[#219ebc] text-gray-900 dark:text-gray-50 my-6 max-w-7xl mx-auto mb-20">
            <div className="container mx-auto">
                <div className="flex flex-col lg:flex-row items-center justify-between">
                    <h2 className="text-center text-5xl tracking-tighter font-bold">Find Your Best
                        <br className="sm:hidden" /> Products!
                    </h2>
                    <div className="space-x-2 text-center py-2 lg:py-0">
                        <span>Plus free shipping! Use code:</span>
                        <span className="font-bold text-lg">SEEKER</span>
                    </div>
                    <Link to='/allQueries' rel="noreferrer noopener" className="px-5 mt-4 lg:mt-0 py-3 rounded-md border block bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-50 border-gray-400 dark:border-gray-600">All Queries</Link>
                </div>
            </div>
        </div>
    );
};

export default Banner;