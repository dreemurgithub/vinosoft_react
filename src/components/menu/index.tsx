import React, {useState} from 'react';
import {
    AppstoreOutlined,
    ContainerOutlined,
    FundViewOutlined,
    HomeOutlined,
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    InsertRowBelowOutlined,
    SyncOutlined,
    AuditOutlined,
    LaptopOutlined,
    DollarOutlined,
    FileDoneOutlined,
    FileTextOutlined,
    ExperimentOutlined,
    MonitorOutlined
} from '@ant-design/icons';
import type {MenuProps} from 'antd';
import {Button, Menu} from 'antd';
import styles from './styles.module.css'

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
    type?: 'group',
): MenuItem {
    return {
        key,
        icon,
        children,
        label,
        type,
    } as MenuItem;
}

const items: MenuItem[] = [
    getItem('Hồ sơ', 'sub1', <ContainerOutlined/>, [
        getItem('Hồ sơ đến', '1a'),
        getItem('Hồ sơ đi', '2a'),
        getItem('Hồ sơ tổng', '3a'),
        getItem('Phần giao tự động', '4a'),
        getItem('Phần giao thủ công', '5a'),
    ]),
    getItem('Định giá nhanh', 'sub2', <AuditOutlined/>, [
        getItem('Hồ sơ đến', '1b'),
        getItem('Hồ sơ đi', '2b'),
        getItem('Hồ sơ tổng', '3b'),
        getItem('Phần giao tự động', '4b'),
        getItem('Phần giao thủ công', '5b'),
    ]),
    getItem('Tư vấn', 'sub3', <SyncOutlined/>, [
        getItem('Hồ sơ đến', '1c'),
        getItem('Hồ sơ đi', '2c'),
        getItem('Hồ sơ tổng', '3c'),
        getItem('Phần giao tự động', '4c'),
        getItem('Phần giao thủ công', '5c'),
    ]),

    getItem('Kho giá chung', 'sub4', <LaptopOutlined/>, [
        getItem('Hồ sơ đến', '1d'),
        getItem('Hồ sơ đi', '2d'),
        getItem('Hồ sơ tổng', '3d'),
        getItem('Phần giao tự động', '4d'),
        getItem('Phần giao thủ công', '5d'),
    ]),

    getItem('Kho giá cụ thể', 'sub5', <AppstoreOutlined/>, [
        getItem('Hồ sơ đến', '1e'),
        getItem('Hồ sơ đi', '2e'),
        getItem('Hồ sơ tổng', '3e'),
        getItem('Phần giao tự động', '4e'),
        getItem('Phần giao thủ công', '5e'),
    ]),
    getItem('Khung giá tài sản', 'sub6', <InsertRowBelowOutlined/>, [
        getItem('Hồ sơ đến', '1f'),
        getItem('Hồ sơ đi', '2f'),
        getItem('Hồ sơ tổng', '3f'),
        getItem('Phần giao tự động', '4f'),
        getItem('Phần giao thủ công', '5f'),
    ]),
    getItem('Kế toán', 'sub7', <HomeOutlined/>, [
        getItem('Hồ sơ đến', '1g'),
        getItem('Hồ sơ đi', '2g'),
        getItem('Hồ sơ tổng', '3g'),
        getItem('Phần giao tự động', '4g'),
        getItem('Phần giao thủ công', '5g'),

    ]),
    getItem('Báo cáo thống kê', 'sub8', <DollarOutlined/>, [
        getItem('Hồ sơ đến', '1h'),
        getItem('Hồ sơ đi', '2h'),
        getItem('Hồ sơ tổng', '3h'),
        getItem('Phần giao tự động', '4h'),
        getItem('Phần giao thủ công', '5h'),
    ]),
    getItem('Danh mục', 'sub9', <FileDoneOutlined/>, [
        getItem('Hồ sơ đến', '1i'),
        getItem('Hồ sơ đi', '2i'),
        getItem('Hồ sơ tổng', '3i'),
        getItem('Phần giao tự động', '4i'),
        getItem('Phần giao thủ công', '5i'),
    ]),
    getItem('Hệ thống', 'sub10', <FileTextOutlined/>, [
        getItem('Hồ sơ đến', '1k'),
        getItem('Hồ sơ đi', '2k'),
        getItem('Hồ sơ tổng', '3k'),
        getItem('Phần giao tự động', '4k'),
        getItem('Phần giao thủ công', '5k'),
    ]),
    getItem('Tích hợp', 'sub11', <ExperimentOutlined/>, [
        getItem('Hồ sơ đến', '1l'),
        getItem('Hồ sơ đi', '2l'),
        getItem('Hồ sơ tổng', '3l'),
        getItem('Phần giao tự động', '4l'),
        getItem('Phần giao thủ công', '5l'),
    ]),

];

const MenuBar: React.FC = () => {
    const [collapsed, setCollapsed] = useState(false);

    const toggleCollapsed = () => {
        setCollapsed(!collapsed);
    };

    return (
        <div style={{width: 256, backgroundColor: '#2685C9'}}>
            <div>
                <div id={'header'}
                     style={{display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 4em', background: '#2685C9'}}>
                    <div className={styles.headerItem}>
                        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.4446 31.4826L8.5174 28.5554L12.5054 24.5674L15.4326 27.4946L11.4446 31.4826Z"
                                  fill="url(#paint0_linear_313_964)"/>
                            <path
                                d="M10.824 26.2488C11.6661 27.349 12.651 28.3338 13.7512 29.176L15.4326 27.4945L12.5054 24.5673L10.824 26.2488Z"
                                fill="url(#paint1_linear_313_964)"/>
                            <path
                                d="M24.3728 31.2535C33.0033 31.2535 39.9996 24.2572 39.9996 15.6267C39.9996 6.99633 33.0033 0 24.3728 0C15.7424 0 8.74609 6.99633 8.74609 15.6267C8.74609 24.2572 15.7424 31.2535 24.3728 31.2535Z"
                                fill="url(#paint2_linear_313_964)"/>
                            <path
                                d="M24.3731 0C23.8434 0 23.3199 0.0266667 22.8037 0.0781961C30.6971 0.865333 36.861 7.52604 36.861 15.6267C36.861 23.7275 30.6971 30.3881 22.8037 31.1753C23.3199 31.2267 23.8434 31.2535 24.3731 31.2535C33.0036 31.2535 39.9999 24.2571 39.9999 15.6267C39.9999 6.99639 33.0036 0 24.3731 0Z"
                                fill="url(#paint3_linear_313_964)"/>
                            <path
                                d="M24.3733 26.6645C30.469 26.6645 35.4106 21.7229 35.4106 15.6272C35.4106 9.53143 30.469 4.58984 24.3733 4.58984C18.2775 4.58984 13.3359 9.53143 13.3359 15.6272C13.3359 21.7229 18.2775 26.6645 24.3733 26.6645Z"
                                fill="url(#paint4_linear_313_964)"/>
                            <path
                                d="M24.3731 4.58984C23.8403 4.58984 23.3164 4.62843 22.8037 4.70145C28.156 5.46349 32.2716 10.0644 32.2716 15.6273C32.2716 21.1902 28.156 25.791 22.8037 26.5531C23.3164 26.6261 23.8403 26.6647 24.3731 26.6647C30.4689 26.6647 35.4105 21.7231 35.4105 15.6273C35.4105 9.53157 30.4689 4.58984 24.3731 4.58984Z"
                                fill="url(#paint5_linear_313_964)"/>
                            <path
                                d="M1.19679 38.8032C-0.580076 37.0264 -0.346978 34.0819 1.68722 32.6067L9.18063 27.1727C9.66385 26.8223 10.33 26.875 10.752 27.297L12.7029 29.248C13.1249 29.67 13.1777 30.3362 12.8273 30.8193L7.39326 38.3127C5.91812 40.347 2.97365 40.5801 1.19679 38.8032Z"
                                fill="#66D6FD"/>
                            <path
                                d="M12.7026 29.248L10.7517 27.297C10.3297 26.875 9.66349 26.8223 9.18036 27.1727L8.18098 27.8974L9.53157 29.248C9.95361 29.67 10.0063 30.3362 9.65596 30.8193L4.22193 38.3127C3.76326 38.9452 3.16247 39.4033 2.49902 39.6813C4.18844 40.3925 6.23973 39.9032 7.39306 38.3127L12.8271 30.8193C13.1775 30.3361 13.1247 29.67 12.7026 29.248Z"
                                fill="#29B4E5"/>
                            <defs>
                                <linearGradient id="paint0_linear_313_964" x1="7.92155" y1="28.025" x2="15.5197"
                                                y2="28.025" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#B5ADB6"/>
                                    <stop offset="0.5106" stop-color="#918291"/>
                                    <stop offset="1" stop-color="#554E56"/>
                                </linearGradient>
                                <linearGradient id="paint1_linear_313_964" x1="5.30178" y1="26.8717" x2="14.0572"
                                                y2="26.8717" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#B5ADB6"/>
                                    <stop offset="0.5106" stop-color="#918291"/>
                                    <stop offset="1" stop-color="#554E56"/>
                                </linearGradient>
                                <linearGradient id="paint2_linear_313_964" x1="8.74609" y1="15.6267" x2="39.9996"
                                                y2="15.6267" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#6DA0FF"/>
                                    <stop offset="1" stop-color="#82E5FF"/>
                                </linearGradient>
                                <linearGradient id="paint3_linear_313_964" x1="22.8037" y1="15.6267" x2="39.9999"
                                                y2="15.6267" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#6DA0FF"/>
                                    <stop offset="1" stop-color="#82E5FF"/>
                                </linearGradient>
                                <linearGradient id="paint4_linear_313_964" x1="14.0421" y1="15.6272" x2="32.9882"
                                                y2="15.6272" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="white"/>
                                    <stop offset="1" stop-color="#F9F3F1"/>
                                </linearGradient>
                                <linearGradient id="paint5_linear_313_964" x1="23.8663" y1="15.6272" x2="51.6032"
                                                y2="15.6272" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#F8F6F7"/>
                                    <stop offset="1" stop-color="#D1CEEB"/>
                                </linearGradient>
                            </defs>
                        </svg>

                    </div>
                    <div className={styles.headerItem}>
                        <h3 style={{color: 'white'}}>SBA</h3>
                    </div>
                    <div className={styles.headerItem}>
                        <span></span>
                    </div>
                    <div className={styles.headerItem} onClick={toggleCollapsed}>
                        {/*<Button type="primary"  style={{ marginBottom: 16,background:'#2685C9' }}>*/}
                        {/*   */}
                        {/*</Button>*/}
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_313_954)">
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                      d="M14.5303 7.46967C14.8232 7.76256 14.8232 8.23744 14.5303 8.53033L11.8107 11.25H20C20.4142 11.25 20.75 11.5858 20.75 12C20.75 12.4142 20.4142 12.75 20 12.75H11.8107L14.5303 15.4697C14.8232 15.7626 14.8232 16.2374 14.5303 16.5303C14.2374 16.8232 13.7626 16.8232 13.4697 16.5303L9.46967 12.5303C9.32322 12.3839 9.25 12.1919 9.25 12C9.25 11.8983 9.27024 11.8013 9.30691 11.7129C9.34268 11.6265 9.39531 11.5453 9.4648 11.4746M9.47014 11.4692L13.4697 7.46967C13.7626 7.17678 14.2374 7.17678 14.5303 7.46967"
                                      fill="white"/>
                                <path d="M4 4V20" stroke="white" stroke-width="1.5" stroke-linecap="round"
                                      stroke-linejoin="round"/>
                            </g>
                            <defs>
                                <clipPath id="clip0_313_954">
                                    <rect width="24" height="24" fill="white"/>
                                </clipPath>
                            </defs>
                        </svg>
                    </div>
                </div>
            </div>
            <Menu
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                mode="inline"
                theme="dark"
                inlineCollapsed={collapsed}
                items={items}
            />
        </div>
    );
};

export default MenuBar;
