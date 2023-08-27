import React, {useState} from 'react';
import MenuBar from "./components/menu";
import MainForm from "./components/form";
import Header from "./components/header";
import './index.css';
import MyContext from "./hook/context";

type FormInfor = {
  sothua: string | null ;
  soToBanDo: string | null ;
  hoSoPhapLyCity: string | null ;
  thucTeCity: string | null ;
  hoSoPhapLyProvince: string | null ;
  thucTeProvince: string | null ;

  hoSoPhapLyStreet: string | null ;
  thucTeStreet: string | null ;
  hoSoPhapLyDetail:string | null ;
  thucTeDetail: string | null ;
  hoSoPhapLyTown: string | null ;
  thucTeTown: string | null ;
  duongKhungGia: number;
  khoangCachDuongChinh: number;
  loaiDuongTiepGiap: string | null ;
  khoangCachSTB: number;
  viTri:string | null ;
  viTriKhungGia: number;
  doRongDuong1: number;
  doRongDuong2:  number;
  khuVuc: string | null ;
  ghiChu: string | null ;

  huongChinh: string | null ;
  hinhDang:   string | null ;
  soMatTien:  string | null ;
  kichThuocMatTien: number;
  kichThuocChieuDai: number;
  dienTichKhuonVien: number;
  dienTichPhuHopQuyHoach:number;
  dienTichKhongPhuHopQuyHoach:  number;
  dienTichSuDungRieng:  number;
  dienTichSuDungChung:  number;
}


function App() {

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
  const [currentForm, setForm] = useState<FormInfor >({
    sothua: localStorage.getItem('soThua') ? localStorage.getItem('hoSoPhapLyStreet') : '',
    soToBanDo: localStorage.getItem('soToBanDo') ? localStorage.getItem('soToBanDo') : '',
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
    <div id={'mainLayout'}>
      <MenuBar></MenuBar>
      <MyContext.Provider value={[currentForm,setForm] as any}>
        <div>
          <Header></Header>
          <MainForm></MainForm>
        </div>
      </MyContext.Provider>

    </div>
  </>
}

export default App;
