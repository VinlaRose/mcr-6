export const reducer = (state,action) => {
    switch(action.type){
        case "FETCH_DATA":
            return{
                ...state,
                cuisineData: action.payload.cuisines,
                restaurantData: action.payload.restaurants
               
            }
        case "SHOW_DATA":
            return{
                ...state,
                showData: action.payload
                
               
            }
        case "ADD_REVIEW": 
         return{
            ...state,
            
         }    
        default: 
            return state;
    }
}