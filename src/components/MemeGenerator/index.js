import {Component} from 'react'

import {
  AppContainer,
  MemeGeneratorContainer,
  Heading,
  FormContainer,
  MemeContainer,
  TextContent,
  MemeGeneratorForm,
  CustomLabel,
  CustomInput,
  CustomSelect,
  CustomOption,
  CustomButton,
} from './styledComponents'

const fontSizesOptionsList = [
  {
    optionId: '8',
    displayText: '8',
  },
  {
    optionId: '12',
    displayText: '12',
  },
  {
    optionId: '16',
    displayText: '16',
  },
  {
    optionId: '20',
    displayText: '20',
  },
  {
    optionId: '24',
    displayText: '24',
  },
  {
    optionId: '28',
    displayText: '28',
  },
  {
    optionId: '32',
    displayText: '32',
  },
]

class MemeGenerator extends Component {
  state = {
    imageUrlInput: '',
    topTextInput: '',
    bottomTextInput: '',
    activeOptionIdInput: fontSizesOptionsList[0].optionId,
    imageUrl: '',
    topText: '',
    bottomText: '',
    activeOptionId: '',
  }

  onChangeImageUrl = event => {
    this.setState({imageUrlInput: event.target.value})
  }

  onChangeTopText = event => {
    this.setState({topTextInput: event.target.value})
  }

  onChangeBottomText = event => {
    this.setState({bottomTextInput: event.target.value})
  }

  onChangeActiveOptionId = event => {
    this.setState({activeOptionIdInput: event.target.value})
  }

  onGenerateMeme = event => {
    event.preventDefault()
    const {
      imageUrlInput,
      topTextInput,
      bottomTextInput,
      activeOptionIdInput,
    } = this.state

    this.setState({
      imageUrl: imageUrlInput,
      topText: topTextInput,
      bottomText: bottomTextInput,
      activeOptionId: activeOptionIdInput,
    })
  }

  renderMemeGenerator = () => {
    const {
      imageUrlInput,
      topTextInput,
      bottomTextInput,
      activeOptionIdInput,
    } = this.state

    return (
      <MemeGeneratorForm onSubmit={this.onGenerateMeme}>
        <CustomLabel htmlFor="imageUrl">Image URL</CustomLabel>
        <CustomInput
          type="text"
          placeholder="Enter the Image URL"
          id="imageUrl"
          onChange={this.onChangeImageUrl}
          value={imageUrlInput}
        />

        <CustomLabel htmlFor="topText">Top Text</CustomLabel>
        <CustomInput
          type="text"
          id="topText"
          placeholder="Enter the Top Text"
          onChange={this.onChangeTopText}
          value={topTextInput}
        />

        <CustomLabel htmlFor="bottomText">Bottom Text</CustomLabel>
        <CustomInput
          type="text"
          id="bottomText"
          placeholder="Enter the Bottom Text"
          onChange={this.onChangeBottomText}
          value={bottomTextInput}
        />

        <CustomLabel htmlFor="select">Font Size</CustomLabel>

        <CustomSelect
          id="select"
          value={activeOptionIdInput}
          onChange={this.onChangeActiveOptionId}
        >
          {fontSizesOptionsList.map(eachItem => (
            <CustomOption key={eachItem.optionId} value={eachItem.optionId}>
              {eachItem.displayText}
            </CustomOption>
          ))}
        </CustomSelect>

        <CustomButton type="submit">Generate</CustomButton>
      </MemeGeneratorForm>
    )
  }

  renderMeme = () => {
    const {imageUrl, topText, bottomText, activeOptionId} = this.state
    return (
      <MemeContainer data-testid="meme" backgroundImage={imageUrl}>
        <TextContent activeOptionId={activeOptionId}>{topText}</TextContent>
        <TextContent activeOptionId={activeOptionId}>{bottomText}</TextContent>
      </MemeContainer>
    )
  }

  render() {
    return (
      <AppContainer>
        <MemeGeneratorContainer>
          <Heading>Meme Generator</Heading>
          <FormContainer>
            {this.renderMeme()}
            {this.renderMemeGenerator()}
          </FormContainer>
        </MemeGeneratorContainer>
      </AppContainer>
    )
  }
}

export default MemeGenerator
