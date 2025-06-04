const uuid = () => {
  while (true) {
    const generatorUUID = () => {
      function randomDigit() {
        return Math.floor(Math.random() * 16);
      }
      function randomHex() {
        return randomDigit().toString(16);
      }
      function randomSegment() {
        let resultHex = "";
        for (let i = 0; i < 4; i++) {
          resultHex += randomHex();
        }
        return resultHex;
      }
      return (
        randomSegment() +
        "-" +
        randomDigit() +
        randomHex() +
        "-" +
        randomSegment()
      );
    };
    return generatorUUID();
  }
};

export { uuid };
