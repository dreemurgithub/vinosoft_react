import {useEffect, useState} from "react";
import styles from "../landCity/styles.module.css";
import {Input, Select} from "antd";

export default function AreaInfor(){
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
                <th scope="col" colSpan={6} style={ {gridColumn:'span 6',textAlign:'left'} }>Thông tin hợp thửa</th>
            </tr>
            </thead>
            <tbody>

            <tr className={styles.tableSix}>
                <td>Kích thước mặt tiền (m)</td>
                <td className={styles.twoSix} colSpan={2}><Input placeholder="Hệ thống tính tổng các thửa và cho sửa" /></td>
                <td>Kích thước chiều dài (m)</td>
                <td className={styles.twoSix} colSpan={2}><Input placeholder="Hệ thống tính tổng các thửa và cho sửa" /></td>
            </tr>
            <tr className={styles.tableSix}>
                <td>Diện tích sử dụng riêng (m2)</td>
                <td className={styles.twoSix} colSpan={2}> - </td>
                <td>Diện tích sử dụng chung (m2)</td>
                <td className={styles.twoSix} colSpan={2}> - </td>
            </tr>
            <tr className={styles.tableSix}>
                <td>Diện tích khuôn viên (m2)</td>
                <td className={styles.twoSix} colSpan={2}> - </td>
                <td>Diện tích phù hợp quy hoạch (m2)</td>
                <td className={styles.twoSix} colSpan={2}> - </td>
            </tr>
            <tr className={styles.tableSix}>
                <td>Diện tích không phù hợp quy hoạch (m2)</td>
                <td className={styles.twoSix} colSpan={2}> - </td>
            </tr>
            <tr className={styles.tableSix}>
                <td>Ghi chú</td>
                <td style={{ gridColumn:'span 5'}} colSpan={5}><Input placeholder="Nhập"  /></td>
            </tr>
            </tbody>
        </table>
    </>
}
