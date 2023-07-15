import { Col, Container, Row } from 'react-bootstrap';

import CatCard from '@/components/cards/cat/CatCard';
import { mockCatCardProps } from '@/components/cards/cat/CatCard.mocks';
import PrimaryLayout from '@/components/layouts/primary/PrimaryLayout';
import { ReactElement } from 'react';
import styles from '../styles/Home.module.css';

export default function Home() {
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
      <section className={styles.main}>
        <CatCard {...mockCatCardProps.base} />
      </section>
    </Container>
  );
}

Home.getLayout = (page: ReactElement) => {
  return <PrimaryLayout>{page}</PrimaryLayout>;
};
