class LandForm{
    constructor(
        public hopThua?: boolean,
        public soThua?: string,
        public soToBanDo?: string,
        public hoSoPhapLyCity?: string,
        public thucTeCity?: string,
        public hoSoPhapLyProvince?: string,
        public thucTeProvince?: string,
        public hoSoPhapLyTown?: string,
        public hoSoPhapLyStreet?: string,
        public thucTeStreet?: string,
        public hoSoPhapLyDetail?: string,
        public thucTeDetail?: string,
        public thucTeTown?: string,
        public duongKhungGia?: number,
        public khoangCachDuongChinh?: number,
        public loaiDuongTiepGiap?: string,
        public khoangCachSTB?: number,
        public viTri?: string,
        public doRongDuong1?: number,
        public doRongDuong2?: number,
        public khuVuc?: string,
        public huongChinh?: string,
        public hinhDang?: string,
        public soMatTien?: number,
        public kichThuocMatTien?: number,
        public kichThuocChieuDai?: number,
        public dienTichKhuonVien?: number,
        public dienTichPhuHopQuyHoach?: number,
        public dienTichKhongPhuHopQuyHoach?: number,
        public dienTichSuDungRieng?: number,
        public dienTichSuDungChung?: number,
    ) {}





    set_hopThua(check: boolean){
        localStorage.setItem('hopThua',JSON.stringify(check))
        this.hopThua = check
    }
    set_soThua(text: string){
        localStorage.setItem('soThua',text)
        this.soThua = text;
    }

    set_soToBanDo(text: string){
        localStorage.setItem('soToBanDo',text)
        this.soToBanDo = text;
    }
    set_hoSoPhapLyCity(text: string){
        localStorage.setItem('hoSoPhapLyCity',text)
        this.hoSoPhapLyCity = text;
    }
    set_thucTeCity(text: string){
        this.thucTeCity = text;
        localStorage.setItem('thucTeCity',text)
    }
    set_hoSoPhapLyProvince(text: string){
        localStorage.setItem('hoSoPhapLyProvince',text)
        this.hoSoPhapLyProvince = text;
    }
    set_thucTeProvince(text: string){
        localStorage.setItem('thucTeProvince',text)
        this.thucTeProvince = text;
    }
    set_hoSoPhapLyStreet(text: string){
        localStorage.setItem('hoSoPhapLyStreet',text)
        this.hoSoPhapLyStreet = text;
    }
    set_thucTeStreet(text: string){
        localStorage.setItem('thucTeStreet',text)
        this.thucTeStreet = text;
    }
    set_hoSoPhapLyDetail(text: string){
        localStorage.setItem('hoSoPhapLyDetail',text)
        this.hoSoPhapLyDetail = text;
    }
    set_thucTeDetail(text: string){
        localStorage.setItem('thucTeDetail',text)
        this.thucTeDetail = text;
    }
    set_hoSoPhapLyTown(text: string){
        localStorage.setItem('hoSoPhapLyTown',text)
        this.hoSoPhapLyTown = text;
    }
    set_thucTeTown(text: string){
        localStorage.setItem('thucTeTown',text)
        this.thucTeTown = text;
    }
    set_duongKhungGia(num: number){
        localStorage.setItem('duongKhungGia',JSON.stringify(num))
        this.duongKhungGia = num;
    }
    set_khoangCachDuongChinh(num: number){
        localStorage.setItem('khoangCachDuongChinh',JSON.stringify(num))
        this.khoangCachDuongChinh = num;
    }
    set_loaiDuongTiepGiap(text: string){
        localStorage.setItem('loaiDuongTiepGiap',JSON.stringify(text))
        this.loaiDuongTiepGiap = text;
    }
    set_khoangCachSTB(num: number){
        localStorage.setItem('khoangCachSTB',JSON.stringify(num))
        this.khoangCachSTB = num;
    }
    set_viTri(text: string){
        this.viTri = text;
    }
    set_doRongDuong1(num : number){
        localStorage.setItem('doRongDuong1',JSON.stringify(num))
        this.doRongDuong1 = num;
    }
    set_doRongDuong2(num : number){
        localStorage.setItem('doRongDuong2',JSON.stringify(num))
        this.doRongDuong2 = num;
    }
    set_khuVuc(text: string){
        this.khuVuc = text;
    }
    set_huongChinh(text: string){
        this.huongChinh = text;
    }
    set_hinhDang(text: string){
        this.hinhDang = text;
    }
    set_soMatTien(num: number){
        this.soMatTien = num;
    }
    set_kichThuocMatTien(num: number){
        this.kichThuocMatTien = num;
    }
    set_kichThuocChieuDai(num: number){
        this.kichThuocChieuDai = num;
    }
    set_dienTichKhuonVien(num: number){
        this.dienTichKhuonVien = num;
    }
    set_dienTichPhuHopQuyHoach(num: number){
        this.dienTichPhuHopQuyHoach = num;
    }
    set_dienTichKhongPhuHopQuyHoach(num: number){
        this.dienTichKhongPhuHopQuyHoach = num;
    }
    set_dienTichSuDungRieng(num: number){
        this.dienTichSuDungRieng = num;
    }
    set_dienTichSuDungChung(num: number){
        this.dienTichSuDungChung = num;
    }


}

const FirstLandForm = new LandForm()

FirstLandForm.set_hoSoPhapLyCity(localStorage.getItem('hoSoPhapLyCity') || 'Đà Nẵng')
FirstLandForm.set_hoSoPhapLyProvince(localStorage.getItem('hoSoPhapLyProvince') ||'Hải Châu')
FirstLandForm.set_hoSoPhapLyTown(localStorage.getItem('hoSoPhapLyTown') ||'Hải Châu1')

FirstLandForm.set_thucTeCity(localStorage.getItem('thucTeCity') || 'Đà Nẵng')
FirstLandForm.set_thucTeProvince(localStorage.getItem('thucTeProvince') || 'Hải Châu')
FirstLandForm.set_thucTeTown(localStorage.getItem('thucTeTown') || 'Hải Châu2')


export default FirstLandForm
