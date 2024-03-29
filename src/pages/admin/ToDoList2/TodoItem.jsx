import { useState } from "react";
import { useDispatch } from "react-redux";
import { editToDoAction, removeToDoAction } from "../../../redux/actions";
import { useNavigate, generatePath } from "react-router-dom";
import { ROUTES } from "../../../constants/routes";

import { Form, Input, Card, Button, Space } from "antd";

function TodoItem({ id, title, content }) {
  const [isEdit, setIsEdit] = useState(false);
  const [editForm] = Form.useForm();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const renderView = () => {
    return (
      <div key={id}>
        <div>Title: {title}</div>
        <div>Content: {content}</div>
      </div>
    );
  };

  const renderEdit = () => {
    return (
      <Form
        key={id}
        name={`editTodo-${id}`}
        form={editForm}
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 20 }}
        initialValues={{
          title,
          content,
        }}
        onFinish={(values) => {
          dispatch(editToDoAction({ id: id, values: values }));
          setIsEdit(false);
        }}
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
      </Form>
    );
  };

  return (
    <Card size="small" style={{ marginTop: 16 }}>
      {/* nếu isEdit true thì xét renderEdit, còn false thì xét renderView */}
      {isEdit ? renderEdit() : renderView()}
      <Space>
        {isEdit ? (
          <>
            <Button key="save" type="primary" onClick={() => editForm.submit()}>
              Save
            </Button>
            <Button key="cancel" onClick={() => setIsEdit(false)}>
              Cancel
            </Button>
          </>
        ) : (
          <Button
            key="Edit"
            type="primary"
            ghost
            onClick={() => setIsEdit(true)}
          >
            Edit
          </Button>
        )}
        <Button
          onClick={() =>
            navigate(
              {
                pathname: generatePath(ROUTES.ADMIN.TODO_DETAIL, { id: id }),
                search: `?title=${title}&content=${content}`,
              },
              {
                state: {
                  title: title,
                  content: content,
                },
              }
            )
          }
        >
          Detail
        </Button>
        <Button danger onClick={() => dispatch(removeToDoAction({ id: id }))}>
          Remove
        </Button>
      </Space>
    </Card>
  );
}

export default TodoItem;
