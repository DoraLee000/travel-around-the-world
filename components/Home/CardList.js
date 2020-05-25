import { Card, Col } from 'antd';
import Link from 'next/link';

const { Meta } = Card;

const CardComponent = () => {
  return (
    <div>
      <Col span={8} md={8} sm={12} xs={24} className="mb-50">
        <Link href="#">
          <Card
            hoverable
            key="5"
            title="55"
            className="card mb-50 content-ellipsis"
            cover={
              <img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />
            }
          >
            <ul>
              <li className="content-ellipsis">
                <span className="content-p">景點地址:</span>
              </li>
              <li className="content-ellipsis">
                <span className="content-p">營業時間:</span>
              </li>
              <li className="content-ellipsis">
                <span className="content-p">景點分類:</span>
              </li>
            </ul>
          </Card>
        </Link>
      </Col>
    </div>
  );
};

export default CardComponent;
