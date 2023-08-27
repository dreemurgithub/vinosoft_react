import {useEffect, useState} from "react";
import styles from "../landCity/styles.module.css";
import {Input, Select} from "antd";
import FirstLandForm from "../../../hook/builder";

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

    const [currentForm, setForm] = useState({
        sothua: '',
        soToBanDo: '',
        hoSoPhapLyCity: localStorage.getItem('hoSoPhapLyCity'),
        thucTeCity: localStorage.getItem('thucTeCity'),
        hoSoPhapLyProvince: localStorage.getItem('hoSoPhapLyProvince'),
        thucTeProvince: localStorage.getItem('thucTeProvince'),

        hoSoPhapLyStreet: localStorage.getItem('hoSoPhapLyStreet') ? localStorage.getItem('hoSoPhapLyStreet') : '',
        thucTeStreet: localStorage.getItem('thucTeStreet') ? localStorage.getItem('thucTeStreet') : '',
        hoSoPhapLyDetail: localStorage.getItem('hoSoPhapLyDetail') ? localStorage.getItem('hoSoPhapLyDetail') : '',
        thucTeDetail: localStorage.getItem('thucTeDetail') ? localStorage.getItem('thucTeDetail') : '',
        hoSoPhapLyTown: localStorage.getItem('hoSoPhapLyTown') ? localStorage.getItem('hoSoPhapLyTown') : '',
        thucTeTown: localStorage.getItem('thucTeTown') ? localStorage.getItem('thucTeTown') : '',
        duongKhungGia: testNumString(localStorage.getItem('duongKhungGia')) ? getNumAllString(localStorage.getItem('duongKhungGia')) : 0,
        khoangCachDuongChinh: testNumString(localStorage.getItem('khoangCachDuongChinh')) ? getNumAllString(localStorage.getItem('khoangCachDuongChinh')) : 0,
        loaiDuongTiepGiap: localStorage.getItem('loaiDuongTiepGiap') ? localStorage.getItem('loaiDuongTiepGiap') : '',
        khoangCachSTB: testNumString(localStorage.getItem('khoangCachSTB')) ? getNumAllString(localStorage.getItem('khoangCachSTB')) : 0,
        viTri: localStorage.getItem('viTri') ? localStorage.getItem('viTri') : '',
        viTriKhungGia: testNumString(localStorage.getItem('viTriKhungGia')) ? getNumAllString(localStorage.getItem('viTriKhungGia')) : 0,
        doRongDuong1: testNumString(localStorage.getItem('doRongDuong1')) ? getNumAllString(localStorage.getItem('doRongDuong1')) : 0,
        doRongDuong2: testNumString(localStorage.getItem('doRongDuong2')) ? getNumAllString(localStorage.getItem('doRongDuong2')) : 0,
        khuVuc: localStorage.getItem('khuVuc') ? localStorage.getItem('khuVuc') : '',
        ghiChu: localStorage.getItem('ghiChu') ? localStorage.getItem('ghiChu') : '',

        huongChinh: localStorage.getItem('huongChinh') ? localStorage.getItem('huongChinh') : '',
        hinhDang: localStorage.getItem('hinhDang') ? localStorage.getItem('hinhDang') : '',
        soMatTien: localStorage.getItem('soMatTien') ? localStorage.getItem('soMatTien') : '',
        kichThuocMatTien: testNumString(localStorage.getItem('kichThuocMatTien')) ? getNumAllString(localStorage.getItem('kichThuocMatTien')) : 0,
        kichThuocChieuDai: testNumString(localStorage.getItem('kichThuocChieuDai')) ? getNumAllString(localStorage.getItem('kichThuocChieuDai')) : 0,
        dienTichKhuonVien: testNumString(localStorage.getItem('dienTichKhuonVien')) ? getNumAllString(localStorage.getItem('dienTichKhuonVien')) : 0,
        dienTichPhuHopQuyHoach: testNumString(localStorage.getItem('dienTichPhuHopQuyHoach')) ? getNumAllString(localStorage.getItem('dienTichPhuHopQuyHoach')) : 0,
        dienTichKhongPhuHopQuyHoach: testNumString(localStorage.getItem('dienTichKhongPhuHopQuyHoach')) ? getNumAllString(localStorage.getItem('dienTichKhongPhuHopQuyHoach')) : 0,
        dienTichSuDungRieng: testNumString(localStorage.getItem('dienTichSuDungRieng')) ? getNumAllString(localStorage.getItem('dienTichSuDungRieng')) : 0,
        dienTichSuDungChung: testNumString(localStorage.getItem('dienTichSuDungChung')) ? getNumAllString(localStorage.getItem('dienTichSuDungChung')) : 0,
    })
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
