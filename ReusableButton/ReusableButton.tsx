import { Button } from '@material-ui/core';
import React, { FC } from 'react';

const ReusableButton: FC = ({ children }) => <Button type="submit" fullWidth variant="contained">{children}</Button>;

export default ReusableButton;
