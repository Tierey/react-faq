import {cloneDeep} from 'lodash'
function createThunkMiddleware(extraArgument) {
    return ({ dispatch, getState }) => next => action => {

        if (typeof action === 'function') {

            let payload = action({
                dispatch,
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