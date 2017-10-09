import React from 'react';
import {connect} from "react-redux";
import {Button, Modal} from "react-bootstrap";
import AddForm from "./AddForm";
import {actions} from "./TodoList";


class Edit extends React.Component {

    render = () => {
        const{article, showModal, onClose, currentEditedItem} = this.props;
        console.log(article);
        return <Modal show={showModal} onHide={onClose}>
            <Modal.Header closeButton>
                <Modal.Title>Edit</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                    <AddForm form="edit" onSubmit={(data)=> {this.props.dispatch({type: actions.ITEM_EDIT, index: currentEditedItem, data})}} initialValues={{title: article.title, text: article.text}}  />
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={onClose}>Close</Button>
            </Modal.Footer>
        </Modal>
    }

}
export default connect((store, props) =>{
    return { article: store.todo.list[props.currentEditedItem] ? store.todo.list[props.currentEditedItem] : {title: "", text: ""}, }
})(Edit);
