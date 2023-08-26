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
        public duongKhungGia?: string,
        public khoangCachDuongChinh?: string,
        public loaiDuongTiepGiap?: string,
        public khoangCachSTB?: string,
        public viTri?: string,
        public doRongDuong?: [string,string],
        public khuVuc?: string,
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
    set_duongKhungGia(text: string){
        this.duongKhungGia = text;
    }
    set_khoangCachDuongChinh(text: string){
        this.khoangCachDuongChinh = text;
    }
    set_loaiDuongTiepGiap(text: string){
        this.loaiDuongTiepGiap = text;
    }
    set_khoangCachSTB(text: string){
        this.khoangCachSTB = text;
    }
    set_viTri(text: string){
        this.viTri = text;
    }
    set_doRongDuong(textArr:[ string, string]){
        this.doRongDuong = textArr;
    }
    set_khuVuc(text: string){
        this.khuVuc = text;
    }


}
export default LandForm
