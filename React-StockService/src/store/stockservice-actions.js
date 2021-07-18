import {stockServiceActions} from './stockservice-slice';
import {STOCK_SERVICE_API_URL} from '../utils/Constants';



export const fetchTicks = (token) => {
    return async (dispatch) => {
      const fetchData = async () => {
       
        const response = await fetch(
            STOCK_SERVICE_API_URL+'api/ticks',{
            headers: {
                'Content-Type': 'application/json',
                'Authorization':'Bearer '+token
              }
          }
        );
  
        if (!response.ok) {
          throw new Error('Could not fetch ticks!');
        }
  
        const data = await response.json();
        console.log(data);
  
        return data;
      };
  
      try {
        const cartData = await fetchData();
        dispatch(
            stockServiceActions.getTopTenTicks({
            ticks: cartData.finance || {}
            
          })
        );
      } catch (error) {
       //Need to modify state to show error
      }
    };
  };



  export const fetchWatchLists = () => {
    return async (dispatch) => {
      const fetchData = async () => {
       
        const response = await fetch(
            STOCK_SERVICE_API_URL+'api/watchList',{
            headers: {
                'Content-Type': 'application/json',
                'Authorization':'Bearer '+localStorage.getItem("jwtToken")
              }
          }
        );
  
        if (!response.ok) {
          throw new Error('Could not fetch watchlists!');
        }

        const data = await response.json();
        console.log(data);
  
        return data;
       
  
       
      };
  
      try {
        const cartData = await fetchData();
        dispatch(
            stockServiceActions.getTopWatchLists({
              watchLists: cartData.finance || {}
            
          })
        );
      } catch (error) {
       //Need to modify state to show error
      }
    };
  };

  
  