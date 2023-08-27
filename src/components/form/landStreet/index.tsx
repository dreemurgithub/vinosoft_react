import styles from "../landCity/styles.module.css";
import {Input, Select, Space} from "antd";
import {useEffect, useState} from "react";

export default function LandStreet(){
    const [widthOneSix,setOneSix] = useState(0)
    function editSize(){
        const landCity : HTMLElement | null = document.querySelector("#landCity")
        const width = landCity? landCity.offsetWidth/6 - 20 : 0
        setOneSix(width)
    }
    useEffect(editSize,[])
    window.addEventListener('resize',editSize)
    return <>
        <table style={{width:'100%'}}>
            <thead style={{width:'100%'}}>
            <tr className={styles.tableSix}>
                <th scope="col" colSpan={6} style={ {gridColumn:'span 6',display:'flex',justifyContent:'space-between'} }>
                    <span>Đất tại đô thị</span>
                    <span>Ẩn thông tin</span>
                </th>

            </tr>
            </thead>
            <tbody>

            <tr className={styles.tableSix}></tr>
            <tr className={styles.tableSix}>
                <td>Mục đích sử dụng đất</td>
                <td className={styles.twoSix} colSpan={2}><Select
                    defaultValue="lucy"
                    style={{ width: widthOneSix * 2 + 20 }}
                    options={[
                        { value: 'jack', label: 'Jack' },
                        { value: 'lucy', label: 'Lucy' },
                        { value: 'Yiminghe', label: 'yiminghe' },
                        { value: 'disabled', label: 'Disabled', disabled: true },
                    ]}
                /></td>
                <td>Nguồn gốc sử dụng đất</td>
                <td className={styles.twoSix} colSpan={2}><Input placeholder="Basic usage" /></td>
            </tr>

            <tr className={styles.tableSix}>
                <td>Thời gian sử dụng</td>
                <td className={styles.twoSix} colSpan={2}><Select
                    defaultValue="Mặt tiền"
                    style={{ width: widthOneSix * 2 + 20 }}
                    options={[
                        { value: 'jack', label: 'Jack' },
                        { value: 'Mặt tiền', label: 'Mặt tiền' },
                        { value: 'Yiminghe', label: 'yiminghe' },
                        { value: 'disabled', label: 'Disabled', disabled: true },
                    ]}
                /></td>

            </tr>


            </tbody>
        </table>
        <table style={{width:'100%'}}>
            <thead style={{width:'100%'}}>
            <tr className={styles.tableThree}>
                <th scope="col">Đặc điểm</th>
                <th scope="col">HSPL</th>
                <th scope="col">Thực tế</th>

            </tr>
            </thead>
            <tr className={styles.tableThree}>
                <td>Diện tích khuôn viên (m2)</td>
                <td><Input placeholder="STB nhập và cho sửa" /></td>
                <td><Input placeholder="Hệ thống tự nhập và cho sửa" /></td>
            </tr>
            <tr className={styles.tableThree}>
                <td>Diện tích phù hợp quy hoạch (m2)</td>
                <td><Input placeholder="STB nhập và cho sửa" /></td>
                <td><Input placeholder="Hệ thống tự nhập và cho sửa" /></td>
            </tr>
            <tr className={styles.tableThree}>
                <td>Diện tích không phù hợp quy hoạch (m2)</td>
                <td><Input placeholder="STB nhập và cho sửa" /></td>
                <td><Input placeholder="Hệ thống tự nhập và cho sửa" /></td>
            </tr>
            <tr className={styles.tableThree}>
                <td>Diện tích sử dụng riêng (m2)</td>
                <td><Input placeholder="STB nhập và cho sửa" /></td>
                <td><Input placeholder="Hệ thống tự nhập và cho sửa" /></td>
            </tr>
            <tr className={styles.tableThree}>
                <td>Diện tích sử dụng chung (m2)</td>
                <td><Input placeholder="STB nhập và cho sửa" /></td>
                <td><Input placeholder="Hệ thống tự nhập và cho sửa" /></td>
            </tr>
        </table>
    </>
}
