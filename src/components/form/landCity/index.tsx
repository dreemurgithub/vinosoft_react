import {useState} from "react";
import { Button, Form, Input, Select } from 'antd';
import styles from './styles.module.css'
import TableLayout from "./TableLayout";


export default function LandCity(){


    const [showUp,setShow] = useState('none')
    return <>
        <div>
            <div className={styles.lineForm2}>
                <span>Mã tài sản</span>
                <span style={{color:'#2862AF'}}>Ẩn thông tin</span>
            </div>

                <div className={styles.lineForm2}></div>
                <TableLayout></TableLayout>
        </div>
    </>
}
