const KAFKA = {
  BROKERS: ["localhost:9092"],
  CLIENT_ID: "dilip_kafka_app_x",
  CLIENT_ID_2: "dilip_kafka_app_y",
  CONSUMER_GROUP_ID: "dilip_g1_x",
  TOPIC: "dilip_new_topicwil",
  SASL: {
    mechanism: "plain", // scram-sha-256 or scram-sha-512
    username: "admin",
    password: "admin-secret",
  },
};

module.exports = { KAFKA };
