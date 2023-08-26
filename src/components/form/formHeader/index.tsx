import React,{useState} from 'react';
import { DownloadOutlined } from '@ant-design/icons';
import type { SizeType } from 'antd/es/config-provider/SizeContext';
import { Tabs, Button,  Space } from 'antd';

import styles from './styles.module.css'
export default function FormHeader(){
    const onChange = (key: string) => {
        const element1 : HTMLElement | null  = document.querySelector(`[data-node-key="1"]`)
        const element2 : HTMLElement | null  = document.querySelector(`[data-node-key="2"]`)
        const element3 : HTMLElement | null  = document.querySelector(`[data-node-key="3"]`)
        const element4 : HTMLElement | null  = document.querySelector(`[data-node-key="4"]`)
        if(element1 && element2 && element3 && element4){
            element1.style.backgroundColor = '';
            element2.style.backgroundColor = '';
            element3.style.backgroundColor = '';
            element4.style.backgroundColor = '';
            element1.style.color = '';
            element2.style.color = '';
            element3.style.color = '';
            element4.style.color = '';
        }

        const element : HTMLElement | null = document.querySelector(`[data-node-key="${key}"]`);
        if(element){
            element.style.backgroundColor = 'white'
            element.style.color = '#2685C9'
        }

    };
    const items = [{label:'Kiểm tra hồ sơ',key: 1 , children: 'something' },{label:'Thông tin tài sản',key: 2 , children: 'something' },{label:'Định vị hình ảnh',key: 3 , children: 'something' },{label:'Giá trị tài sản',key: 4 , children: 'something' }]
    const [size, setSize] = useState<SizeType>('small'); // default is 'middle'

    return <>
        <div>

            <Space direction="vertical">
                <Space wrap>
                    <h4>Thông tin hồ sơ</h4>
                    <span></span>
                    <Button type="dashed" shape="round" icon={<DownloadOutlined />} size={size}>Phí</Button>
                    <Button type="dashed" icon={<DownloadOutlined />} size={size}>Phân giao lại</Button>
                    <Button type="dashed" icon={<DownloadOutlined />} size={size}>Từ chối</Button>

                    <Button type="dashed" shape="round" icon={<DownloadOutlined />} size={size}>Y/C Bổ sung</Button>
                    <Button type="dashed" icon={<DownloadOutlined />} size={size}>Lịch hẹn</Button>
                    <Button type="dashed" icon={<DownloadOutlined />} size={size}>Xuất BBKS</Button>

                    <Button type="dashed" shape="round" icon={<DownloadOutlined />} size={size}>Xuất tờ trình</Button>
                    <Button type="primary" icon={<DownloadOutlined />} size={size}>Lưu</Button>
                    <Button type="primary" icon={<DownloadOutlined />} size={size}>Hoàn thành KS</Button>
                </Space>
            </Space>
            <div className={styles.tabContainer}>
                <Tabs
                    onChange={onChange}
                    type="card"
                    items={new Array(4).fill(null).map((_, i) => {
                        const id = String(i + 1);
                        return {
                            label: items[i].label,
                            key: id,
                        };
                    })}
                />
            </div>
            <div className={styles.listGrid}>
                <span>Mã đề nghị</span>
                <span><b>STB.23.235671</b></span>
                <span>Số tờ trình</span>
                <span><b>0000001/23/BĐS-TD</b></span>
                <span>Thời gian gửi yêu cầu</span>
                <span><b>15/08/2023 15.30.00</b></span>
            </div>
        </div>
    </>
}
