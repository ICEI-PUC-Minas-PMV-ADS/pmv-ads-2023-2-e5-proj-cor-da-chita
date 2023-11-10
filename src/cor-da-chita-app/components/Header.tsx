import Button from "../app/components/Button";

const Header = () => {
  return (
    <div className="flex justify-between w-full">
      <h2 className=" font-bold  ml-4 text-xl mt-2 font-roboto">
        Cor da Chita
      </h2>

      <Button textButton="Login" />
    </div>
  );
};

export default Header;
