import React from 'react';
import {connect} from 'react-redux'
import {ListGroup} from 'react-bootstrap';

import Item from './Item'
import AddForm from './AddForm'
import Pokus from "./Search";
import Edit from "./Edit";
import {handleDelete, handleEdit} from "../actions/TODOActions";


export const actions = {
    ITEM_CREATE:"ITEM_CREATE",
    ITEM_DELETE:"ITEM_DELETE",
    ITEM_EDIT:"ITEM_EDIT"
};

/**
 * Komponenta TodoList
 *
 * Obsahuje list a renderuje podkomponenty
 * ---
 *
 * Místo this.state.list používáme this.props.list
 *
 * --
 *
 * Pro propojení se storem musíme uložit do konstanty a poté exportovat se spuštěnou funkcí connect
 */
const TodoList = class TodoList extends React.Component {
    state = {comment: [],showModal: false, currentEditedItem: null};

    handleCreate = (data) => {
        this.props.dispatch({type: actions.ITEM_CREATE, payload:{ text: data.text, title: data.title} })
    };

    handleEdit = (index) => {
        this.open();
        this.setState({currentEditedItem:index});
    };

    close = () => {
        this.setState({showModal: false});
    }

    open = () => {
        this.setState({showModal: true});
    }

    render = () => {
        const {list} = this.props;
        return <div>
            <Edit onClose={this.close} showModal={this.state.showModal} currentEditedItem={this.state.currentEditedItem}/>
            <Pokus/>
            <AddForm onSubmit={this.handleCreate} />
            <ListGroup>
                {list.map((item,index) => <Item
                    key={index}
                    title={item.title}
                    text={item.text}
                    onDelete={() => this.props.dispatch(handleDelete(index))}
                    onEdit={this.handleEdit.bind(this, index)}/>)}
            </ListGroup>
        </div>
    };
};

export default connect((state) => ({list:state.todo.list,}))(TodoList);
