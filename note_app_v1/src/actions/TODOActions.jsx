import {actions} from "../components/TodoList";

export const handleDelete = (index) => {
    return (dispatch) => {
        dispatch({type: actions.ITEM_DELETE, index})
    }
};

