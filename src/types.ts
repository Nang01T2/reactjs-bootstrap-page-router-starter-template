import { NextPage } from 'next';
import React from 'react';

export type ReactTag = keyof React.JSX.IntrinsicElements;

export type PropsOf<TTag extends ReactTag> = TTag extends React.ElementType
  ? React.ComponentProps<TTag>
  : never;

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (_page: React.ReactElement) => React.ReactNode;
};

export type PropsWithClassName<TProps extends Record<string, unknown> = {}> =
  React.PropsWithChildren<TProps> & {
    className?: string;
  };

export type IconComponent = React.ComponentType<PropsWithClassName>;
