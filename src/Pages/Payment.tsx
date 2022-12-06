import Buttons from '../components/barcoma/Buttons';
import Footer from '../components/garcia/garciaFooter';

function Payment(){
    let clicked = false;
    return (
        <div className="Payment">
            <Buttons/>
            <Footer name="Jane Carla Barcoma" course="BSCS" section="F2"/>
        </div>
    )
}

export default Payment;
