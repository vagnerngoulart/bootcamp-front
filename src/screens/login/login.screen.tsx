
import { Container, Grid } from "@mui/material";
import Button from "../../components/buttons/button/button.component";
import InputText from "../../components/inputs/input-text/input-text-component";
import login from '../../assets/icons/logo.svg';
import {Logo, Wrapper} from './login.styled';
export default function Login(){
    return (
        <>
        <Container>
            <Wrapper container justifyContent={'center'}>
                <Grid item xs={3} justifyContent={'center'}>
                    <Grid container justifyContent={'center'}>
                        <Logo src={login} alt={'Netflix Logo'}/>
                        <InputText type={'text'} placeholder={'E-mail'}/>
                        <InputText type={'password'} placeholder={'Senha'}/>
                        <Button primary={true}>Entrar</Button>
                    </Grid>
                </Grid>
            </Wrapper>
        </Container>
      
        </>
        
    )
}   