## 1. What is Kafka?

- A pub-sub base durable messaging system exchanging data between processes, applications, and servers.

![](https://www.cloudkarafka.com/img/blog/durable-message-system.png)

- There are four main parts in a Kafka system:
    - Broker: Handles all requests from clients (produce, consume, and metadata) and keeps data replicated within cluster. There can be one or more brokers in cluster.
    - Zookeeper: Keeps the states of the cluster (brokers, topics, users).
    - Producer: Sends records to a broker.
    - Consumer: Consumes batches of records from the broker.

## 2. Basic concepts

### 2.1. Kafka broker

- Cluster consists of one or more Kafka brokers.

![](https://www.cloudkarafka.com/img/blog/kafka-broker-beginner.png)

- Zookeeper manages the brokers in the cluster (number of Zookeeper should be odd).

### 2.2. Kafka topic

- A Topic is a category/feed name to which records are stored and published.
- Kafka retains records in the log, making the consumers responsible for tracking the position in the log, known as the “offset”.
- Consumers subscribe to one or more toics of interest and receive messages that are sent to those topics by producers.

### 2.3. Kafka partition

- A topic is divided into 1 or more partitions, enabling producer and consumer loads to be scaled.
- Partitions allow topics to be parallelized by splitting the data into a particular topic across multiple brokers.
- Replication is implemented at the partition level.

- Partition: leader and followers. Leader handles all read-write requests, the followers replicate the follower. Leader fails -> 1 of the followers becomes the leader.
- All records with the same key will arrive at the same partition.

### 2.3. Producer

- Producer publises a record to topic (leader). The leader appends the record to its commit log and increment its record offset.
- Before a producer can send any records, it has to request metadata (information on which broker is the leader for each partition) about the cluster from the broker.
- Producer will decide target partition to place any message, depending on:
    - Partition id, if it's specified within the message
    - key % num partitions, if no partition id is mentioned
    - Round robin if neither partition id nor message key are available in message, meaning only value is available


### 2.4. Consumer and consumer group

- Just like multiple producers can write to the same topic, we need to allow multiple consumers to read from the same topic, splitting the data between them.
- Kafka consumers are typically part of a consumer group. When multiple consumers are subscribed to a topic and belong to the same consumer group, each consumer in the group will receive messages from a different subset of the partitions in the topic.
- 1 consumer group with 4 partitions.


- 4 partitions split to 2 consumers in a group.


- 4 consumers 4 partitions.


- 5 consumers 4 partitions (1 idle).


- 2 consumer groups 1 topics.


- Create a new consumer group for each application that needs all the messages from one or more topics. Add consumers to an existing consumer group to scale the reading and processing of messages from the topics, so each additional consumer in a group will only get a subset of the messages.

## 3. Record flow


- The producer sends a record to partition 1 in topic 1 and since the partition is empty the record ends up at offset 0.

- Next record is added to partition 1 will and up at offset 1, and the next record at offset 2 and so on.

- This is what is referred to as a commit log, each record is appended to the log and there is no way to change the existing records in the log. This is also the same offset that the consumer uses to specify where to start reading.