interface TagProps {
    text: string;
}

const Button = (props: TagProps) => {
    return <button className="bg-red-300 text-red-900">{props.text}</button>;
};

export default Button;
