import CatCard from '@/components/cards/cat/CatCard';
import { mockCatCardProps } from '@/components/cards/cat/CatCard.mocks';
import PrimaryLayout from '@/components/layouts/primary/PrimaryLayout';
import { ReactElement } from 'react';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <section className={styles.main}>
      <CatCard {...mockCatCardProps.base} />
    </section>
  );
}

Home.getLayout = (page: ReactElement) => {
  return <PrimaryLayout>{page}</PrimaryLayout>;
};
