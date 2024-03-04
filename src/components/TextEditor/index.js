/* eslint-disable jsx-a11y/control-has-associated-label */
import {Component} from 'react'
import {VscBold} from 'react-icons/vsc'
import {GoItalic} from 'react-icons/go'
import {AiOutlineUnderline} from 'react-icons/ai'

import {
  MainContainer,
  ImgContainer,
  SubContainer,
  TextBtnContainer,
  BtnContainer,
  TextArea,
  Bold,
  Italic,
  Underline,
} from './styledComponents'

class TextEditor extends Component {
  state = {isBoldActive: false, isItalicActive: false, isUnderlineActive: false}

  onClickBold = () => {
    this.setState(prevState => ({isBoldActive: !prevState.isBoldActive}))
  }

  onClickItalic = () => {
    this.setState(prevState => ({isItalicActive: !prevState.isItalicActive}))
  }

  onClickUnderline = () => {
    this.setState(prevState => ({
      isUnderlineActive: !prevState.isUnderlineActive,
    }))
  }

  render() {
    const {isBoldActive, isItalicActive, isUnderlineActive} = this.state
    return (
      <MainContainer>
        <SubContainer className="sub-container">
          <ImgContainer className="img-container">
            <h1 style={{color: '#fff'}}>Text Editor</h1>
            <img
              style={{width: '300px', marginTop: '40px'}}
              className="text-edit-img"
              src="https://assets.ccbp.in/frontend/react-js/text-editor-img.png"
              alt="text editor"
            />
          </ImgContainer>
          <TextBtnContainer>
            <BtnContainer>
              <li>
                <Bold
                  isBoldActive={isBoldActive}
                  type="button"
                  data-testid="bold"
                  onClick={() => this.onClickBold()}
                >
                  <VscBold size={25} />
                </Bold>
              </li>
              <li>
                <Italic
                  isItalicActive={isItalicActive}
                  type="button"
                  data-testid="italic"
                  onClick={() => this.onClickItalic()}
                >
                  <GoItalic size={25} />
                </Italic>
              </li>
              <li>
                <Underline
                  isUnderlineActive={isUnderlineActive}
                  type="button"
                  data-testid="underline"
                  onClick={() => this.onClickUnderline()}
                >
                  <AiOutlineUnderline size={25} />
                </Underline>
              </li>
            </BtnContainer>
            <TextArea
              isBoldActive={isBoldActive}
              isItalicActive={isItalicActive}
              isUnderlineActive={isUnderlineActive}
              width="100%"
            >
              {' '}
            </TextArea>
          </TextBtnContainer>
        </SubContainer>
      </MainContainer>
    )
  }
}

export default TextEditor
