import useAuth from "../hooks/useAuth";

const AddQueries = () => {
    const {user} = useAuth();
    
    const handleAddQueries = e => {
        e.preventDefault();
        const form = e.target;
        const product_name = form.product_name.value;
        const brand_name = form.brand_name.value;
        const product_image = form.product_image.value;
        const query_title = form.query_title.value;
        const boycotting_reason = form.boycotting_reason.value;

        const userEmail = user?.email;
        const userName = user?.displayName;
        const userImage = user?.photoURL;
        const currentDate = new Date(Date.now());
        const  recommendationCount = 0;

        const newQuery = {product_name, brand_name, product_image, query_title, boycotting_reason, userEmail, userName, userImage, currentDate, recommendationCount};
        console.log(newQuery)

        // data send to server
        fetch(`http://localhost:5000/queries`, {
            method: 'POST',
            headers: {'content-type':'application/json'},
            body: JSON.stringify(newQuery)
        })
        .then(res=> res.json())
        .then(data=> {
            console.log(data)
        })
    }
    return (
        <div className="max-w-7xl mx-auto p-4 md:p-10 rounded-md">
                <h1 className="text-center text-3xl">Add New Queries</h1>
            <form onSubmit={handleAddQueries} className="card-body">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Product Name</span>
                        </label>
                        <input type="text" name="product_name" placeholder="Product Name" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Product Brand</span>
                        </label>
                        <input type="text" name="brand_name" placeholder="Product Brand" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Product Image-URL</span>
                        </label>
                        <input type="text" name="product_image" placeholder="Product Image-URL" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Query Title</span>
                        </label>
                        <input type="text" name="query_title" placeholder="Query" className="input input-bordered" />
                    </div>
                    <div className="form-control md:col-span-2">
                        <label className="label">
                            <span className="label-text">Boycotting Reason</span>
                        </label>
                        <textarea type="text" name="boycotting_reason" placeholder="Reason in details" className=" textarea input input-bordered"></textarea>
                    </div>
                </div>
                <div className="form-control mt-6">
                    <button className="btn bg-[#fb8500] text-lg btn-outline border-none">Add Queries</button>
                </div>
            </form>
        </div>
    );
};

export default AddQueries;