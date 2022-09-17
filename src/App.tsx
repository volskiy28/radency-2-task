import { useAppDispatch, useAppSelector } from "./hooks";
import { Task } from "./components/Task";
import { ArchivedTasks } from "./components/ArchivedTasks";
import Table from "./components/Table";
import { useState } from "react";
import { CreateTask } from "./components/CreateTask";
import { addItem } from "./store/taskSlice";
function App() {
  const tasks = useAppSelector((state) => state.tasks.arr);
  const [hidden, setHidden] = useState(true);
  const toggleHidden = () => {
    setHidden(!hidden);
  };
  const dispatch = useAppDispatch();
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [content, setContent] = useState("");
  const [dates, setDates] = useState("");
  const item = {
    id: new Date().toISOString(),
    name: name,
    dateCreated: new Date().toLocaleDateString("default", {
      day: "numeric",
      year: "numeric",
      month: "numeric",
    }),
    category: category,
    content: content,
    dates: dates,
    archived: false,
  };
  const handleAction = () => {
    dispatch(addItem(item));
    setName("");
    setCategory("");
    setContent("");
    setDates("e");
  };
  const closePopupAndHandleAction = () => {
    handleAction();
    toggleHidden();
  };
  const active = tasks.filter((note) => note.archived == false);
  const archived = tasks.filter((note) => note.archived == true);
  return (
    <div className="App">
      <div className="content">
        <p>Name</p>
        <p>Created</p>
        <p>category</p>
        <p>content</p>
        <p>dates</p>
      </div>
      <div className="align">
        {active.map((task, index) => (
          <Task key={index} {...task} />
        ))}
      </div>
      <div className="create_task">
        <button onClick={toggleHidden}>create task</button>
      </div>
      <CreateTask
        toggleHidden={toggleHidden}
        hidden={hidden}
        name={name}
        content={content}
        category={category}
        setName={setName}
        setCategory={setCategory}
        setContent={setContent}
        setDates={setDates}
        handleAction={handleAction}
        closePopupAndHandleAction={closePopupAndHandleAction}
      />
      <Table />
      {archived.map((task, index) => (
        <ArchivedTasks key={index} {...task} />
      ))}
    </div>
  );
}

export default App;
