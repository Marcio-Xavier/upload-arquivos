import React from "react";
import CircularProgressbar from "react-circular-progressbar";
import { MdCheckCircle, MdError, MdLink } from "react-icons/md";
import { Container, FileInfo, Preview } from "./styles";

const FileList = () => (
  <Container>
    <li>
      <FileInfo>
        <Preview src="https://upload-images-06022019.s3.amazonaws.com/0b3e5e34986952e7d526f1c3fca2ce7d-Perfil.jpg" />
        <div>
          <strong>titulo</strong>
          <span>
            60 kb<button onClick={() => {}}>Excluir</button>
          </span>
        </div>
      </FileInfo>
      <div>
        <CircularProgressbar
          styles={{
            root: { width: 24 },
            path: { stroke: "#7159c1" }
          }}
          strokeWidth={10}
          percentage={60}
        />
        <a
          href="https://upload-images-06022019.s3.amazonaws.com/0b3e5e34986952e7d526f1c3fca2ce7d-Perfil.jpg"
          target="_blank"
          rel="noopener noreferrer"
        >
          <MdLink style={{ marginRight: 8 }} size={24} color="#222" />
        </a>
        <MdCheckCircle size={24} color="#78d5e5" />
        <MdError size={24} color="#e57878" />
      </div>
    </li>
  </Container>
);

export default FileList;
