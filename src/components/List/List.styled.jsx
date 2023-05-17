import s from "@emotion/styled";

export const UlStyled = s.ul `
    display: flex;
    flex-direction: column;
    gap: 15px;
`
export const ButtonStyled = s.button `
    width: 60px;
    height: 30px;
  background-color: #ba0000;
  border-radius: 6px;
  border-width: 0;
  box-shadow: rgba(50, 50, 93, .1) 0 0 0 1px inset,rgba(50, 50, 93, .1) 0 2px 5px 0,rgba(0, 0, 0, .07) 0 1px 1px 0;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  &:hover {
    background-color:#6e0808 
  }
`
export const LiStyled = s.li `
    display: flex;
    gap: 10px;
    align-items: center;
`