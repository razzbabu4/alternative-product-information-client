import { useEffect, useState } from "react";
import SingleQueries from "./SingleQueries";

const AllQueries = () => {
    const [queries, setQueries] = useState([]);
    const [searchAllProduct, setSearchAllProduct] = useState([]);
    const [searchValue, setSearchValue] = useState('');

    const [columns, setColumns] = useState('');

    const handleLayoutChange = (col) => {
        if (!col) {
            setColumns('')
        }
        else {
            setColumns(`grid-cols-${col}`);
        }
    }

    const handleSearch = () => {
        fetch(`https://alternative-product-information-server.vercel.app/searchProduct/${searchValue}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setSearchAllProduct(data)
            })

        console.log(searchValue)
    }

    useEffect(() => {
        fetch(`https://alternative-product-information-server.vercel.app/queries`)
            .then(res => res.json())
            .then(data => {
                const foundProduct = searchAllProduct.map(p => p.product_name)
                const matchedProduct = data.filter(p => foundProduct.includes(p.product_name))
                setQueries(searchAllProduct.length > 0 ? matchedProduct : data)
            })
    }, [searchAllProduct])

    return (
        <div>
            <div className="flex flex-col gap-4 items-center justify-between my-6 lg:flex-row">
                <div className="flex gap-2">
                    <label className="input input-bordered flex items-center gap-2">
                        <input type="text"
                            value={searchValue}
                            onChange={e => setSearchValue(e.target.value)}
                            className="grow"
                            placeholder="Search" />
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
                    </label>
                    <button onClick={handleSearch} className="btn btn-accent">Search</button>
                </div>
                <div className="dropdown dropdown-hover dropdown-bottom lg:dropdown-end">
                    <div tabIndex={0} role="button" className="btn m-1">Layout view</div>
                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52 flex ">
                        <button className="btn mb-1 bg-slate-300" onClick={() => handleLayoutChange(1)}>One columns</button>
                        <button className="btn mb-1 bg-slate-300" onClick={() => handleLayoutChange(2)}>Two columns</button>
                        <button className="btn mb-1 bg-slate-300" onClick={() => handleLayoutChange(3)}>Three columns</button>
                    </ul>
                </div>
            </div>
            <div className={`grid grid-cols-1 ${columns || 'md:grid-cols-2 lg:grid-cols-3'}  gap-6`}>
                {
                    queries.map(query => <SingleQueries key={query._id} query={query}></SingleQueries>)
                }
            </div>
        </div>
    );
};

export default AllQueries;