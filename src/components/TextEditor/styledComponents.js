import styled from 'styled-components'

export const MainContainer = styled.div`
  background-color: #25262c;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const SubContainer = styled.div`
  width: 90%;
  max-width: 1140px;
  background-color: #1b1c22;
  display: flex;
  height: 80vh;
`
export const ImgContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const TextBtnContainer = styled.div`
  background-color: #25262c;
  flex-grow: 1;
  margin: 20px;
  border: 1px solid #334155;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
`

export const BtnContainer = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: flex;
  align-items: center;
  padding: 20px;
  border-bottom: 1px solid #334155;
`

export const Button = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
`

export const Bold = styled(Button)`
  color: ${props => (props.isBoldActive ? '#faff00' : '#f1f5f9')};
`

export const Italic = styled(Button)`
  color: ${props => (props.isItalicActive ? '#faff00' : '#f1f5f9')};
`

export const Underline = styled(Button)`
  color: ${props => (props.isUnderlineActive ? '#faff00' : '#f1f5f9')};
`

export const TextArea = styled.textarea`
  width: 100%;
  color: #fff;
  padding: 10px;
  flex-grow: 1;
  background-color: transparent;
  border: none;
  outline: none;
  font-weight: ${props => (props.isBoldActive ? 'bold' : 'normal')};
  text-decoration: ${props =>
    props.isUnderlineActive ? 'underline' : 'normal'};
  font-style: ${props => (props.isItalicActive ? 'italic' : 'normal')};
`
