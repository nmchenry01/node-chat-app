const test = require("ava");

const { generateMessage } = require("./message");

test("Test Generate Message Passing", t => {
  const from = "Nicholas";
  const text = "This is a test";
  const createdAt = new Date().getTime();
  let message = generateMessage(from, text);
  t.deepEqual(message, {
    from,
    text,
    createdAt
  });
});

test("Test Generate Message Failing", t => {
    const from = "Nicholas";
    const text = "This is a test";
    const createdAt = new Date().getTime() + 1;
    let message = generateMessage(from, text);
    t.notDeepEqual(message, {
      from,
      text,
      createdAt
    });
});
