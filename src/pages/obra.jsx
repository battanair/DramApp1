import HeaderObra from '../components/headobra';
import VideoLineObra from '../components/videolineobra';
import Elencoobra from '../components/elencoobra';
import Imagenesobra from '../components/imagenesobra';
import Listapremiosobra from '../components/listapremiosobra';

const Obra = () => {
    return(
        <>
        <HeaderObra />
        <VideoLineObra container sx={{marginTop: 4}}/>
        <Elencoobra container sx={{marginTop: 4}}/>
        <Imagenesobra container sx={{marginTop: 4}}/>
        <Listapremiosobra container sx={{marginTop: 4}}/>
        </>
)}

export default Obra;




