 
 import Data from '../../pages/dataJson/envi.json'
 
 
const INIT_STATE = {
 
  user: Data,
 
};

const userReducer = (state = INIT_STATE, action) => {
    return { ...state };
  
};

export default userReducer;

