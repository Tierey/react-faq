import {cloneDeep} from 'lodash'


function createThunkMiddleware(extraArgument) {
    return ({ dispatch, getState }) => next => action => {

        if (typeof action === 'function') {

            function payloadDispatch(method){
                return dispatch(method).payload
            }
          
            let payload = action({
                dispatch:payloadDispatch,
                state: cloneDeep(getState()),
                extraArgument
            });


            return next({
                type: "thunk",
                payload
            });
        }
        return next(action)
    };
}

const thunk = createThunkMiddleware();
thunk.withExtraArgument = createThunkMiddleware;

export default thunk