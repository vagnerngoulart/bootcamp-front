
import { Container, Grid } from "@mui/material";
import Button from "../../components/buttons/button/button.component";
import InputText from "../../components/inputs/input-text/input-text-component";
export default function Login(){
    return (
        <>
        <Container>
        <Grid container justifyContent={'center'}>
            <Grid item xs={4}>
                <InputText type={'text'} placeholder={'E-mail'}/>
                <InputText type={'password'} placeholder={'Senha'}/>
                <Button primary={true}>Entrar</Button>
            </Grid>
        </Grid>
        </Container>
      
        </>
        
    )
}   