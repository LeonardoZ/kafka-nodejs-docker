const { Kafka, KafkaJSTopicMetadataNotLoaded } = require("kafkajs");
const {
  KAFKA: { BROKERS, CLIENT_ID, TOPIC, SASL },
} = require("./config");

run();
async function run() {
  try {
    const kafka = new Kafka({
      clientId: CLIENT_ID,
      brokers: BROKERS,
      sasl: SASL,
    });

    const admin = kafka.admin();
    console.log("Connecting to Kafka . . .");
    await admin.connect();
    console.log("Connected to Kafka !!");

    await admin.createTopics({
      topics: [
        {
          topic: TOPIC,
          numPartitions: 3,
        },
      ],
    });

    console.log(`Topic - ${TOPIC} Created Successfully!`);
    await admin.disconnect();
  } catch (err) {
    console.error(`ERROR::TOPIC:: ${err}`);
  }
}
