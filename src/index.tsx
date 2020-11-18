// import * as React from 'react';
// import * as ReactDOM from 'react-dom';

// let root = document.getElementById('root');

// let props = {className:'title'};
// let element = React.createElement("div",props,"hello");

// ReactDOM.render(element,root);

import * as React from 'react';
import * as ReactDOM from 'react-dom';

let root: HTMLElement | null = document.getElementById('root');
interface Props {
    className: 'title'
}

let props: Props = { className: 'title' };
// 函数组件
// function Welcome(props: Props): React.DetailedReactHTMLElement<Props, HTMLDivElement> {
//     return React.createElement<Props, HTMLDivElement>("div", props, "hello", null, undefined, 11);
// }
// let element: React.FunctionComponentElement<Props> = React.createElement(Welcome, props);
// 元素
// let element: React.DetailedReactHTMLElement<Props, HTMLDivElement> = React.createElement<Props, HTMLDivElement>("div", props, "hello", null, undefined, 11);

// 类组件
interface State {
    count: number
}
class Welcome extends React.Component<Props, State>{
    render(): React.DetailedReactHTMLElement<Props, HTMLDivElement> {
        return React.createElement<Props, HTMLDivElement>("div", props, "hello", null, undefined, 11);
    }
}
// 把鼠标移到element可以看到类型
let element = React.createElement(Welcome, props);

ReactDOM.render(element, root);
