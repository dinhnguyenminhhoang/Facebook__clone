import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
@import 'normalize.css';

* {
    box-sizing: border-box;
    // overflow: hidden;

    /* Tạo thanh cuộn dọc */
    &::-webkit-scrollbar {
        width: 4px;
        /* Độ rộng thanh cuộn */
    }

    &::-webkit-scrollbar-track {
        background-color: #f1f1f1;
        /* Màu nền thanh cuộn */
    }

    &::-webkit-scrollbar-thumb {
        background-color: #888;
        /* Màu của thanh cuộn */
        border-radius: 4px;
        /* Độ cong viền thanh cuộn */
    }

    &::-webkit-scrollbar-thumb:hover {
        background-color: #555;
        /* Màu của thanh cuộn khi hover */
    }

    /* Tạo thanh cuộn ngang */
    &::-webkit-scrollbar-horizontal {
        height: 8px;
        /* Độ cao thanh cuộn */
    }

    &::-webkit-scrollbar-thumb:horizontal {
        background-color: #888;
    }

    &::-webkit-scrollbar-thumb:hover:horizontal {
        background-color: #555;
    }
}

html {
    color: white;
    font-size: 62.6%;
    margin: 0;
    padding: 0;

    a {
        text-decoration: none;
        display: block;
    }
}

body {
    font-size: 1.6rem;
    line-height: 1.6;
    text-rendering: optimizeSpeed;
    margin: 0;
    padding: 0;
    color: #e4e6eb;

}

img {
    image-rendering: -webkit-optimize-contrast;
}

a[href] {
    color: #e4e6eb;
}

.table>:not(caption)>*>* {
    color: #fff !important;
    background-color: transparent !important;
}

:root {
    --header-color:#242526;
    --header-height:56px;
    --background-color:#18191a;
    --background-modal:#3a3b3c;
    --color:#a6a9ad;
    --border-color:#393a3b;
}
button{
    background-color: transparent;
    border:none;
}
`;
export default GlobalStyle;
