import LandCity from "./landCity";
import AreaInfor from "./areaInfor";
import FormHeader from "./formHeader";
import LandStreet from "./landStreet";
import styles from './style.module.css';
export default function MainForm(){
    return <div className={styles.column}>
        <FormHeader></FormHeader>
        <LandCity></LandCity>
        <LandStreet></LandStreet>
        <AreaInfor></AreaInfor>
    </div>
}
