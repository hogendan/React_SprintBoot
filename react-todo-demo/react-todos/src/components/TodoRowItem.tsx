import React from "react";

export const TodoRowItem: React.FC<{
  rowNumber: number;
  rowDescription: string;
  rowAssigned: string;
  deleteTodo: Function;
}> = (props) => {
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
};
