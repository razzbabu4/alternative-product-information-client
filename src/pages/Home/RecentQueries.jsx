import AllQueries from "../AllQueries";

const RecentQueries = () => {
    return (
        <div className="my-4 md:my-8">
            <h1 className='text-3xl font-medium text-center my-6'>Recent Queries</h1>
            <AllQueries/>
        </div>
    );
};

export default RecentQueries;