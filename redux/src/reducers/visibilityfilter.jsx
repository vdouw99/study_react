/**
 * Created by Administrator on 2017/8/30 0030.
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