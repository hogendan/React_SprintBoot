function TodoRowItem(props) {
  return (
    <tr>
      <th scope="row">{props.rowNumber}</th>
      <td>{props.rowDescription}</td>
      <td>{props.rowAssigned}</td>
      <td>
        <button
          className="btn btn-hover"
          onClick={() => {
            props.deleteTodo(props.rowNumber);
          }}
        >
          Del
        </button>
      </td>
    </tr>
  );
}

export default TodoRowItem;
