import LandCity from "./landCity";
import LandDetail from "./landDetails";
import AreaInfor from "./areaInfor";
import FormHeader from "./formHeader";
import styles from './style.module.css'
export default function MainForm(){
    return <div className={styles.column}>
        <FormHeader></FormHeader>
        <LandCity></LandCity>
        <LandDetail></LandDetail>
        <AreaInfor></AreaInfor>
    </div>
}
