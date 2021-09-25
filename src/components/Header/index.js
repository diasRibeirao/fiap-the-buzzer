import { Container, IconSignOut } from "./styles";
import Navbar from '../../components/NavBar';
import {store, useGlobalState} from 'state-pool';
import { useHistory } from "react-router";

function Header() {
    const history = useHistory();
    const [signOut, setSignOut] = useGlobalState("signOut");

    const handleNavigateToLogout = async () => {
        setSignOut(false)
        history.push("/");
      }

    return (
        <Container>
            <Navbar />
            <div>
               <p>The Buzzer</p>
            </div>
            <IconSignOut onClick={handleNavigateToLogout}/>
        </Container>
    )
}

export default Header;
