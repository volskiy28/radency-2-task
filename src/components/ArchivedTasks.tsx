import { useAppDispatch } from "../hooks";
import { unarchivedItem } from "../store/taskSlice";
interface TaskTypes {
  id: string;
  name: string;
  dateCreated: string;
  category: string;
  content: string;
  dates: string;
}

export const ArchivedTasks: React.FC<TaskTypes> = ({
  id,
  name,
  dateCreated,
  category,
  content,
  dates,
}) => {
  const dispatch = useAppDispatch();
  return (
    <div className="archived">
      <input id="input" type="text" value={name} />

      <p>{dateCreated}</p>

      <p>{category}</p>

      <input type="text" id="input" value={content} />

      <input type="text" id="input" value={dates} />

      <button
        onClick={() => {
          dispatch(unarchivedItem(id));
        }}
      >
        unarchive
      </button>
    </div>
  );
};
