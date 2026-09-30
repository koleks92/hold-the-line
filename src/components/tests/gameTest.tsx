import { StyleSheet, View } from "react-native";

// const path = [
//   { x: 1, y: 0 },
//   { x: 1, y: 2 },
//   { x: 3, y: 2 },
//   { x: 3, y: 5 },
//   { x: 1, y: 5 },
//   { x: 1, y: 8 },
//   { x: 6, y: 8 },
//   { x: 6, y: 9 },
//   { x: 4, y: 9 },
//   { x: 4, y: 11 },
// ];

export default function GameTest() {
  // const [enemies, setEnemies] = useState<EnemyInstance[]>([
  //   {
  //     id: 1,
  //     type: "basic",
  //     currentHealth: 100,
  //     currentPosition: { x: 0, y: 0 },
  //     targetIndex: 1,
  //     status: "moving",
  //   },
  //   {
  //     id: 2,
  //     type: "basic",
  //     currentHealth: 100,
  //     currentPosition: { x: 1, y: 1 },
  //     targetIndex: 1,
  //     status: "moving",
  //   },
  //   {
  //     id: 3,
  //     type: "basic",
  //     currentHealth: 100,
  //     currentPosition: { x: 0, y: 0 },
  //     targetIndex: 1,
  //     status: "moving",
  //   },
  // ]);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setEnemies((prev) => moveEnemies(prev, path, 50));
  //   }, 50);

  //   return () => {
  //     clearInterval(interval);
  //   };
  // }, []);

  // return (
  //   <>
  //     {enemies.map((enemy) => {
  //       return (
  //         <View
  //           key={enemy.id}
  //           style={{
  //             position: "absolute",
  //             left: enemy.currentPosition.x * 50,
  //             top: enemy.currentPosition.y * 50,
  //             width: 20,
  //             height: 20,
  //             backgroundColor: "red",
  //             borderRadius: 10,
  //           }}
  //         />
  //       );
  //     })}
  //   </>
  // );

  const col = 8;
  const row = 12;

  const grid = col * row;

  return (
    <View style={styles.root}>
      {Array.from({ length: grid }).map((_, index) => (
        <View style={styles.block} key={index} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    width: "100%",
    height: "50%",
    borderWidth: 2,
    flexDirection: "row",
    flexWrap: "wrap",
  },

  block: {
    width: `${100 / 8}%`,
    height: `${100 / 12}%`,
    backgroundColor: "blue",
    borderWidth: 1,
  },
});
