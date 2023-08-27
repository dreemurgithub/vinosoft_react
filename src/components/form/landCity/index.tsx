import {useState} from "react";
import { Button, Form, Input, Select, Radio  } from 'antd';
import styles from './styles.module.css'
import TableLayout from "./TableLayout";
import { PlusCircleOutlined, MinusOutlined } from '@ant-design/icons';


export default function LandCity(){


    const [showUp,setShow] = useState('none')
    return <>
        <div style={{border:'1px solid gray'}}>
            <div className={styles.lineForm2}>
                <span><b>Mã tài sản</b></span>
                <span style={{color:'#2862AF'}}>Ẩn thông tin</span>
            </div>
            <p></p>
            <div style={{display:'flex',gap:'1em'}}>
                <span>SBA.1928192</span>
                <span>SBA.1827191</span>
                <span>SBA.1827191</span>
            </div>
            <div style={{border:'1px solid black'}}>
                <div className={styles.lineForm2}>
                    <span><b>Đặc điểm thửa đất</b></span>
                    <span>Ẩn thông tin</span>
                </div>
                <p></p>
                <div style={{display:'flex',gap:'2em'}}>
                    <span>Hợp thửa: </span>
                    <Radio.Group name="radiogroup" defaultValue={1}>
                        <Radio value={true}>Có</Radio>
                        <Radio value={false}>Không</Radio>
                    </Radio.Group>
                </div>
                <div style={{display:'flex',gap:'2em'}}>
                    <span>Thửa đất 1 <PlusCircleOutlined style={{ backgroundColor:'blue',color:'white', borderRadius:'50%'} } /></span>
                    <span>Thửa đất 2 <MinusOutlined style={{ backgroundColor:'red',color:'white', borderRadius:'50%'} }/></span>
                    <span>Thửa đất 3 <MinusOutlined style={{ backgroundColor:'red',color:'white', borderRadius:'50%'} }/></span>
                    <span>Thửa đất 4 <MinusOutlined style={{ backgroundColor:'red',color:'white', borderRadius:'50%'} }/></span>
                </div>
                <TableLayout></TableLayout>
            </div>

        </div>
    </>
}
