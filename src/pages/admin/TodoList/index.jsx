import { useState } from "react";

import { Link, generatePath } from "react-router-dom";

import { Form, Input, Card, Button, Col } from "antd";

import { v4 as uuidv4 } from "uuid";

import { ROUTES } from "../../../constants/routes";

function TodoList() {
  uuidv4();

  const [productList, setProductList] = useState([
    {
      title: "",
      content: "",
    },
  ]);

  const [productData, setProductData] = useState({
    title: "",
    content: "",
  });

  const handleChangeProductData = (e, key) => {
    setProductData({
      ...productData,
      [key]: e.target.value,
    });
  };

  const renderList = () => {
    return productList.map((item, index) => {
      return (
        <Col key={index} xs={24} md={12} xl={8}>
          <Link to={generatePath(ROUTES.ADMIN.TODO_LIST, { id: index + 1 })}>
            <Card size="small">
              <h3>Title: {item.title}</h3>
              <h3>Content: {item.content}</h3>
              <Button>Update</Button>
              <Button>Delete</Button>
            </Card>
          </Link>
        </Col>
      );
    });
  };

  return (
    <div>
      <Card>
        <Form
          name="todolist"
          layout="vertical"
          onFinish={() => {
            setProductList([
              ...productList,
              {
                title: productData.title,
                content: productData.content,
              },
            ]);
            setProductData({
              title: "",
              content: "",
            });
          }}
        >
          <Form.Item
            label="Title:"
            name="title"
            validateFirst
            rules={[
              {
                required: true,
                whitespace: true,
                message: "Title require!",
              },
              {
                pattern: /^[A-Z][a-z0-9_-]{3,19}$/g,
                message:
                  "The first letter must be UPPERCASE, Title 3-20 character",
              },
            ]}
          >
            <Input
              type="text"
              onChange={(e) => handleChangeProductData(e, "title")}
              value={productData.title}
            />
          </Form.Item>
          <Form.Item
            label="Content:"
            name="content"
            validateFirst
            rules={[
              {
                required: true,
                whitespace: true,
                message: "Content require!",
              },
              {
                pattern: /^[a-zA-Z0-9]{2,20}$/g,
                message: "Content must be have 2-20 character",
              },
            ]}
          >
            <Input
              type="text"
              onChange={(e) => handleChangeProductData(e, "content")}
              value={productData.content}
            />
          </Form.Item>
          <Button htmlType="submit" type="primary" block>
            Add
          </Button>
        </Form>
      </Card>
      <Card>{renderList()}</Card>
    </div>
  );
}
export default TodoList;
