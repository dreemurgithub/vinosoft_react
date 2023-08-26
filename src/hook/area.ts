export const TempCity = ['Đà Nẵng','TP HCM','Hà Nội']
const tempProvince = ['Hải Châu','Sơn Trà','Liên Chiểu','Bình dương','Bình Thạnh','Quận 3','Ba Đình', 'Hoàn Kiếm','Tây Hồ']
const AllTown = ['Hải Châu1','Hải Châu2','Hải Châu3','Sơn Trà1','Sơn Trà2','Sơn Trà3','Liên Chiểu1','Liên Chiểu2','Liên Chiểu3',
    'Bình dương1','Bình dương2','Bình dương3','Bình Thạnh1','Bình Thạnh2','Bình Thạnh3','Quận 3-1','Quận 3-2','Quận 3-3',
    'Ba Đình1','Ba Đình2','Ba Đình3','Sơn Trà1','Sơn Trà2','Sơn Trà3','Liên Chiểu1','Liên Chiểu2','Liên Chiểu3']

export const CityToProvince : any = {}
CityToProvince[TempCity[0]] = [tempProvince[0],tempProvince[1],tempProvince[2]]
CityToProvince[TempCity[1]] = [tempProvince[3],tempProvince[4],tempProvince[5]]
CityToProvince[TempCity[2]] = [tempProvince[6],tempProvince[7],tempProvince[8]]

export const ProvinceToTown : any = {}
tempProvince.forEach((province : string)  =>{
    if(!ProvinceToTown[province]) ProvinceToTown[province] = []
    for(let i = 0;i< AllTown.length;i++){
        if(AllTown[i].includes(province) && !ProvinceToTown[province].includes(AllTown[i])){
            ProvinceToTown[province].push( AllTown[i])
        }
    }
})


