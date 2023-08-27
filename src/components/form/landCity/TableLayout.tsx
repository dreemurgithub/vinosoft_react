import styles from './styles.module.css'
import {CityToProvince,ProvinceToTown} from "../../../hook/area";
import {useState, ChangeEvent, useEffect} from "react";
import { Select, Space,Input,InputNumber  } from 'antd';


export default function TableLayout(){

    const [widthOneSix,setOneSix] = useState(0)
    function editSize(){
        const landCity : HTMLElement | null = document.querySelector("#landCity")
        const width = landCity? landCity.offsetWidth/6 - 20 : 0
        setOneSix(width)
    }
    useEffect(editSize,[])
    window.addEventListener('resize',editSize)

    const citys = Object.keys(CityToProvince)
    const [currentCity,setCity] = useState<string|null>(null)
    const [currentProvince,setProvince] = useState<string|null>(null)

    function changeCity(value : string){
        if(value) setCity(value)
        else setCity(null)
    }
    function changeProvince(value : string){
        if(value) setProvince(value)
        else setProvince(null)
    }
    return <>
        <table style={{width:'100%'}} id={"landCity"}>
            <thead style={{width:'100%'}}>
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
                <td >
                    <Space wrap>
                        <Select
                            placeholder={'HT nhập và cho sửa'}
                            style={{ width: widthOneSix }}
                            onChange={changeCity}
                            options = {[{value:'',label:''},...citys.map( (city)=>{
                                return {value: city, label: city}
                            } )] }
                        />
                    </Space>
                </td>

                <td><Space wrap>
                    <Select
                        placeholder={'HT nhập và cho sửa'}
                        style={{ width: widthOneSix }}
                        onChange={changeProvince}
                        options = { currentCity? [{value:'',label:''},...CityToProvince[currentCity].map( (province : string)=>{
                            return {value: province, label: province}
                        } )] : [{value:'',label:''}] }
                    />
                </Space></td>
                <td>
                    <Space wrap>
                        <Select
                            placeholder={'HT nhập và cho sửa'}
                            style={{ width: widthOneSix }}
                            options = { currentProvince? [{value:'',label:''},...ProvinceToTown[currentProvince].map( (province : string)=>{
                                return {value: province, label: province}
                            } )] : [{value:'',label:''}] }
                        />
                    </Space>
                </td>
                <td><Input placeholder="HT nhập và cho sửa" /></td>
                <td><Input placeholder="HT nhập và cho sửa" /></td>
            </tr>
            <tr className={styles.tableSix}>
                <td>Thực tế</td>
                <td><Space wrap>
                    <Select
                        style={{ width: widthOneSix }}
                        placeholder={'HT nhập và cho sửa'}
                        onChange={changeCity}
                        options = {[{value:'',label:''},...citys.map( (city)=>{
                            return {value: city, label: city}
                        } )] }
                    />
                </Space></td>
                <td><Select
                    style={{ width: widthOneSix }}
                    placeholder={'HT nhập và cho sửa'}
                    onChange={changeProvince}
                    options = { currentCity? [{value:'',label:''},...CityToProvince[currentCity].map( (province : string)=>{
                        return {value: province, label: province}
                    } )] : [{value:'',label:''}] }
                /></td>
                <td><Space wrap>
                    <Select
                        style={{ width: widthOneSix }}
                        placeholder={'HT nhập và cho sửa'}
                        options = { currentProvince? [{value:'',label:''},...ProvinceToTown[currentProvince].map( (province : string)=>{
                            return {value: province, label: province}
                        } )] : [{value:'',label:''}] }
                    />
                </Space></td>
                <td><Input placeholder="HT nhập và cho sửa" /></td>
                <td><Input placeholder="HT nhập và cho sửa" /></td>
            </tr>
            <tr className={styles.tableSix}>
                <td>Đoạn đường trong khung giá</td>
                <td className={styles.twoSix} colSpan={2}><Select
                    defaultValue={1000}
                    style={{ width: widthOneSix * 2 + 20 }}
                    placeholder={'HT nhập và cho sửa'}
                    options={[
                        { value: 100, label: '100 triệu' },
                        { value: 500, label: '500 triệu' },
                        { value: 1000, label: '1 tỉ' },
                    ]}
                /></td>
                <td>Khoảng cách đến đường chính (m)</td>
                <td className={styles.twoSix} colSpan={2}><Input placeholder="HT nhập và cho sửa" name={"khoangCachDuongChinh"} /></td>
            </tr>
            <tr className={styles.tableSix}>
                <td>Loại đường tiếp giáp</td>
                <td className={styles.twoSix} colSpan={2}><Select
                    defaultValue="Đường quốc lộ"
                    style={{ width: widthOneSix * 2 + 20 }}
                    placeholder={'HT nhập và cho sửa'}
                    options={[
                        { value: 'Đường nội thành', label: 'Đường nội thành' },
                        { value: 'Đường quốc lộ', label: 'Đường quốc lộ' },
                        { value: 'Đường kiệt', label: 'Đường kiệt' },
                    ]}
                /></td>
                <td>Khoảng cách tới STB gần nhất (m)</td>
                <td className={styles.twoSix} colSpan={2}><Input placeholder="HT nhập và cho sửa" /></td>

            </tr>
            <tr className={styles.tableSix}>
                <td>Vị trí</td>
                <td className={styles.twoSix} colSpan={2}><Select
                    defaultValue="Mặt tiền"
                    style={{ width: widthOneSix * 2 + 20 }}
                    placeholder={'HT nhập và cho sửa'}
                    options={[
                        { value: 'Kiệt', label: 'Kiệt' },
                        { value: 'Mặt tiền', label: 'Mặt tiền' },
                    ]}
                /></td>
                <td>Độ rộng đường (m)</td>
                <td><Input placeholder="HT nhập và cho sửa" /></td>
                <td><Input placeholder="HT nhập và cho sửa" /></td>

            </tr>
            <tr className={styles.tableSix}>
                <td>Ghi chú</td>
                <td style={{ gridColumn:'span 5'}} colSpan={5}><Input placeholder="HT nhập và cho sửa"  /></td>
            </tr>
            <tr className={styles.tableSix}>
                <td>Khu vực</td>
                <td className={styles.twoSix} colSpan={2}><Select
                    defaultValue="Nội thành"
                    placeholder={'HT nhập và cho sửa'}
                    style={{ width: widthOneSix * 2 + 20 }}
                    options={[
                        { value: 'Nội thành', label: 'Nội thành' },
                        { value: 'Thị xã', label: 'Thị xã' },
                    ]}
                /></td>
                <td>Vị trí khung giá</td>
                <td className={styles.twoSix} colSpan={2}><Select
                    defaultValue={1000}
                    style={{ width: widthOneSix * 2 + 20 }}
                    placeholder={'HT nhập và cho sửa'}
                    options={[
                        { value: 100, label: '100 triệu' },
                        { value: 500, label: '500 triệu' },
                        { value: 1000, label: '1 tỉ' },
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
            <tbody>
            <tr className={styles.tableThree}>
                <td>Hướng chính</td>
                <td><Input placeholder="STB nhập và cho sửa" /></td>
                <td><Input placeholder="Hệ thống tự nhập và cho sửa" /></td>
            </tr>
            <tr className={styles.tableThree}>
                <td>Hình dạng</td>
                <td><Input placeholder="STB nhập và cho sửa" /></td>
                <td><Input placeholder="Hệ thống tự nhập và cho sửa" /></td>
            </tr>
            <tr className={styles.tableThree}>
                <td>Số mặt tiền/mặt thoáng</td>
                <td><Input placeholder="STB nhập và cho sửa" /></td>
                <td><Input placeholder="Hệ thống tự nhập và cho sửa" /></td>
            </tr>
            <tr className={styles.tableThree}>
                <td>Kích thước mặt tiền(m)</td>
                <td><Input placeholder="STB nhập và cho sửa" /></td>
                <td><Input placeholder="Hệ thống tự nhập và cho sửa" /></td>
            </tr>
            <tr className={styles.tableThree}>
                <td>Kích thước chiều dài(m)</td>
                <td><Input placeholder="STB nhập và cho sửa" /></td>
                <td><Input placeholder="Hệ thống tự nhập và cho sửa" /></td>
            </tr>
            <tr className={styles.tableThree}>
                <td>Diện tích khuôn viên(m2)</td>
                <td><Input placeholder="STB nhập và cho sửa" /></td>
                <td><Input placeholder="Hệ thống tự nhập và cho sửa" /></td>
            </tr>
            <tr className={styles.tableThree}>
                <td>Diện tích phù hợp quy hoạch(m2)</td>
                <td><Input placeholder="STB nhập và cho sửa" /></td>
                <td><Input placeholder="Hệ thống tự nhập và cho sửa" /></td>
            </tr>
            <tr className={styles.tableThree}>
                <td>Diện tích không phù hợp quy hoạch(m2)</td>
                <td><Input placeholder="STB nhập và cho sửa" /></td>
                <td><Input placeholder="Hệ thống tự nhập và cho sửa" /></td>
            </tr>
            <tr className={styles.tableThree}>
                <td>Diện tích sử dụng riêng(m2)</td>
                <td><Input placeholder="STB nhập và cho sửa" /></td>
                <td><Input placeholder="Hệ thống tự nhập và cho sửa" /></td>
            </tr>
            <tr className={styles.tableThree}>
                <td>Diện tích sử dụng chung(m2)</td>
                <td><Input placeholder="STB nhập và cho sửa" /></td>
                <td><Input placeholder="Hệ thống tự nhập và cho sửa" /></td>
            </tr>


            </tbody>
        </table>
    </>
}
