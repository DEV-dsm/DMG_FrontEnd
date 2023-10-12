import { createGlobalStyle } from 'styled-components';
import { reset } from 'styled-reset';

export default createGlobalStyle`
${reset}
*, * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    list-style: none;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans',
        'Droid Sans', 'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
}

a {
    text-decoration: none;
    color: #000000;
}

input {
    border: none;
}
input:focus {
    outline: none;
}

textarea {
    border: none;
}
textarea:focus {
    outline: none;
}

table {
    border-collapse: collapse;
}

button {
    border: none;
    background: #ffffff;
}

.TextareaAutosize {
    padding: 14px 20px;
    width: 100%;
    background: #f5f5f7;

    font-size: 18px;
    font-family: Inter;
    font-style: normal;
    font-weight: 500;
}
.TextareaAutosize::placeholder {
    color: #c4c4c4;
}

 `;
