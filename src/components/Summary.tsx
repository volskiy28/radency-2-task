import { useEffect } from "react";
import { TableData, changeTableData } from "../store/taskSlice";
import { useAppDispatch, useAppSelector } from "../hooks";

type Category = { [key: string]: { active: number; archived: number } };
export const Summary = () => {
  const arr = useAppSelector((state) => state.tasks.arr);
  const dispatch = useAppDispatch();
  useEffect(() => {
    const data = getTableData();
    dispatch(changeTableData(data));
  }, []);
  const getTableData = () => {
    const allCategories = arr.map((note) => {
      return note.category;
    });

    const uniqueCategories = Array.from(new Set(allCategories));

    const filteredCategories = uniqueCategories.map((uniqueCategory) => {
      const obj = {
        [uniqueCategory]: {
          active: arr.filter(
            (note) =>
              note.category === uniqueCategory && note.archived === false
          ).length,
          archived: arr.filter(
            (note) => note.category === uniqueCategory && note.archived === true
          ).length,
        },
      };
      return obj;
    });

    return filteredCategories;
  };

  const tableData = getTableData();

  const tableMarkup = (tableData: TableData) => {
    const markup = tableData.map((category: Category, index: number) => {
      const key = Object.keys(category);
      const identifier = key[0];

      return (
        <tr key={index}>
          <th scope="row">{key}</th>
          <td>{category[identifier].active}</td>
          <td>{category[identifier].archived}</td>
        </tr>
      );
    });
    return markup;
  };

  return (
    <>
      {tableData.length > 0 ? (
        tableMarkup(tableData)
      ) : (
        <h3 className="mt-3" style={{ color: "grey", fontSize: 18 + "px" }}>
          No data
        </h3>
      )}
    </>
  );
};
