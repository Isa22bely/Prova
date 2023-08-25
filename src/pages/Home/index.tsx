import * as S from './styles'
import { dados } from "../../services/dados1"
import { ComponentCard } from '../../components'


export function Home() {
  return (
    <S.Section>
      {dados.map(item => (
        <ComponentCard
          titulo={item.titulo}
         
        />
      ))}
    </S.Section>
  )
}
