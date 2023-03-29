import { useState, useEffect } from "react";

import { Link, generatePath } from "react-router-dom";

import { Form, Input, Card, Button, Col, Row } from "antd";

import { v4 } from "uuid";

import { ROUTES } from "../../../constants/routes";

function TodoList() {
  const uuid = v4();

  const [productList, setProductList] = useState([
    {
      id: "",
      title: "",
      content: "",
    },
  ]);

  const [productData, setProductData] = useState({
    id: "",
    title: "",
    content: "",
  });

  const [productDataUpdate, setProductDataUpdate] = useState({
    id: "",
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
      if (item.isUpdating === true)
        return (
          <Col key={index} xs={24} md={12} xl={8}>
            <Link to={generatePath(ROUTES.ADMIN.TODO_LIST, { id: uuid })}>
              <Card size="small">
                <Input
                  type="text"
                  name=""
                  id=""
                  value={productDataUpdate.title}
                  onChange={(e) =>
                    setProductDataUpdate({
                      ...productDataUpdate,
                      title: e.target.value,
                    })
                  }
                />
                <Input
                  type="text"
                  name=""
                  id=""
                  value={productDataUpdate.content}
                  onChange={(e) =>
                    setProductDataUpdate({
                      ...productDataUpdate,
                      content: e.target.value,
                    })
                  }
                />
                <Button
                  onClick={() => {
                    productList[index] = productDataUpdate;
                    item.isUpdating = false;
                    setProductList([...productList]);
                  }}
                >
                  Save
                </Button>
                <Button
                  onClick={() => {
                    item.isUpdating = false;
                    setProductDataUpdate({
                      id: "",
                      title: "",
                      content: "",
                    });
                    setProductList([...productList]);
                  }}
                >
                  Cancel
                </Button>
                <Button>Delete</Button>
              </Card>
            </Link>
          </Col>
        );
      return (
        <Col key={index} xs={24} md={12} xl={8}>
          <Link to={generatePath(ROUTES.ADMIN.TODO_LIST, { id: uuid })}>
            <Card size="small">
              <h3>Title: {item.title}</h3>
              <h3>Content: {item.content}</h3>
              <Button
                onClick={() => {
                  item.isUpdating = true;
                  setProductDataUpdate(item);
                  setProductList([...productList]);
                }}
              >
                Update
              </Button>
              <Button
                onClick={() => {
                  // const i = productList.findIndex((p) => p.id === item.id);
                  // productList.splice(i, 1);
                  productList.splice(index, 1);
                  setProductList([...productList]);
                }}
              >
                Delete
              </Button>
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
                id: uuid,
                title: productData.title,
                content: productData.content,
              },
            ]);
            setProductData({
              id: "",
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
      <Row gutter={[16, 16]}>{renderList()}</Row>
    </div>
  );
}
export default TodoList;
