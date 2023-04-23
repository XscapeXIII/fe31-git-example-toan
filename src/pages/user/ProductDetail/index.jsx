import { useEffect, useMemo } from "react";
import { useParams, Link, generatePath } from "react-router-dom";
import { Spin, Col, Card, Row } from "antd";

import { useDispatch, useSelector } from "react-redux";
import {
  getProductDetailAction,
  getProductListAction,
} from "../../../redux/actions";
import { ROUTES } from "../../../constants/routes";
import { PRODUCT_LIMIT } from "../../../constants/paging";

function ProductDetailPage() {
  const { id } = useParams();

  const dispatch = useDispatch();
  const { productDetail, productList } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(getProductDetailAction({ id: id }));
    dispatch(
      getProductListAction({
        page: 1,
        limit: PRODUCT_LIMIT,
      })
    );
  }, [id]);

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

  return (
    <Spin spinning={productDetail.load}>
      <div>
        <h3>{productDetail.data.name}</h3>
        <p>{productDetail.data.price?.toLocaleString()} VND</p>
      </div>
      <p>Sản Phẩm Tương Tự</p>
      <Row gutter={[16, 16]}>{renderProductList}</Row>
    </Spin>
  );
}

export default ProductDetailPage;
