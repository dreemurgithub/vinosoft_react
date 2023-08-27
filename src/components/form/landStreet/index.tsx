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
    return <div style={{border:'1px solid whitesmoke',margin:'0.5em'}}>
        <table style={{width:'100%'}}>
            <thead style={{width:'100%'}}>
            <tr className={styles.tableSix}>
                <th scope="col" colSpan={6} style={ {gridColumn:'span 6',display:'flex',justifyContent:'space-between'} }>
                    <span>Đất ở tại đô thị</span>
                    <span>Ẩn thông tin</span>
                </th>
            </tr>
            </thead>
            <tbody>
            <tr className={styles.tableSix}>
                <td>Mục đích sử dụng đất</td>
                <td className={styles.twoSix} colSpan={2}><Select
                    defaultValue="Đất ở tại đô thị"
                    style={{ width: widthOneSix * 2 + 20 }}
                    options={[
                        { value: 'Đất nông nghiệp', label: 'Đất nông nghiệp' },
                        { value: 'Đất ở tại đô thị', label: 'Đất ở tại đô thị' },
                    ]}
                /></td>
                <td>Nguồn gốc sử dụng đất</td>
                <td className={styles.twoSix} colSpan={2}><Input placeholder="Basic usage" /></td>
            </tr>

            <tr className={styles.tableSix}>
                <td>Thời gian sử dụng</td>
                <td className={styles.twoSix} colSpan={2}><Select
                    defaultValue="Mặt tiền"
                    placeholder={'HT nhập và cho sửa'}
                    style={{ width: widthOneSix * 2 + 20 }}
                    options={[
                        { value: 'jack', label: 'Jack' },
                        { value: 'Mặt tiền', label: 'Mặt tiền' },
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
    </div>
}
