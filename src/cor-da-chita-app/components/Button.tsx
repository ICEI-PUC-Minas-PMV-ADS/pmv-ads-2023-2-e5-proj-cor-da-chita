interface ButtonProps {
  textButton: string;
}

const Button = (props: ButtonProps) => {
  return (
    <button className="bg-black text-sm font-bold rounded p-2 mt-2 w-15 mr-10  text-white font-roboto">
      {props.textButton}
    </button>
  );
};

export default Button;
