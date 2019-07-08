// @flow
import React from 'react';
import moment from 'moment';
import styles from './Meta.module.scss';
import 'moment/locale/ko';
moment.locale('ko');

type Props = {
  date: string
};

const Meta = ({ date }: Props) => (
  <div className={styles['meta']}>
    <p className={styles['meta__date']}>글쓴 날 {moment(date).format('ll')}</p>
  </div>
);

export default Meta;
