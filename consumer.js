const { Kafka } = require("kafkajs");
const {
  KAFKA: { BROKERS, CLIENT_ID_2, CONSUMER_GROUP_ID, TOPIC, SASL },
} = require("./config");

run();
async function run() {
  try {
    const kafka = new Kafka({
      clientId: CLIENT_ID_2,
      brokers: BROKERS,
      sasl: SASL,
    });

    const consumer = kafka.consumer({ groupId: CONSUMER_GROUP_ID });
    console.log("Connecting to Kafka . . .");
    await consumer.connect();
    console.log("Connected to Kafka !!");

    await consumer.subscribe({
      topic: TOPIC,
      fromBeginning: true,
    });

    await consumer.run({
      eachMessage: async (result) => {
        console.log(result);
        console.log(
          `Message ${result.message.value} on partition ${result.partition} with key ${result.key}`
        );
      },
    });
  } catch (err) {
    console.error(`ERROR::CONSUMER:: ${err}`);
  }
}
