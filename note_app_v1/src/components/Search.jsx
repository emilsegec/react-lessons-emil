import React from 'react';
import {connect} from "react-redux";
import {Button, ControlLabel, FormControl, FormGroup, Glyphicon, HelpBlock} from "react-bootstrap";
import Item from "./Item";
import {handleDelete} from "../actions/TODOActions";
import index from "../reducers/index";


class Search extends React.Component {

    state = {searchText: "", matchId: null};

    render() {
        const {matchId} = this.state;
        const {list} = this.props;
        return (
            <form>
                <FormGroup
                    controlId="formBasicText"

                >
                    <ControlLabel>Hledani</ControlLabel>
                    <FormControl
                        type="text"
                        value={this.state.searchText}
                        placeholder="Enter searched text"
                        onChange={this.handleChange}
                    />
                    <FormControl.Feedback/>
                    <HelpBlock>Hledani podle title.</HelpBlock>

                </FormGroup>
                <Button onClick={this.handleSearch}><Glyphicon glyph="search"/> Hledej</Button>
                {list[matchId] ? <Item
                    title={list[matchId].title}
                    text={list[matchId].text}
                    onDelete={() => {
                        this.props.dispatch(handleDelete(matchId));

                    }}
                /> : "Žádný výsledek"}
            </form>
        );
    }

    handleChange = (e) => this.setState({searchText: e.target.value});

    handleSearch = () => {
        const {list} = this.props;
        const {searchText} = this.state;

        /*list.find((articleItem) => articleItem.title === searchText);*/       //zkracenej zapis ifu
        /* const match = list.find(function (articleItem) {
             if (articleItem.title === searchText) {
                 return true
             }
             return false
         })*/
        //filtrovani priklad

        for (let i = 0; i < list.length; i++) {
            if (list[i].title === searchText) {
                this.setState({matchId: i});
            }
        }
    }


}

export default connect((store) => {
    return {list: store.todo.list,}

})(Search);
