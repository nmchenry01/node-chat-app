const test = require("ava");

const { generateMessage, generateLocationMessage } = require("./message");

test("Test Generate Message Passing", t => {
  const from = "Nicholas";
  const text = "This is a test";
  const createdAt = new Date().getTime();
  const message = generateMessage(from, text);
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
  const message = generateMessage(from, text);
  t.notDeepEqual(message, {
    from,
    text,
    createdAt
  });
});

test("Test Generate Location Message Passing", t => {
  const from = "Nicholas";
  const latitude = 1;
  const longitude = 1;
  const url = `https://www.google.com/maps?q=${latitude},${longitude}`;
  const createdAt = new Date().getTime();
  const message = generateLocationMessage(from, latitude, longitude);
  t.deepEqual(message, {
    from,
    url,
    createdAt
  });
});
