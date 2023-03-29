import { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import {
  getAddToDoAction,
  getEditToDoAction,
  getRemoveToDoAction,
} from "../../../redux/actions";

import { v4 as uuidv4 } from "uuid";
import { Form, Input, Card, Button } from "antd";

import TodoItem from "./TodoItem";

function TodoList2() {
  const dispatch = useDispatch();
  // const { newToDoList, productList } = useSelector((state) => state.TodoList2);
  const [toDoList, setToDoList] = useState([]);

  const handleAddToDo = (values) => {
    dispatch(getAddToDoAction(values));
    const newValues = {
      ...values,
      id: uuidv4(),
    };
    const newToDoList = [newValues, ...toDoList];
    setToDoList(newToDoList);
  };

  const handleEditToDo = (id, values) => {
    dispatch(getEditToDoAction(id, values));
    const newToDoList = [...toDoList];
    const index = toDoList.findIndex((item) => item.id === id);
    newToDoList.splice(index, 1, values);
    setToDoList(newToDoList);
  };

  const handleRemoveToDo = (id) => {
    dispatch(getRemoveToDoAction(id));
    const newToDoList = [...toDoList];
    const index = toDoList.findIndex((item) => item.id === id);
    newToDoList.splice(index, 1);
    setToDoList(newToDoList);
  };

  const renderToDoList = () => {
    return toDoList.map((item) => (
      <TodoItem
        key={item.id}
        id={item.id}
        title={item.title}
        content={item.content}
        handleEditToDo={handleEditToDo}
        handleRemoveToDo={handleRemoveToDo}
      />
    ));
  };

  return (
    <div>
      <Card size="small">
        <Form
          name="addTodo"
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 20 }}
          onFinish={(values) => handleAddToDo(values)}
        >
          <Form.Item
            label="Title"
            name="title"
            validateFirst
            rules={[
              {
                required: true,
                whitespace: true,
                message: "Title là bắt buộc!",
              },
              {
                min: 3,
                type: "string",
                message: "Title phải dài hơn 3 kí tự",
              },
              {
                pattern: /^[A-Z].{0,}$/g,
                message: "Chữ cái đầu tiên phải viết hoa",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Content"
            name="content"
            validateFirst
            rules={[
              {
                required: true,
                whitespace: true,
                message: "Content là bắt buộc!",
              },
              {
                max: 20,
                type: "string",
                message: "Content phải ngắn hơn 20 kí tự",
              },
              {
                pattern: /^[A-Z].{0,}$/g,
                message: "Chữ cái đầu tiên phải viết hoa",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Button type="primary" htmlType="submit" block>
            Add
          </Button>
        </Form>
      </Card>
      {renderToDoList()}
    </div>
  );
}

export default TodoList2;
