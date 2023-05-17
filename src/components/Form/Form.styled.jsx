import s from "@emotion/styled";

export const FormStyled = s.form `
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin: 30px;
`
export const ButtonStyled = s.button `
    width: 150px;
    height: 30px;
  background-color: #405cf5;
  border-radius: 6px;
  border-width: 0;
  box-shadow: rgba(50, 50, 93, .1) 0 0 0 1px inset,rgba(50, 50, 93, .1) 0 2px 5px 0,rgba(0, 0, 0, .07) 0 1px 1px 0;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  &:hover {
    background-color:#4157d4 
  }
`

export const LabelStyled = s.label `
    display: flex;
    flex-direction: column;
    gap: 5px;
`
export const InputStyled = s.input `
    width: 200px;
    padding: 5px;
    margin-block: 5px;
    border-color: #6d6d6d34;
`