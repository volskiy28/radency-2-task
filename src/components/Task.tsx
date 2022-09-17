import React, { useState } from "react";
import { useAppDispatch } from "../hooks";
import { archiveItems, deleteItem } from "../store/taskSlice";

interface TaskTypes {
  id: string;
  name: string;
  dateCreated: string;
  category: string;
  content: string;
  dates: string;
}

export const Task: React.FC<TaskTypes> = ({
  id,
  name,
  dateCreated,
  category,
  content,
  dates,
}) => {
  const dispatch = useAppDispatch();
  const [readOnly, setReadOnly] = useState(true);
  const [taskName, setTaskName] = useState(name);
  const [taskContent, setTaskContent] = useState(content);
  const [taskDates, setTaskDates] = useState(dates);
  const editFunc = () => {
    setReadOnly(!readOnly);
  };
  const item = {
    id: id,
    name: name,
    dateCreated: dateCreated,
    category: category,
    content: content,
    dates: dates,
    archived: false,
  };
  return (
    <div className="content">
      <input
        id="input"
        type="text"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
        readOnly={readOnly}
      />

      <p>{dateCreated}</p>

      <p>{category}</p>

      <input
        type="text"
        id="input"
        value={taskContent}
        onChange={(e) => setTaskContent(e.target.value)}
        readOnly={readOnly}
      />

      <input
        type="text"
        id="input"
        value={taskDates}
        onChange={(e) => setTaskDates(e.target.value)}
        readOnly={readOnly}
      />

      <button onClick={editFunc}>{readOnly ? "edit" : "save"}</button>
      <button onClick={() => dispatch(deleteItem(id))}>delete</button>
      <button
        onClick={() => {
          dispatch(archiveItems(id));
        }}
      >
        archive
      </button>
    </div>
  );
};
