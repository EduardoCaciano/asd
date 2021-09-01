import { Container, FormContainer } from "./styles";
import Input from "../../components/Input";

function Login (){

    return (
        <Container>
            <FormContainer>
                <h1>Bem-Vindo ao</h1>
                <h1>SENAI-Overflow</h1>
                <Input label="E-mail" id="email" />
                <Input label="Senha" id="senha" />
                <button>Entrar</button>
            </FormContainer>
        </Container>
    );
}

export default Login;