import "@styles/components/Setup.scss";
import { useState, useEffect, memo } from "react";
import { useSetupContext } from "@/context/SetupContext";
import { useModalContext } from "@/context/ModalContext";
import SwitchBtn from "@components/SwitchBtn";
import { svgClose } from "@/utils/svgIcons";

function Setup() {
  const { gameSetup, setGameSetup } = useSetupContext();
  const { isSetupOpen, setIsSetupOpen } = useModalContext();
  const { boardSize, matchingCards } = gameSetup;
  const sizes = [
    [3, 2],
    [4, 2],
    [4, 3],
    [5, 4],
  ];
  const [flatBoardSize, setFlatBoardSize] = useState<number>(
    boardSize[0] * boardSize[1],
  );
  const [selectedSize, setSelectedSize] = useState<number>(
    sizes.findIndex(
      (size) => size[0] === boardSize[0] && size[1] === boardSize[1],
    ),
  );
  const [selectedMatchingCards, setSelectedMatchingCards] = useState<number>(
    flatBoardSize % matchingCards === 0 ? matchingCards : 2,
  );

  const onChangeBoardSize = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedSize(parseInt(e.target.value));
  };
  const onChangeMatchingCards = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = parseInt(e.target.value);
    if (flatBoardSize % value === 0) {
      setSelectedMatchingCards(value);
    }
  };
  useEffect(() => {
    const size = sizes[selectedSize];
    setFlatBoardSize(size[0] * size[1]);
    if ((size[0] * size[1]) % selectedMatchingCards !== 0) {
      setSelectedMatchingCards(2);
    }
  }, [selectedSize]);

  const closeSetup = () => {
    setIsSetupOpen(false);
    setSelectedSize(
      sizes.findIndex(
        (size) => size[0] === boardSize[0] && size[1] === boardSize[1],
      ),
    );
  };
  const submitSetup = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const size = sizes[parseInt(formData.get("board-size") as string)];
    const setup = {
      boardSize: size,
      matchingCards: parseInt(formData.get("matching-cards") as string),
    };
    setGameSetup((prev) => ({ ...prev, ...setup }));
    setIsSetupOpen(false);
    setSelectedSize(parseInt(formData.get("board-size") as string));
  };

  return (
    <div className={`${isSetupOpen && "active"} setup`}>
      <div className="setup__overlay" onClick={closeSetup}></div>
      <div className="menu">
        <div className="menu__actions">
          <button
            className="menu__close"
            onClick={closeSetup}
            title="Close Menu"
            aria-label="Close Setup Menu"
          >
            {isSetupOpen && svgClose}
          </button>
          <SwitchBtn />
        </div>
        <form className="form" onSubmit={submitSetup}>
          <label className="form__input" htmlFor="board-size">
            Board Size:
            <select
              name="board-size"
              id="board-size"
              onChange={onChangeBoardSize}
              value={selectedSize}
            >
              {sizes.map((size, index) => (
                <option key={index} value={index}>
                  {size[0]}x{size[1]} board
                </option>
              ))}
            </select>
          </label>
          <label className="form__input" htmlFor="matching-cards">
            Matching Cards:
            <select
              name="matching-cards"
              id="matching-cards"
              value={selectedMatchingCards}
              onChange={onChangeMatchingCards}
            >
              {[2, 3].map((value) => (
                <option
                  key={value}
                  value={value}
                  disabled={flatBoardSize % value !== 0}
                >
                  {value} matching cards
                </option>
              ))}{" "}
            </select>
          </label>
          <button className="form__btn" type="submit">
            {"Save"}
          </button>
        </form>
      </div>
    </div>
  );
}
export default memo(Setup);
