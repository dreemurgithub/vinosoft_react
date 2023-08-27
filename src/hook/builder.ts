class LandForm{
    constructor(
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
        public doRongDuong?: [number,number],
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






    set_soThua(text: string){
        this.soThua = text;
    }

    set_soToBanDo(text: string){
        this.soToBanDo = text;
    }
    set_hoSoPhapLyCity(text: string){
        this.hoSoPhapLyCity = text;
    }
    set_thucTeCity(text: string){
        this.thucTeCity = text;
    }
    set_hoSoPhapLyProvince(text: string){
        this.hoSoPhapLyProvince = text;
    }
    set_thucTeProvince(text: string){
        this.thucTeProvince = text;
    }
    set_hoSoPhapLyStreet(text: string){
        this.hoSoPhapLyStreet = text;
    }
    set_thucTeStreet(text: string){
        this.thucTeStreet = text;
    }
    set_hoSoPhapLyDetail(text: string){
        this.hoSoPhapLyDetail = text;
    }
    set_thucTeDetail(text: string){
        this.thucTeDetail = text;
    }
    set_hoSoPhapLyTown(text: string){
        this.hoSoPhapLyTown = text;
    }
    set_thucTeTown(text: string){
        this.thucTeTown = text;
    }
    set_duongKhungGia(num: number){
        this.duongKhungGia = num;
    }
    set_khoangCachDuongChinh(num: number){
        this.khoangCachDuongChinh = num;
    }
    set_loaiDuongTiepGiap(text: string){
        this.loaiDuongTiepGiap = text;
    }
    set_khoangCachSTB(num: number){
        this.khoangCachSTB = num;
    }
    set_viTri(text: string){
        this.viTri = text;
    }
    set_doRongDuong(numArr:[ number, number]){
        this.doRongDuong = numArr;
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
export default LandForm
