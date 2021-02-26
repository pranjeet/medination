export const initialState = {
  basket: [], 
  user: null, 
};

export const getBasketTotal = (basket) =>
    basket?.reduce((amount,item) => item.price + amount , 0);

const reducer = (state,action) => {
    console.log(action);
    switch(action.type){
        case 'SET_USER':
            return{
                ...state,
                user: action.user,
            };

        case 'ADD_TO_BASKET':
            //LOGIC FOR ADDING ITEM TO BASKET
            return {
                ...state,
                basket: [...state.basket, action.item]
            };

        case 'EMPTY_BASKET':
                return {
                  ...state,
                  basket: []
                }
                
        case 'REMOVE_FROM_BASKET':
            //LOGIC FOR REMOVING ITEM FROM BASKET

            //we copied the basket
            let newBasket = [...state.basket];

            const index= state.basket.findIndex((basketItem) => basketItem.id === action.id);
            
            if(index >=0){
                //item exist in basket,remove it....
                newBasket.splice(index,1);    
            }else{
                console.warn( 'Cannot remove product (id: ${action.id}) as it is not int the basket'
                );
            }
            return {...state, 
                basket: newBasket,
            };
            
        default:
            return state;        
    }
}

export default reducer;