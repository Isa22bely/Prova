import * as S from "./styles";
export interface ICard {
  titulo: string
  mensagem: String
}
export const Card = ({ titulo, mensagem }: ICard) => {
  return (
    <S.Aside>
      <h6>   {titulo}</h6>
      <p> {mensagem}</p>
    </S.Aside>
  );
};
