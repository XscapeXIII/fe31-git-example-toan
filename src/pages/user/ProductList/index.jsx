import { useEffect, useMemo, useState } from "react";
import { Link, generatePath } from "react-router-dom";

import { Button, Card, Row, Col, Input, Select, Checkbox } from "antd";
import * as S from "./styles";

import { useDispatch, useSelector } from "react-redux";

import {
  getProductListAction,
  getCategoryListAction,
} from "../../../redux/actions";

import { ROUTES } from "../../../constants/routes";
import { PRODUCT_LIMIT } from "../../../constants/paging";

function ProductListPage() {
  const dispatch = useDispatch();
  const { productList } = useSelector((state) => state.product);
  const { categoryList } = useSelector((state) => state.category);

  const [filterParams, setFilterParams] = useState({
    categoryId: [],
    searchKey: "",
  });

  useEffect(() => {
    dispatch(
      getProductListAction({
        page: 1,
        limit: PRODUCT_LIMIT,
      })
    );
    dispatch(getCategoryListAction());
  }, []);

  const renderCategoryFilter = useMemo(() => {
    return categoryList.data.map((item) => {
      return (
        <Col span={24} key={item.id}>
          <Checkbox value={item.id}>{item.name}</Checkbox>
        </Col>
      );
    });
  }, [categoryList.data]);

  const handleFilterCategory = (values) => {
    setFilterParams({
      ...filterParams,
      categoryId: values,
    });
    dispatch(
      getProductListAction({
        page: 1,
        limit: PRODUCT_LIMIT,
        categoryId: values,
      })
    );
  };

  const renderProductList = useMemo(() => {
    return productList.data.map((item) => {
      return (
        <Col key={item.id} xs={12} xl={8}>
          <Link to={generatePath(ROUTES.USER.PRODUCT_DETAIL, { id: item.id })}>
            <Card title={item.name} size="small">
              <p>{item.price.toLocaleString()} VNĐ</p>
            </Card>
          </Link>
        </Col>
      );
    });
  }, [productList.data]);

  const handleShowMore = () => {
    dispatch(
      getProductListAction({
        page: productList.meta.page + 1,
        limit: PRODUCT_LIMIT,
        categoryId: filterParams.categoryId,
        more: true,
      })
    );
  };

  return (
    <S.ProductListWrapper>
      <Row gutter={[16, 16]} size="small">
        <Col span={6}>
          <Card title="Filter">
            <Checkbox.Group onChange={(values) => handleFilterCategory(values)}>
              <Row>{renderCategoryFilter}</Row>
            </Checkbox.Group>
          </Card>
        </Col>
        <Col span={18}>
          <Row gutter={[8, 8]} style={{ marginBottom: 16 }}>
            <Col span={18}>
              <Input />
            </Col>
            <Col span={6}>
              <Select style={{ width: "100%" }}>
                <Select.Option value="decs">Giá tăng dần</Select.Option>
                <Select.Option value="asc">Giá giảm dần</Select.Option>
              </Select>
            </Col>
          </Row>
          <Row gutter={[16, 16]}>{renderProductList}</Row>
          {productList.data.length !== productList.meta.total && (
            <Row justify="center" style={{ marginTop: 16 }}>
              <Button onClick={() => handleShowMore()}>Show more</Button>
            </Row>
          )}
        </Col>
      </Row>
    </S.ProductListWrapper>
  );
}
export default ProductListPage;
