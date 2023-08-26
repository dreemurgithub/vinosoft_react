import React from 'react';
import { Breadcrumb } from 'antd';
import styles from './styles.module.css'
export default function Header(){
    return <>
        <div className={styles.container}>
            <Breadcrumb
                items={[
                    {
                        title: 'Hồ sơ',
                    },
                    {
                        title: 'Hồ sơ đến',
                    },
                    {
                        title: 'Thông tin hồ sơ',
                    },
                ]}
            />
        </div>
    </>
}
