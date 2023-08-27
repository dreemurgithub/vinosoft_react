import styles from './styles.module.css'
import {CityToProvince, ProvinceToTown} from "../../../hook/area";
import {useState, ChangeEvent, useEffect} from "react";
import {Select, Space, Input, InputNumber} from 'antd';
import FirstLandForm from "../../../hook/builder";

const citys = Object.keys(CityToProvince)

export default function TableLayout() {

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

    function changeCity(value: string) {
        if (value) {
            FirstLandForm.set_hoSoPhapLyCity(value)
            setForm({...currentForm, hoSoPhapLyCity: value})
        } else {
            FirstLandForm.set_hoSoPhapLyCity("")
            setForm({...currentForm, hoSoPhapLyCity: ""})
        }
    }

    function changeProvince(value: string) {
        if (value) {
            FirstLandForm.set_hoSoPhapLyProvince(value)
            setForm({...currentForm, hoSoPhapLyProvince: value})
        } else {
            FirstLandForm.set_hoSoPhapLyProvince('')
            setForm({...currentForm, hoSoPhapLyProvince: ''})
        }
    }

    return <>
        <table style={{width: '100%'}} id={"landCity"}>
            <thead style={{width: '100%'}}>
            <tr className={styles.tableSix}>
                <th scope="col">Địa chỉ tài sản</th>
                <th scope="col">Tỉnh/Thành phố</th>
                <th scope="col">Quận/huyện/Thị xã</th>
                <th scope="col">Xã/Phường/Thị trấn</th>
                <th scope="col">Đường phố</th>
                <th scope="col">Chi tiết</th>
            </tr>
            </thead>
            <tbody>
            <tr className={styles.tableSix}>
                <td>Hồ sơ pháp lý</td>
                <td>
                    <Space wrap>
                        <Select
                            placeholder={'HT nhập và cho sửa'}
                            style={{width: widthOneSix}}
                            value={currentForm.hoSoPhapLyCity}
                            onChange={changeCity}
                            options={[{value: '', label: ''}, ...citys.map((city) => {
                                return {value: city, label: city}
                            })]}
                        />
                    </Space>
                </td>

                <td><Space wrap>
                    <Select
                        placeholder={'HT nhập và cho sửa'}
                        style={{width: widthOneSix}}
                        onChange={changeProvince}
                        value={currentForm.hoSoPhapLyProvince}
                        options={currentForm.hoSoPhapLyCity ? [{
                            value: '',
                            label: ''
                        }, ...CityToProvince[currentForm.hoSoPhapLyCity].map((province: string) => {
                            return {value: province, label: province}
                        })] : [{value: '', label: ''}]}
                    />
                </Space></td>
                <td>
                    <Space wrap>
                        <Select
                            placeholder={'HT nhập và cho sửa'}
                            style={{width: widthOneSix}}
                            value={FirstLandForm.hoSoPhapLyTown}
                            onChange={(value) => {
                                setForm({...currentForm, hoSoPhapLyTown: value})
                                FirstLandForm.set_hoSoPhapLyTown(value)
                            }}
                            options={currentForm.hoSoPhapLyProvince ? [{
                                value: '',
                                label: ''
                            }, ...ProvinceToTown[currentForm.hoSoPhapLyProvince].map((province: string) => {
                                return {value: province, label: province}
                            })] : [{value: '', label: ''}]}
                        />
                    </Space>
                </td>
                <td><Input placeholder="HT nhập và cho sửa"
                           value={`${currentForm.hoSoPhapLyStreet}`}
                           onChange={(event) => {
                               setForm({...currentForm, hoSoPhapLyStreet: event.target.value})
                               FirstLandForm.set_hoSoPhapLyStreet(event.target.value)
                           }}
                /></td>
                <td><Input placeholder="HT nhập và cho sửa"
                           value={`${currentForm.hoSoPhapLyDetail}`}
                           onChange={(event) => {
                               setForm({...currentForm, hoSoPhapLyDetail: event.target.value})
                               FirstLandForm.set_hoSoPhapLyDetail(event.target.value)
                           }}
                /></td>
            </tr>
            <tr className={styles.tableSix}>
                <td>Thực tế</td>
                <td><Space wrap>
                    <Select
                        style={{width: widthOneSix}}
                        placeholder={'HT nhập và cho sửa'}
                        onChange={(value) => {
                            setForm({...currentForm, thucTeCity: value})
                            FirstLandForm.set_thucTeCity(value)
                        }}
                        value={currentForm.thucTeCity}
                        options={[{value: '', label: ''}, ...citys.map((city) => {
                            return {value: city, label: city}
                        })]}
                    />
                </Space></td>
                <td><Select
                    style={{width: widthOneSix}}
                    placeholder={'HT nhập và cho sửa'}
                    onChange={(value) => {
                        setForm({...currentForm, thucTeProvince: value})
                        FirstLandForm.set_thucTeProvince(value)
                    }}
                    value={currentForm.thucTeProvince}
                    options={currentForm.thucTeCity ? [{
                        value: '',
                        label: ''
                    }, ...CityToProvince[currentForm.thucTeCity].map((province: string) => {
                        return {value: province, label: province}
                    })] : [{value: '', label: ''}]}
                /></td>
                <td><Space wrap>
                    <Select
                        style={{width: widthOneSix}}
                        placeholder={'HT nhập và cho sửa'}
                        onChange={(value) => {
                            setForm({...currentForm, thucTeTown: value})
                            FirstLandForm.set_thucTeTown(value)
                        }}
                        value={currentForm.thucTeTown}
                        options={currentForm.thucTeProvince ? [{
                            value: '',
                            label: ''
                        }, ...ProvinceToTown[currentForm.thucTeProvince].map((town: string) => {
                            return {value: town, label: town}
                        })] : [{value: '', label: ''}]}
                    />
                </Space></td>
                <td><Input placeholder="HT nhập và cho sửa"
                           value={`${currentForm.thucTeStreet}`}
                           onChange={(event) => {
                               setForm({...currentForm, thucTeStreet: event.target.value})
                               FirstLandForm.set_thucTeStreet(event.target.value)
                           }}
                /></td>
                <td><Input placeholder="HT nhập và cho sửa"
                           value={`${currentForm.thucTeDetail}`}
                           onChange={(event) => {
                               setForm({...currentForm, thucTeDetail: event.target.value})
                               FirstLandForm.set_thucTeDetail(event.target.value)
                           }}
                /></td>
            </tr>
            <tr className={styles.tableSix}>
                <td>Đoạn đường trong khung giá</td>
                <td className={styles.twoSix} colSpan={2}>
                    <Select
                        style={{width: widthOneSix * 2 + 20}}
                        placeholder={'HT nhập và cho sửa'}
                        value={currentForm.duongKhungGia}
                        onChange={(value) => {
                            setForm({...currentForm, duongKhungGia: value})
                            FirstLandForm.set_duongKhungGia(value)
                        }}
                        options={[
                            {value: 100, label: '100 triệu'},
                            {value: 500, label: '500 triệu'},
                            {value: 1000, label: '1 tỉ'},
                        ]}
                    /></td>
                <td>Khoảng cách đến đường chính (m)</td>
                <td className={styles.twoSix} colSpan={2}>
                    <Input placeholder="HT nhập và cho sửa"
                           value={currentForm.khoangCachDuongChinh}
                           onChange={(event) => {
                               setForm({...currentForm, khoangCachDuongChinh: getNumAllString(event.target.value)})
                               FirstLandForm.set_khoangCachDuongChinh(getNumAllString(event.target.value))
                           }}
                    /></td>
            </tr>
            <tr className={styles.tableSix}>
                <td>Loại đường tiếp giáp</td>
                <td className={styles.twoSix} colSpan={2}><Select
                    value={currentForm.loaiDuongTiepGiap}
                    onChange={(value) => {
                        FirstLandForm.set_loaiDuongTiepGiap(value)
                        setForm({...currentForm, loaiDuongTiepGiap: value})
                    }}
                    style={{width: widthOneSix * 2 + 20}}
                    placeholder={'HT nhập và cho sửa'}
                    options={[
                        {value: 'Đường nội thành', label: 'Đường nội thành'},
                        {value: 'Đường quốc lộ', label: 'Đường quốc lộ'},
                        {value: 'Đường kiệt', label: 'Đường kiệt'},
                    ]}
                /></td>
                <td>Khoảng cách tới STB gần nhất (m)</td>
                <td className={styles.twoSix} colSpan={2}>
                    <Input placeholder="HT nhập và cho sửa"
                           value={currentForm.khoangCachSTB}
                           onChange={(event) => {
                               setForm({...currentForm, khoangCachSTB: getNumAllString(event.target.value)})
                               FirstLandForm.set_khoangCachSTB(getNumAllString(event.target.value))
                           }}/>
                </td>
            </tr>
            <tr className={styles.tableSix}>
                <td>Vị trí</td>
                <td className={styles.twoSix} colSpan={2}><Select
                    style={{width: widthOneSix * 2 + 20}}
                    onChange={(value) => {
                        setForm({...currentForm, viTri: value})
                        FirstLandForm.set_viTri(value)
                    }}
                    value={currentForm.viTri}
                    options={[
                        {value: 'Kiệt', label: 'Kiệt'},
                        {value: 'Mặt tiền', label: 'Mặt tiền'},
                    ]}
                /></td>
                <td>Độ rộng đường (m)</td>
                <td><Input placeholder="HT nhập và cho sửa"
                           value={currentForm.doRongDuong1}
                           onChange={(event) => {
                               setForm({...currentForm, doRongDuong1: getNumAllString(event.target.value)})
                               FirstLandForm.set_doRongDuong1(getNumAllString(event.target.value))
                           }}
                />
                </td>
                <td><Input placeholder="HT nhập và cho sửa"
                           value={currentForm.doRongDuong2}
                           onChange={(event) => {
                               setForm({...currentForm, doRongDuong2: getNumAllString(event.target.value)})
                               FirstLandForm.set_doRongDuong2(getNumAllString(event.target.value))
                           }}
                /></td>

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
            <tr className={styles.tableSix}>
                <td>Khu vực</td>
                <td className={styles.twoSix} colSpan={2}><Select
                    value={`${currentForm.khuVuc}`}
                    onChange={(value) => {
                        setForm({...currentForm, khuVuc: value})
                        FirstLandForm.set_khuVuc(value)
                    }}
                    placeholder={'HT nhập và cho sửa'}
                    style={{width: widthOneSix * 2 + 20}}
                    options={[
                        {value: 'Nội thành', label: 'Nội thành'},
                        {value: 'Thị xã', label: 'Thị xã'},
                    ]}
                /></td>
                <td>Vị trí khung giá</td>
                <td className={styles.twoSix} colSpan={2}><Select
                    onChange={(value) => {
                        setForm({...currentForm, viTriKhungGia: value})
                        FirstLandForm.set_viTriKhungGia(value)
                    }}
                    value={currentForm.viTriKhungGia}
                    style={{width: widthOneSix * 2 + 20}}
                    placeholder={'HT nhập và cho sửa'}
                    options={[
                        {value: 100, label: '100 triệu'},
                        {value: 500, label: '500 triệu'},
                        {value: 1000, label: '1 tỉ'},
                    ]}
                /></td>
            </tr>

            </tbody>
        </table>

        <table style={{width: '100%'}}>
            <thead style={{width: '100%'}}>
            <tr className={styles.tableThree}>
                <th scope="col">Đặc điểm</th>
                <th scope="col">HSPL</th>
                <th scope="col">Thực tế</th>
            </tr>
            </thead>
            <tbody>
            <tr className={styles.tableThree}>
                <td>Hướng chính</td>
                <td><Input placeholder="STB nhập và cho sửa"
                           value={`${currentForm.huongChinh}`}
                           onChange={(event) => {
                               setForm({...currentForm, huongChinh: event.target.value})
                               FirstLandForm.set_huongChinh(event.target.value)
                           }}
                /></td>
                <td><Input placeholder="Hệ thống tự nhập và cho sửa"
                           value={`${currentForm.huongChinh}`}
                           onChange={(event) => {
                               setForm({...currentForm, huongChinh: event.target.value})
                               FirstLandForm.set_huongChinh(event.target.value)
                           }}
                /></td>
            </tr>
            <tr className={styles.tableThree}>
                <td>Hình dạng</td>
                <td><Input placeholder="STB nhập và cho sửa"
                           value={`${currentForm.hinhDang}`}
                           onChange={(event) => {
                               setForm({...currentForm, hinhDang: event.target.value})
                               FirstLandForm.set_hinhDang(event.target.value)
                           }}
                /></td>
                <td><Input placeholder="Hệ thống tự nhập và cho sửa"
                           value={`${currentForm.hinhDang}`}
                           onChange={(event) => {
                               setForm({...currentForm, hinhDang: event.target.value})
                               FirstLandForm.set_hinhDang(event.target.value)
                           }}
                /></td>
            </tr>
            <tr className={styles.tableThree}>
                <td>Số mặt tiền/mặt thoáng</td>
                <td><Input placeholder="STB nhập và cho sửa"
                           value={`${currentForm.soMatTien}`}
                           onChange={(event) => {
                               setForm({...currentForm, soMatTien: event.target.value})
                               FirstLandForm.set_soMatTien(event.target.value)
                           }}
                /></td>
                <td><Input placeholder="Hệ thống tự nhập và cho sửa"
                           value={`${currentForm.soMatTien}`}
                           onChange={(event) => {
                               setForm({...currentForm, soMatTien: event.target.value})
                               FirstLandForm.set_soMatTien(event.target.value)
                           }}
                /></td>
            </tr>
            <tr className={styles.tableThree}>
                <td>Kích thước mặt tiền(m)</td>
                <td><Input placeholder="STB nhập và cho sửa"
                           value={currentForm.kichThuocMatTien}
                           onChange={(event) => {
                               setForm({...currentForm, kichThuocMatTien: getNumAllString(event.target.value)})
                               FirstLandForm.set_kichThuocMatTien(getNumAllString(event.target.value))
                           }}
                /></td>
                <td><Input placeholder="Hệ thống tự nhập và cho sửa"
                           value={currentForm.kichThuocMatTien}
                           onChange={(event) => {
                               setForm({...currentForm, kichThuocMatTien: getNumAllString(event.target.value)})
                               FirstLandForm.set_kichThuocMatTien(getNumAllString(event.target.value))
                           }}
                /></td>
            </tr>
            <tr className={styles.tableThree}>
                <td>Kích thước chiều dài(m)</td>
                <td><Input placeholder="STB nhập và cho sửa"
                           value={currentForm.kichThuocChieuDai}
                           onChange={(event) => {
                               setForm({...currentForm, kichThuocChieuDai: getNumAllString(event.target.value)})
                               FirstLandForm.set_kichThuocChieuDai(getNumAllString(event.target.value))
                           }}
                /></td>
                <td><Input placeholder="Hệ thống tự nhập và cho sửa"
                           value={currentForm.kichThuocChieuDai}
                           onChange={(event) => {
                               setForm({...currentForm, kichThuocChieuDai: getNumAllString(event.target.value)})
                               FirstLandForm.set_kichThuocChieuDai(getNumAllString(event.target.value))
                           }}
                /></td>
            </tr>
            <tr className={styles.tableThree}>
                <td>Diện tích khuôn viên(m2)</td>
                <td><Input placeholder="STB nhập và cho sửa"
                           value={currentForm.dienTichKhuonVien}
                           onChange={(event) => {
                               setForm({...currentForm, dienTichKhuonVien: getNumAllString(event.target.value)})
                               FirstLandForm.set_dienTichKhuonVien(getNumAllString(event.target.value))
                           }}
                /></td>
                <td><Input placeholder="Hệ thống tự nhập và cho sửa"
                           value={currentForm.dienTichKhuonVien}
                           onChange={(event) => {
                               setForm({...currentForm, dienTichKhuonVien: getNumAllString(event.target.value)})
                               FirstLandForm.set_dienTichKhuonVien(getNumAllString(event.target.value))
                           }}
                /></td>
            </tr>
            <tr className={styles.tableThree}>
                <td>Diện tích phù hợp quy hoạch(m2)</td>
                <td><Input placeholder="STB nhập và cho sửa"
                           value={currentForm.dienTichPhuHopQuyHoach}
                           onChange={(event) => {
                               setForm({...currentForm, dienTichPhuHopQuyHoach: getNumAllString(event.target.value)})
                               FirstLandForm.set_dienTichPhuHopQuyHoach(getNumAllString(event.target.value))
                           }}
                /></td>
                <td><Input placeholder="Hệ thống tự nhập và cho sửa"
                           value={currentForm.dienTichPhuHopQuyHoach}
                           onChange={(event) => {
                               setForm({...currentForm, dienTichPhuHopQuyHoach: getNumAllString(event.target.value)})
                               FirstLandForm.set_dienTichPhuHopQuyHoach(getNumAllString(event.target.value))
                           }}
                /></td>
            </tr>
            <tr className={styles.tableThree}>
                <td>Diện tích không phù hợp quy hoạch(m2)</td>
                <td><Input placeholder="STB nhập và cho sửa"
                           value={currentForm.dienTichKhongPhuHopQuyHoach}
                           onChange={(event) => {
                               setForm({
                                   ...currentForm,
                                   dienTichKhongPhuHopQuyHoach: getNumAllString(event.target.value)
                               })
                               FirstLandForm.set_dienTichKhongPhuHopQuyHoach(getNumAllString(event.target.value))
                           }}
                /></td>
                <td><Input placeholder="Hệ thống tự nhập và cho sửa"
                           value={currentForm.dienTichKhongPhuHopQuyHoach}
                           onChange={(event) => {
                               setForm({
                                   ...currentForm,
                                   dienTichKhongPhuHopQuyHoach: getNumAllString(event.target.value)
                               })
                               FirstLandForm.set_dienTichKhongPhuHopQuyHoach(getNumAllString(event.target.value))
                           }}
                /></td>
            </tr>
            <tr className={styles.tableThree}>
                <td>Diện tích sử dụng riêng(m2)</td>
                <td><Input placeholder="STB nhập và cho sửa"
                           value={currentForm.dienTichSuDungRieng}
                           onChange={(event) => {
                               setForm({...currentForm, dienTichSuDungRieng: getNumAllString(event.target.value)})
                               FirstLandForm.set_dienTichSuDungRieng(getNumAllString(event.target.value))
                           }}
                /></td>
                <td><Input placeholder="Hệ thống tự nhập và cho sửa"
                           value={currentForm.dienTichSuDungRieng}
                           onChange={(event) => {
                               setForm({...currentForm, dienTichSuDungRieng: getNumAllString(event.target.value)})
                               FirstLandForm.set_dienTichSuDungRieng(getNumAllString(event.target.value))
                           }}
                /></td>
            </tr>
            <tr className={styles.tableThree}>
                <td>Diện tích sử dụng chung(m2)</td>
                <td><Input placeholder="STB nhập và cho sửa"
                           value={currentForm.dienTichSuDungChung}
                           onChange={(event) => {
                               setForm({...currentForm, dienTichSuDungChung: getNumAllString(event.target.value)})
                               FirstLandForm.set_dienTichSuDungChung(getNumAllString(event.target.value))
                           }}
                /></td>
                <td><Input placeholder="Hệ thống tự nhập và cho sửa"
                           value={currentForm.dienTichSuDungChung}
                           onChange={(event) => {
                               setForm({...currentForm, dienTichSuDungChung: getNumAllString(event.target.value)})
                               FirstLandForm.set_dienTichSuDungChung(getNumAllString(event.target.value))
                           }}
                /></td>
            </tr>


            </tbody>
        </table>
    </>
}
