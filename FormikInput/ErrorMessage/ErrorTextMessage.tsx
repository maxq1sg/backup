import React, { FC } from 'react';
import styles from './ErrorMessage.module.scss';

const ErrorTextMessage: FC = ({ children }) => <div className={styles.message}>{children}</div>;

export default ErrorTextMessage;
