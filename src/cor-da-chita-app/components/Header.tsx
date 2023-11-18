import Button from "./Button";

const Header = () => {
  return (
    <div className="flex justify-between w-full">
      <h2 className=" font-bold ml-4 mt-2">
        Cor da Chita
      </h2>

      <Button textButton="Login" />
    </div>
  );
};

export default Header;
