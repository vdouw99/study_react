/**
 * Created by sf on 2017/9/2.
 */

const visibilityFilter = (state = "SHOW_ALL", action) => {
    switch (action.type) {
        case 'SET_VISIBILITY':
            return action.filter;
        default:
            return state;
    }
};

export default visibilityFilter;