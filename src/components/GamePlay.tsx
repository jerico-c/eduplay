
import GameContainer from './GameContainer';

interface GamePlayProps {
  onBackToHome: () => void;
}

const GamePlay = ({ onBackToHome }: GamePlayProps) => {
  return <GameContainer onBackToHome={onBackToHome} />;
};

export default GamePlay;
