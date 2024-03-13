interface ButtonProps {
    text: string;
}

const Button = (props: ButtonProps) => {
    return <button className="bg-red-300 text-red-900">{props.text}</button>;
};

export default Button;
