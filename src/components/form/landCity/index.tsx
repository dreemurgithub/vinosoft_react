import {useState} from "react";
import { Button, Form, Input, Select, Radio  } from 'antd';
import styles from './styles.module.css'
import TableLayout from "./TableLayout";
import { PlusCircleOutlined, MinusOutlined } from '@ant-design/icons';
import FirstLandForm from "../../../hook/builder";

export default function LandCity(){
    const [currentForm,setForm] = useState({
        soThua:localStorage.getItem('soThua')? `${localStorage.getItem('soThua')}` : '',
        soToBanDo:localStorage.getItem('soToBanDo')?  `${localStorage.getItem('soToBanDo')}` : '',
        hopThua: localStorage.getItem('hopThua') === 'true' || localStorage.getItem('hopThua') === 'false' ?
            localStorage.getItem('hopThua') === 'true' : null
    })


    const [showUp,setShow] = useState('none')
    return <>
        <div style={{border:'1px solid whitesmoke',margin:'0.5em'}}>
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
            <div style={{border:'1px solid whitesmoke',margin:'0.5em'}}>
                <div className={styles.lineForm2}>
                    <span><b>Đặc điểm thửa đất</b></span>
                    <span>Ẩn thông tin</span>
                </div>
                <p></p>
                <div style={{display:'flex',gap:'2em'}}>
                    <span>Hợp thửa: </span>
                    <Radio.Group name="radiogroup" value={currentForm.hopThua} onChange={(event)=>{
                        setForm({...currentForm,hopThua: event.target.value})
                        FirstLandForm.set_hopThua(event.target.value)
                    } }>
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
                <table style={{width:'100%'}}>
                    <tbody>
                        <tr className={styles.tableSix}>
                            <td>Số thửa</td>
                            <td className={styles.twoSix} colSpan={2}>
                                <Input placeholder="HT nhập và cho sửa" value={currentForm.soThua}
                                       onChange={(event)=>{
                                            FirstLandForm.set_soThua(event.target.value)
                                            setForm({...currentForm,soThua: event.target.value})
                                       }}
                                />
                            </td>
                            <td>Số tờ bản đồ</td>
                            <td className={styles.twoSix} colSpan={2}>
                                <Input placeholder="HT nhập và cho sửa" value={currentForm.soToBanDo}
                                        onChange={(event)=>{
                                        FirstLandForm.set_soToBanDo(event.target.value)
                                        setForm({...currentForm,soToBanDo: event.target.value})
                                        }}
                            /></td>
                        </tr>
                    </tbody>
                </table>
                <TableLayout></TableLayout>
            </div>

        </div>
    </>
}
