import React from 'react';
import {ListGroupItem, Button, Checkbox, Glyphicon} from 'react-bootstrap';

export default class Item extends React.Component {
    static propTypes = {
        login: React.PropTypes.string.isRequired,
        mail: React.PropTypes.string.isRequired,
        done: React.PropTypes.bool.isRequired,
        onToggleState: React.PropTypes.func.isRequired,
        onDelete: React.PropTypes.func.isRequired
    };

    render = () => {
        const {login, mail, done, onToggleState, onDelete} = this.props;

        return <ListGroupItem>
            <Checkbox checked={done} onClick={onToggleState}>
                {login +" "+ mail} <Button bsStyle="danger" onClick={onDelete}><Glyphicon glyph="trash" /> Delete</Button>
            </Checkbox>
        </ListGroupItem>
    }
}
