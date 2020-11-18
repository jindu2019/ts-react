

interface DOMElement extends ReactElement {

}

// 默认构造器
type JSXElementConstructor<P> = ((props: P) => ReactElement | null) | (new (props: P) => Component<P, any>);
interface ReactElement<P = any, T extends string | JSXElementConstructor<any> = string> {
    type: T,
    props: P
}

interface ReactHTML {
    div: HTMLDivElement,
    span: HTMLSpanElement
}

interface DetailedReactHTMLElement extends DOMElement {
    type: keyof ReactHTML  //等价于 div | span
}

type ReactText = string | number;
type ReactChild = ReactElement | ReactText;
type ReactNode = ReactChild | boolean | null | undefined;

// for element
export declare function createElement<P>(
    type: string,
    props: P,
    ...children: ReactNode[]): ReactElement;

// for function
export declare function createElement<P>(
    type: FunctionComponent<P>,
    props: P,
    ...children: ReactNode[]): FunctionComponentElement<P>;

interface FunctionComponent<P = {}> {
    (props: P): ReactElement | null
}
interface FunctionComponentElement<P> extends ReactElement<P, FunctionComponent<P>> {

}

// for class
export declare function createElement<P>(
    type: ComponentClass<P>,  //类组件
    props: P,
    ...children: ReactNode[]): ComponentElement<P>;
type ComponentState = any;
declare class Component<P, S>{
    setState(state: any): void
    render(): ReactNode
}
interface ComponentClass<P = {}, S = ComponentState> {
    // 函数前面加new表示是类构造函数
    new(props: P): Component<P, S>
}
interface ComponentElement<P> extends ReactElement<P, ComponentClass<P>> {

}

/**
 * 区分类的实例与类的类型
 */
class Person {
    name: string
}
let p: Person = { name: "xxx" }
type TypeP = typeof Person
let p2: TypeP;
p2 = Person;  // 类型相同