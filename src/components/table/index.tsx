import React from 'react';
import { Table as T } from 'antd';
import type { TableProps } from 'antd';
import clsx from 'clsx';

import './style.scss';

const Table: React.FC<TableProps> = (props) => {
    return  (
        <T 
            {...props} 
            pagination={{position: ['bottomCenter'], ...props.pagination}}
            className={clsx("custom-table", props.className)}
        />
    );
};

export default Table;