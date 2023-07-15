import { Col, Container, Row } from 'react-bootstrap';

import CatCard from '@/components/cards/cat/CatCard';
import { mockCatCardProps } from '@/components/cards/cat/CatCard.mocks';
import { getPageLayout } from '@/components/layouts/page/PageLayout';
import { NextPageWithLayout } from '@/types';
import { getStaticTranslations } from '@/utils/with-page-translations';

const Home: NextPageWithLayout = () => {
  return (
    <Container className="container-fluid">
      <Row className="pt-5">
        <Col className="my-auto">
          <h1 className="display-2 font-weight-bolder">
            <strong>Next.JS + Bootstrap</strong>
          </h1>
          <p className="lead">Liked this tutorial?</p>

          <a
            className="btn btn-primary btn-lg"
            href="https://twitter.com/mike_alche"
          >
            Follow me on twitter
          </a>
        </Col>
        <Col className="">
          <img
            className="rounded "
            src="http://placekitten.com/500/500"
            alt=""
          />
        </Col>
      </Row>
      <section>
        <CatCard {...mockCatCardProps.base} />
      </section>
    </Container>
  );
};

Home.getLayout = getPageLayout;

export default Home;

export const getStaticProps = getStaticTranslations();

