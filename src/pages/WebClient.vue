<template>
  <div>
    <div class="px-6">
      <div class="font-bold text-xl mb-2">MQTT Web Client</div>
    </div>
    <div>
      <button
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        type="button"
        :disabled="client.connected"
        :loading="btnLoadingType === 'connect'"
        @click="createConnection"
      >
        {{ client.connected ? "Connected" : "Connect" }}
      </button>
      <button
        v-if="client.connected"
        class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        type="button"
        :loading="btnLoadingType === 'disconnect'"
        @click="destroyConnection"
      >
        Disconnect
      </button>
    </div>
    <div>
      <button
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        type="button"
        :loading="btnLoadingType === 'subscribe'"
        :disabled="!client.connected || subscribeSuccess"
        @click="doSubscribe"
      >
        {{ subscribeSuccess ? "Subscribed" : "Subscribe" }}
      </button>
      <button
        v-if="subscribeSuccess"
        class="sub-btn"
        :loading="btnLoadingType === 'unsubscribe'"
        :disabled="!client.connected"
        @click="doUnSubscribe"
      >
        Unsubscribe
      </button>
    </div>
    <div>
      <button
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        type="button"
        :loading="btnLoadingType === 'publish'"
        :disabled="!client.connected"
        @click="doPublish"
      >
        Publish
      </button>
    </div>
    <div class="flex flex-row flex-wrap p-4">
      <div class="flex flex-row flex-wrap">
        <div class="w-96">
          <connection-card />
        </div>
        <div class="w-96">
          <subscriptions-card />
        </div>
      </div>
      <div class="w-96">
        <messages-card />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import mqtt from "mqtt/dist/mqtt";
import { reactive, ref } from "vue";
import { ConnectionConfig } from "../models/mqtt.model";
import { Guid } from "guid-typescript";

const connectionConfig: ConnectionConfig = reactive({
  /* clientId: Guid.create().toString(),
  protocol: "wss",
  hostname: "s2.eu.hivemq.cloud",
  protocolVersion: 4,
  port: 8884,
  path: "/mqtt",
  clean: true,
  resubscribe: false,
  keepalive: 60,
  connectTimeout: 30 * 1000, // ms
  reconnectPeriod: 0,
  username: "fpmcguire",
  password: "Gr51Ease68!", */

  clientId: Guid.create().toString(),
  protocol: "ws",
  hostname: "broker.emqx.io",
  protocolVersion: 4,
  port: 8083,
  path: "/mqtt",
  clean: true,
  resubscribe: false,
  keepalive: 60,
  connectTimeout: 30 * 1000, // ms
  reconnectPeriod: 0,
  username: "emqx_test",
  password: "emqx_test",

  /*  protocol: "ws",
  host: "broker.emqx.io",
  // ws: 8083; wss: 8084
  port: 8083,
  endpoint: "/mqtt",
  // for more options, please refer to https://github.com/mqttjs/MQTT.js#mqttclientstreambuilder-options
  clean: true,
  connectTimeout: 30 * 1000, // ms
  reconnectPeriod: 4000, // ms
  clientId: "emqx_vue3_" + Math.random().toString(16).substring(2, 8),
  // auth
  username: "emqx_test",
  password: "emqx_test", */
});

const subscription = ref({
  topic: "topic/mqttx",
  qos: 0 as mqtt.QoS,
});

const publish = ref({
  topic: "topic/browser",
  qos: 0 as mqtt.QoS,
  payload: '{ "msg": "Hello, I am browser from Nuxt." }',
});

let client = ref({
  connected: false,
} as mqtt.MqttClient);

const subscribeSuccess = ref(false);
const btnLoadingType = ref("");
const retryTimes = ref(0);

const initData = () => {
  client.value = {
    connected: false,
  } as mqtt.MqttClient;
  retryTimes.value = 0;
  btnLoadingType.value = "";
  subscribeSuccess.value = false;
};

const createConnection = () => {
  console.log(connectionConfig);

  try {
    btnLoadingType.value = "connect";
    const { protocol, hostname, port, path, ...options } = connectionConfig;
    const connectUrl = `${protocol}://${hostname}:${port}${path}`;
    console.log(connectUrl);
    client.value = mqtt.connect(connectUrl);
    client.value.on("error", (error) => {
      console.log("connection error:", error);
    });
    if (client.value.on) {
      client.value.on("connect", () => {
        btnLoadingType.value = "";
        console.log("connection successful");
      });
    }
  } catch (error) {
    btnLoadingType.value = "";
    console.log("mqtt.connect error:", error);
  }
};

const destroyConnection = () => {
  console.log("!! client.value.connected: " + client.value.connected);

  if (client.value.connected) {
    btnLoadingType.value = "disconnect";
    try {
      client.value.end(false, () => {
        initData();
        console.log("disconnected successfully");
      });
    } catch (error) {
      btnLoadingType.value = "";
      console.log("disconnect error:", error);
    }
  }
};

const doSubscribe = () => {
  btnLoadingType.value = "subscribe";
  const { topic, qos } = subscription.value;
  client.value.subscribe(
    topic,
    { qos },
    (error: Error, granted: mqtt.ISubscriptionGrant[]) => {
      btnLoadingType.value = "";
      if (error) {
        console.log("subscribe error:", error);
        return;
      }
      subscribeSuccess.value = true;
      console.log("subscribe successfully:", granted);
    }
  );
};

const doUnSubscribe = () => {
  btnLoadingType.value = "unsubscribe";
  const { topic, qos } = subscription.value;
  client.value.unsubscribe(topic, { qos }, (error) => {
    btnLoadingType.value = "";
    subscribeSuccess.value = false;
    if (error) {
      console.log("unsubscribe error:", error);
      return;
    }
    console.log(`unsubscribed topic: ${topic}`);
  });
};

const doPublish = () => {
  console.log(`doPublish`);
  btnLoadingType.value = "publish";
  const { topic, qos, payload } = publish.value;
  client.value.publish(topic, payload, { qos }, (error) => {
    if (error) {
      console.log("publish error:", error);
      return;
    }
    console.log(`published message: ${payload}`);
  });
};
</script>

<style scoped></style>
