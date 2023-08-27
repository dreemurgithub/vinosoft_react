import {useContext, useEffect, useState} from "react";
import styles from "../landCity/styles.module.css";
import {Input, Select} from "antd";
import FirstLandForm from "../../../hook/builder";
import MyContext from "../../../hook/context";

export default function AreaInfor() {
    const [widthOneSix, setOneSix] = useState(0)

    function editSize() {
        const landCity: HTMLElement | null = document.querySelector("#landCity")
        const width = landCity ? landCity.offsetWidth / 6 - 20 : 0
        setOneSix(width)
    }

    useEffect(editSize, [])
    window.addEventListener('resize', editSize)
    const regexNum = /^[0-9]+$/;

    function testNumString(textString: string | null) {
        if (!textString) return false;
        return regexNum.test(textString)
    }

    function getNumAllString(textString: string | null) {
        if (!textString) return 0
        if (regexNum.test(textString)) {
            return parseInt(textString)
        }
        return 0;
    }

    const [currentForm, setForm] = useContext(MyContext) as any
    return <>
        <table style={{width: '100%', border: '1px solid whitesmoke', margin: '0.5em'}}>
            <thead style={{width: '100%'}}>
            <tr className={styles.tableSix}>
                <th scope="col" colSpan={6} style={{gridColumn: 'span 6', textAlign: 'left'}}>Thông tin hợp thửa</th>
            </tr>
            </thead>
            <tbody>

            <tr className={styles.tableSix}>
                <td>Kích thước mặt tiền (m)</td>
                <td className={styles.twoSix} colSpan={2}><Input placeholder="STB nhập và cho sửa"
                                                                 value={currentForm.kichThuocMatTien}
                                                                 onChange={(event) => {
                                                                     setForm({
                                                                         ...currentForm,
                                                                         kichThuocMatTien: getNumAllString(event.target.value)
                                                                     })
                                                                     FirstLandForm.set_kichThuocMatTien(getNumAllString(event.target.value))
                                                                 }}
                /></td>
                <td>Kích thước chiều dài (m)</td>
                <td className={styles.twoSix} colSpan={2}><Input placeholder="STB nhập và cho sửa"
                                                                 value={currentForm.kichThuocChieuDai}
                                                                 onChange={(event) => {
                                                                     setForm({
                                                                         ...currentForm,
                                                                         kichThuocChieuDai: getNumAllString(event.target.value)
                                                                     })
                                                                     FirstLandForm.set_kichThuocChieuDai(getNumAllString(event.target.value))
                                                                 }}
                /></td>
            </tr>
            <tr className={styles.tableSix}>
                <td>Diện tích sử dụng riêng (m2)</td>
                <td className={styles.twoSix} colSpan={2}> -</td>
                <td>Diện tích sử dụng chung (m2)</td>
                <td className={styles.twoSix} colSpan={2}> -</td>
            </tr>
            <tr className={styles.tableSix}>
                <td>Diện tích khuôn viên (m2)</td>
                <td className={styles.twoSix} colSpan={2}> -</td>
                <td>Diện tích phù hợp quy hoạch (m2)</td>
                <td className={styles.twoSix} colSpan={2}> -</td>
            </tr>
            <tr className={styles.tableSix}>
                <td>Diện tích không phù hợp quy hoạch (m2)</td>
                <td className={styles.twoSix} colSpan={2}> -</td>
            </tr>
            <tr className={styles.tableSix}>
                <td>Ghi chú</td>
                <td style={{gridColumn: 'span 5'}} colSpan={5}>
                    <Input placeholder="HT nhập và cho sửa"
                           value={`${currentForm.ghiChu}`}
                           onChange={(event) => {
                               setForm({...currentForm, ghiChu: event.target.value})
                               FirstLandForm.set_ghiChu(event.target.value)
                           }}
                    /></td>
            </tr>
            </tbody>
        </table>
    </>
}
