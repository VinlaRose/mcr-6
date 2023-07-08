import { useContext, useState } from "react";
import { useParams } from "react-router-dom"
import { DataContext } from "../../context/cart-context";
import "./restaurantpage.css"

export const RestaurantPage = () => {
    const {id} = useParams();
    const {state} = useContext(DataContext);
    const [showForm, setShowForm] = useState(false);
    const requiredRestaurant = state.restaurantData.find(item => item.id === Number(id));
    
    const [review, setReview] = useState({
      revName: "",
      rating: 1,
      comment: "",
      pp: "https://img.lovepik.com/element/40127/3339.png_860.png", 
    });
  
    const handleAddReview = () => {
      setShowForm(true);
      console.log(requiredRestaurant);
      console.log(state)
    };
  
    const handleCloseReview = () => {
      setShowForm(false);
    };
  
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setReview((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    };
  
    const handleRatingChange = (e) => {
      const { value } = e.target;
      setReview((prevState) => ({
        ...prevState,
        rating: parseInt(value),
      }));
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      
      console.log(review);
      const updatedData = state.restaurantData.map(item => {
        if(item.id === requiredRestaurant.id){
            return {
                ...item,
                ratings: item.ratings.push(review)
            }
        }else{
            return item
        }
      });
      console.log(updatedData)
     
      setReview({
        revName: "",
        rating: 1,
        comment: "",
        pp: "https://img.lovepik.com/element/40127/3339.png_860.png", 
      });
      setShowForm(false);
    };
   
    const {name,menu, address, phone, averageRating, ratings} = requiredRestaurant
    return(
        <div className="restaurant-page-wrapper">
            <div className="top">
                <div className="top-left">
                <h1>{name}</h1>
            <p className="menu-items">
                {menu.map(item => (
                    <span >{item.name},</span>
                ))}
            </p>
            <p>Address: {address}</p>
            <p>Phone: {phone}</p>
            <p>Average Rating: {averageRating}</p>
                </div>
                <div className="top-right">
                    <button className="add-review" onClick={handleAddReview}>Add Review</button>
                </div>
           

            </div>

            <div className="rest">
                <h3>Reviews</h3>
                {
                    ratings.map(item => (
                        <div key ={item.revName} className="review">
                        <div className="profile">
                          
                          <div className="name-rating">
                          <img src={item.pp} alt="" className="profile-picture" />
                            <h3 className="name">{item.revName}</h3>
                            <div className="rating">
                             {item.rating} <span className="star">★</span>
                            </div>
                        </div>
                          
                        </div>
                        
                        <div className="comment">{item.comment}</div>
                      </div>


                    ))
                }

            </div>

            
            {showForm && (
        <div className="review-form">
          <button className="close-button" onClick={handleCloseReview}>
            Close
          </button>
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">Your Name:</label>
            <input
              type="text"
              id="name"
              name="revName"
              value={review.revName}
              onChange={handleInputChange}
            />

            <label htmlFor="rating">Rating:</label>
            <select
              id="rating"
              name="rating"
              value={review.rating}
              onChange={handleRatingChange}
            >
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
              <option value={5}>5</option>
            </select>

            <label htmlFor="comment">Comment:</label>
            <textarea
              id="comment"
              name="comment"
              value={review.comment}
              onChange={handleInputChange}
            ></textarea>

            <button type="submit">Submit</button>
          </form>
        </div>
      )}
   
  
           
           
        </div>
    )
}