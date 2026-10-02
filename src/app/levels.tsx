import Board from "@/components/gameplay/board";
import GameTest from "@/components/tests/gameTest";
import Header from "@/components/UI/header";
import Screen from "@/components/UI/screen";
import { LEVELS } from "@/data/levelData";

export default function Levels() {
  return (
    <Screen padding={true}>
      <Header title="Select level" />
      <Board path={LEVELS[0].path}>
        <GameTest />
      </Board>
    </Screen>
  );
}
