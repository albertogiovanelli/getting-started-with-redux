/**
 * Created by albertogiovanelli on 06/06/18.
 */
import {connect} from 'react-redux';
import TodoList from '../components/TodoList';
import {toggleTodo} from '../actions/todoActions';
import {getVisibleTodos} from '../utils/getVisibileTodos';
import {withRouter} from 'react-router-dom';

const mapStateToProps = (state, {match}) => ({
    todos: getVisibleTodos(state.todos, match.params.filter || 'all')
});

const mapDispatchToProps = (dispatch) => ({
    onTodoClick(id) {
        dispatch(toggleTodo(id))
    }
});

const VisibleTodoList = withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList));

export default VisibleTodoList;