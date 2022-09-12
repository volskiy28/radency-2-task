interface CreateTaskType {
  toggleHidden: () => void;
  handleAction: () => void;
  closePopupAndHandleAction: () => void;
  setName: (str: string) => void;
  setCategory: (str: string) => void;
  setContent: (str: string) => void;
  setDates: (str: string) => void;
  hidden: boolean;
  name: string;
  content: string;
  category: string;
}

export const CreateTask: React.FC<CreateTaskType> = ({
  hidden,
  name,
  content,
  category,
  setName,
  setCategory,
  setContent,
  setDates,
  closePopupAndHandleAction,
}) => {
  return (
    <div className={hidden ? "hidden popup" : "popup"}>
      <div className="popup_body">
        <div className="popup_content">
          <input
            type="text"
            placeholder="Enter name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <p>
            <input
              type="text"
              placeholder="Enter content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
          </p>
          <p>
            <input
              type="text"
              placeholder="Enter category"
              list="categoryList"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            />
          </p>
          <p>
            <input
              type="date"
              name=""
              id=""
              onChange={(e) => setDates(e.target.value)}
            />
          </p>
          <datalist id="categoryList">
            <option value="Task"></option>
            <option value="Random thought"></option>
            <option value="Idea"></option>
          </datalist>
          <button onClick={closePopupAndHandleAction} id="addBtn">
            Add
          </button>
          <ul></ul>
        </div>
      </div>
    </div>
  );
};
