import React from 'react';
import {connect} from "react-redux";


class Search extends React.Component {

    render = () => {
        const{list} = this.props;

        return <h2>

            {
                list[3]  && list[3].title + " " + list[3].text
            }

        </h2>
    }

}
export default connect((store) =>{
    return {list:store.todo.list, }

})(Search);
