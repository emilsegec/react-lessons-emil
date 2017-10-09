import React from 'react';
import {ListGroupItem, Button, Checkbox, Glyphicon} from 'react-bootstrap';

export default class Item extends React.Component {
    static propTypes = {
        text: React.PropTypes.string.isRequired,
        title: React.PropTypes.string.isRequired,
        onDelete: React.PropTypes.func.isRequired,
        onEdit: React.PropTypes.func.isRequired
    };

    render = () => {
        const {text, title, onEdit, onDelete} = this.props;

        return <ListGroupItem>

                {title +" "+ text} <Button bsStyle="danger" onClick={onDelete}><Glyphicon glyph="trash" /> Delete</Button>
                                   <Button bsStyle="warning" onClick={onEdit}><Glyphicon glyph="pencil" /> Edit</Button>

        </ListGroupItem>
    }
}
