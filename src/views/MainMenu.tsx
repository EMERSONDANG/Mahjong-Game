import "../styling/MainMenu.css";

interface MainMenuProps {
    onClose: () => void;
}

export default function MainMenu( {onClose} : MainMenuProps) {
    return (
        <div id="main-menu">
            <h1> Mahjong Game </h1>

            <div className="main-menu-buttons">
                <button onClick={onClose}> Play </button>
                <button onClick={onClose}> Rules </button>
                <button onClick={onClose}> Exit </button>
            </div>
        </div>
    );
}