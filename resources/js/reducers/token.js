




const token = localStorage.getItem('token')
const type = localStorage.getItem('type')
const computer = localStorage.getItem('computer')
const data = JSON.parse(localStorage.getItem('user'))


const initialState = {
    token: token,
    data: data,
    type: type,
    computer: computer,
}



const tokenReducers = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TOKEN' : {

            const newToken = action.payload;
            return { ...state,
                token: newToken,
            };
        }

        case 'ADD_DATA' : {
            const newdata = action.payload;
            return { ...state,
                data: newdata,
            };
         }


         case 'ADD_TYPE' : {
            const newtype = action.payload;
            return { ...state,
                type: newtype,
            };
         }
         case 'ADD_COMPUTER' : {
            const newcomputer = action.payload;
            return { ...state,
                computer: newcomputer,
            };
         }
        default:
            return state;
    }
}
export default tokenReducers;