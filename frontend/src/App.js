import React, { Component } from "react";
import GlobalStyle from "./styles/global";
import { Content, Container } from "./styles";
import Upload from "./components/Upload";
import FileList from "./components/FileList/";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Container>
          <Content>
            <Upload />
            <FileList />
          </Content>
          <GlobalStyle />
        </Container>
      </React.Fragment>
    );
  }
}

export default App;
