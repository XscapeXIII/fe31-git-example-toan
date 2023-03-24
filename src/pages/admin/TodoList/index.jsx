import { type } from "@testing-library/user-event/dist/type";
import { Form, Input, Card, Button } from "antd";

function TodoList() {
  return (
    <div>
      <Card>
        <Form
          name="todolist"
          layout="vertical"
          // labelCol={{ span: 4 }}
          // wrapperCol={{ span: 18 }}
          onFinish={(values) => console.log(values)}
        >
          <Form.Item
            label="Email:"
            name="email"
            validateFirst
            rules={[
              {
                required: true,
                whitespace: true,
                message: "Email require!",
              },
              {
                type: "email",
                message: "Email not true!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="User:"
            name="user"
            rules={[
              {
                required: true,
                message: "User require!",
              },
              {
                min: 3,
                type: "string",
                message: "User more 3 character",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="PhoneNumber:"
            name="phonenumber"
            rules={[
              {
                required: true,
                message: "PhoneNumber require!",
              },
              {
                pattern: /(84|0[3|5|7|8|9])+([0-9]{8})\b/g,
                message: "PhoneNumber not true",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Button htmlType="submit" type="primary" block>
            Submit
          </Button>
        </Form>
      </Card>
    </div>
  );
}
export default TodoList;
