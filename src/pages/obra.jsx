import HeaderObra from '../components/headobra';
import Categoriaobra from '../components/indexobra';
import VideoLineObra from '../components/videolineobra';
import Elencoobra from '../components/elencoobra';

const Obra = () => {
    return(
        <><Categoriaobra categoria1={'Teatro'} categoria2={'Comedia'} nota={'10'} />
        <HeaderObra />
        <VideoLineObra />
        <Elencoobra /></>
)}

export default Obra;




