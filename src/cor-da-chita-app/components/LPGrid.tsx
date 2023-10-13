const LPGrid = () => {
  return (
    <div className="bg-black">
      <div className="grid grid-cols-2">
        <div className="grid-box bg-green">
            <p className="text-white">Coluna 1</p>
        </div>
        <div className="grid-box bg-light">
            <p className="text-white">Coluna 2</p>
        </div>
      </div>
    </div>
  );
};

export default LPGrid;
