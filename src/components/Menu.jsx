export const Menu = (props) => {
  const { section, onSectionChange, menuOpened, setMenuOpened } = props;
  console.log(section);
  return (
    <>
      <button
        onClick={() => setMenuOpened(!menuOpened)}
        className="z-20 fixed top-12 right-12 p-3 bg-purple-700 w-11 h-11 rounded-md border-1 border-white"
      >
        <div
          className={`bg-white h-0.5 rounded-md w-full transition-all ${
            menuOpened ? "rotate-45 translate-y-0.5" : ""
          }`}
        />
        <div
          className={`bg-white h-0.5 rounded-md w-full my-1 ${
            menuOpened ? "hidden" : ""
          }`}
        />
        <div
          className={`bg-white h-0.5 rounded-md w-full transition-all ${
            menuOpened ? "-rotate-45" : ""
          }`}
        />
      </button>
      <div
        className={`z-10 fixed top-0 right-0 bottom-0 bg-white transition-all overflow-hidden flex flex-col
      ${menuOpened ? "w-2/5 sm:w-1/5" : "w-0"}`}
      >
        <div className="border-l-8 border-l-purple-800 flex-1 flex items-start justify-center flex-col gap-6 p-8">
          <MenuButton
            label="About"
            onClick={() => onSectionChange(0)}
            stylee={section === 0 ? " rgb(126 34 206)" : ""}
          />
          <MenuButton
            label="Skills"
            onClick={() => onSectionChange(1)}
            stylee={section === 1 ? " rgb(126 34 206)" : ""}
          />
          <MenuButton
            label="Projects"
            onClick={() => onSectionChange(2)}
            stylee={section === 2 ? " rgb(126 34 206)" : ""}
          />
          <MenuButton
            label="Contact"
            onClick={() => onSectionChange(3)}
            stylee={section === 3 ? " rgb(126 34 206)" : ""}
          />
        </div>
      </div>
    </>
  );
};

const MenuButton = (props) => {
  const { label, onClick, stylee } = props;
  console.log(stylee);

  return (
    <button
      onClick={onClick}
      className={`text-2xl font-bold cursor-pointer hover:text-purple-300 transition-colors `}
      style={{ color: stylee }}
    >
      {label}
    </button>
  );
};
