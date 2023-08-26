import LandCity from "./landCity";
import LandDetail from "./landDetails";
import AreaInfor from "./areaInfor";
import FormHeader from "./formHeader";
export default function MainForm(){
    return <div>
        <FormHeader></FormHeader>
        <LandCity></LandCity>
        <LandDetail></LandDetail>
        <AreaInfor></AreaInfor>
    </div>
}
