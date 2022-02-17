const { Kafka } = require("kafkajs");
const {
  KAFKA: { BROKERS, CLIENT_ID, TOPIC, SASL },
} = require("./config");

const value = process.argv[2] || "Hello message  2!!";
const partition = process.argv[3] || 0;

run();
async function run() {
  try {
    const kafka = new Kafka({
      clientId: CLIENT_ID,
      brokers: BROKERS,
      sasl: SASL,
    });

    const producer = kafka.producer();
    console.log("Connecting to Kafka . . .");
    await producer.connect();
    console.log("Connected to Kafka !!");

    const key = Math.round(Math.random() * 100).toString();
    console.log(key);
    const result = await producer.send({
      topic: TOPIC,
      messages: [{ value, key: key }],
    });

    console.log(`Sent Successfully! ${JSON.stringify(result)}`);
    await producer.disconnect();
  } catch (err) {
    console.error(`ERROR::PRODUCER:: ${err}`);
  }
}
