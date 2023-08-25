import * as S from "./styles"
import { IPage } from "../../App"

export function Header({ setPage }: IPage) {
  return (
    <S.Header>
     <h2>
      Inovando na Tecnologia
     </h2>
     <S.NavBar>
        <ul>
          <li>
            <a href="#" onClick={() => setPage(1)}>Página Inicial</a>
          </li>
          <li>
            <a href="#" onClick={() => setPage(2)}>Lista</a>
          </li>
        </ul>
      </S.NavBar>
      
    </S.Header>
  )
}