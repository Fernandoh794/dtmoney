import { Container } from "./styles";
import entrada from '../../assets/Entradas.svg'
import saida from '../../assets/out.svg'
import total from '../../assets/Total.svg'


export function Summary() {
    return(
        <Container>
            <div>
            <header>
                <p>Entradas</p>
                <img src={entrada}/>
            </header>
            <strong>R$1000</strong>

            </div>

            <div>
            <header>
                <p>Entradas</p>
                <img src={saida}/>
            </header>
            <strong>-R$500</strong>

            </div>

            <div className="verde">
            <header>
                <p>Entradas</p>
                <img src={total}/>
            </header>
            <strong>R$500</strong>

            </div>

        </Container>
    )
} 