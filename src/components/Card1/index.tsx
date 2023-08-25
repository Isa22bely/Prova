import * as S from "./styles";
export interface ICard {
  titulo: string
  
}
export const Card = ({ titulo }: ICard) => {
  return (
    <S.Aside>
      <h6>   {titulo}</h6>
    </S.Aside>
  );
};
