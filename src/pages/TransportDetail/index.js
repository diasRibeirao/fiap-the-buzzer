import { Container, NavButton } from "./styles";
import imgMaps from "../../assets/maps.jpg";
import { useParams } from "react-router";
import { useHistory } from "react-router-dom";

function TransportDetail({query}) {
  let { param } = useParams();

  const history = useHistory();

  const handleNavigateToMeioTransportes = () => history.push("/ratetrip");


  return (
    <Container>
       
      <h4>{param}</h4>

      <div>
        <img src={imgMaps} id="maps" alt="" />
      </div>
      
      <NavButton onClick={handleNavigateToMeioTransportes}>Avaliar viagem</NavButton>


    </Container>
  );
}

export default TransportDetail;