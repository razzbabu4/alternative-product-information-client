import { useLoaderData } from 'react-router-dom';
import { FcComments } from "react-icons/fc";
import useAuth from '../hooks/useAuth';
import Swal from 'sweetalert2';
import { useEffect, useState } from 'react';

const QueryDetails = () => {
    const { user } = useAuth();
    const queries = useLoaderData();
    const { _id, product_name, brand_name, product_image, query_title, boycotting_reason, userEmail, userName, userImage, currentDate } = queries;

    const [recommendations, setRecommendations] = useState([]);
    const [control, setControl] = useState(false);

    const url = `http://localhost:5000/recommendation?queryId=${_id}`
    useEffect(()=>{
        fetch(url)
        .then(res=> res.json())
        .then(data=> {
            setRecommendations(data)
        })
    },[url, control])


    
    const handleRecommendation = e => {
        e.preventDefault();
        const form = e.target;
        const recommendationTitle = form.recommendationTitle.value;
        const recommendedProductName = form.recommendedProductName.value;
        const recommendedProductImage = form.recommendedProductImage.value;
        const recommendedReason = form.recommendedReason.value;
        const queryId = _id;
        const queryTitle = query_title;
        const productName = product_name;
        const creatorEmail = userEmail;
        const creatorName = userName;
        const recommenderEmail = user?.email;
        const recommenderName = user?.displayName;
        // const recommenderCount = recommendationCount;
        const currentTime = new Date().toLocaleString();

        const newRecommendation = { recommendationTitle, recommendedProductName, recommendedProductImage, recommendedReason, queryId, queryTitle, productName, creatorEmail, creatorName, recommenderEmail, recommenderName, currentTime };

        console.log(newRecommendation);

        // send data to server
        fetch(`http://localhost:5000/recommendation`, {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(newRecommendation)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data?.insertedId) {
                    Swal.fire({
                        title: 'Success',
                        text: 'Queries added successfully',
                        icon: 'success',
                        confirmButtonText: 'OK'
                    })
                    setControl(!control)
                    // navigate('/myRecommendation')
                }
            })

    }
    return (
        <div className="flex flex-col w-full p-6 space-y-6 overflow-hidden rounded-lg shadow-md bg-gray-900 dark:bg-gray-100 text-gray-100 dark:text-gray-800">
            <div className="flex space-x-4">
                <img alt="" src={userImage} className="object-cover w-12 h-12 rounded-full shadow bg-gray-500 dark:bg-gray-500" />
                <div className="flex flex-col space-y-1">
                    <a rel="noopener noreferrer" href="#" className="text-sm font-semibold">{userName}</a>
                    <span className="text-xs text-gray-400 dark:text-gray-600">{currentDate}</span>
                </div>
            </div>
            <div className='flex-grow space-y-2'>
                <img src="https://source.unsplash.com/random/100x100/?5" alt="" className="object-cover w-full mb-4 h-60 sm:h-96 dark:bg-gray-500" />
                <h2 className="mb-1 text-xl font-semibold">{product_name}</h2>
                <small className='uppercase text-green-600 small'>{brand_name}</small>
                <h4><span className='font-medium mr-2'>Query Title :</span>{query_title}</h4>
                <p className="text-sm text-gray-400 dark:text-gray-600"><span className='mr-2'>Alternation Reason :</span>{boycotting_reason}</p>
            </div>
            <div className="flex flex-wrap justify-between items-center">
                <div className="space-x-2">
                    <p className='flex gap-2 items-center'><FcComments /><span>Recommendation</span> : {recommendations.length}</p>
                </div>
                {/* <div>
                    <button className='btn btn-outline'>Back to Home</button>
                </div> */}
            </div>
            {/* Recommendation for this query */}
                <h1 className='text-3xl font-medium text-center'>Recommendation</h1>
            {
                 recommendations.map(comment => <div key={comment._id} className='flex justify-between items-center border p-6'>
                    <div>
                        <div className="flex items-center gap-3">
                            <div className="avatar">
                                <div className="mask mask-squircle w-12 h-12">
                                    <img src={comment.recommendedProductImage} alt="empty" />
                                </div>
                            </div>
                            <div>
                                <div className="font-bold">{
                                    comment.recommendedProductName}</div>
                                <div className="text-sm opacity-50">{comment.currentTime}</div>
                            </div>
                        </div>
                    </div>
                    <div>
                        {comment.recommendationTitle}
                    </div>
                    <div>{comment.recommendedReason}</div>
                        <div className="flex items-center gap-4">
                            {/* <button onClick={()=>handsleDelete(comment._id)} className="btn btn-ghost btn-xs text-red-500 btn-outline">Delete</button> */}
                        </div>
                </div>)
            }
            {/* Recommendation form */}
            {user?.email !== userEmail &&
                <div>
                    <div className="max-w-5xl mx-auto p-4 rounded-md">
                        <form onSubmit={handleRecommendation} className="card-body">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Title</span>
                                    </label>
                                    <input type="text" name="recommendationTitle" placeholder="Title" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Recommended Product</span>
                                    </label>
                                    <input type="text" name="recommendedProductName" placeholder="Product Name" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Recommended Product Image</span>
                                    </label>
                                    <input type="text" name="recommendedProductImage" placeholder="Product Image-URL" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Recommended Reason</span>
                                    </label>
                                    <input type="text" name="recommendedReason" placeholder="Reason" className="input input-bordered" />
                                </div>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn bg-[#fb8500] text-lg btn-outline border-none">Add Recommendation</button>
                            </div>
                        </form>
                    </div>
                </div>
            }
        </div>
    );
};

export default QueryDetails;