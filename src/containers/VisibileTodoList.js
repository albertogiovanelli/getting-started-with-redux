/**
 * Created by albertogiovanelli on 06/06/18.
 */
import {connect} from 'react-redux';
import TodoList from '../components/TodoList';
import {toggleTodo} from '../actions/todoActions';
import {getVisibleTodos} from '../utils/getVisibileTodos';

const mapStateToProps = (state) => {
    return {
        todos: getVisibleTodos(state.todos, state.visibilityFilter)
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onTodoClick : (id) => dispatch(toggleTodo(id))
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList);