import { useLoaderData } from 'react-router-dom';

const QueryDetails = () => {
    const queries = useLoaderData();
    return (
        <div>
            <h2>Query Details: {queries.product_name}</h2>
        </div>
    );
};

export default QueryDetails;