---
title: "building a multi-device clipboard manager with websockets"
description: "describing the development process of cuhlippa"
date: "2025-08-26"
published: true
---

>"I often find myself struggling to transfer data between devices when working on multiple machines"

If you've ever faced the same problem, this article is for you. As someone who frequently switches between devices during sessions of coding, studying, and writing, I grew frustrated with slow methods like emailing myself or sending snippets through Google Drive/Discord. I wanted something seamless &mdash; like Apple's iCloud Clipboard, but cross-platform.

In this article I'll show how I built **Cuhlippa** a real-time, multi-device clipboard manager using WebSockets.

## Why WebSockets?
When it comes to syncing data in real-time, traditional request/response methods like REST APIs fall short. With REST, your devices would need to constantly make requests to the server to check for new data &mdash; a process known as polling &mdash; which is inefficient and slow.

WebSockets solve this problem by providing a persistent, two-way connection between the server and all connected devices. This means:
    - As soon as you copy something on one device, the server can push it to all other devices instantly.
- There are no delays, repeated requests, wasted bandwidth
- They are perfect for real-time applications, live dashboards, multiplayer games... and of course this clipboard manager.

In short: WebSockets let your devices talk to each other as if they were on the same network in real-time.

<img src="https://assets.apidog.com/blog/2023/05/websocket-vs-http.png" alt="WebSocket vs HTTP" width="400" style="margin: 20px auto; display: block;" />
<p style="text-align: center; font-size:12px; font-style: italic; margin-top: -8px; color: #6b7280;">WebSocket vs HTTP</p>

---

## System Design / Application Architecture
Before diving into the implementation details, it's helpful to understand how Cuhlippa works under the hood. At a high level, the system has 3 main components:

1. **WebSocket server**: The central hub that all devices connect to. It receives clipboard updates from one device and broadcasts them to all others.
2. **Clients**: Each device (laptop, phone, tablet) runs a client that listens for clipboard changes and sends their own updates to the server.
3. **Clipboard Handler**: The part of the client responsible for detecting when the clipboard changes and applying updates received from other devices.

### Data Flow
1. You copy data (text, images, file paths) on Device A
2. The client detects the change and sends it to the websocket server
3. The server broadcasts the update to all connected clients
4. Devices B, C, etc., receive the update and update their local clipboards in real-time 

### System Architecture Diagram
<img src="/blog/clipboard-manager/architecture.png" alt="Example Diagram" width="400" style="margin: 20px auto; display: block;" />
<p style="text-align: center; font-style: italic; font-size:12px; margin-top: 8px; color: #6b7280;">Basic Application System Design</p>

This architecture ensures instant, bidirectional syncing without polling, and can scale to multiple devices with minimal latency.

---

## Implementation Details
Cuhlippa has two main components: the **WebSocket server** (built with Spring Boot) and a Java client that runs on each device.
### 1. The WebSocket Server
The server is simple: it keeps track of all connected clients and broadcasts any clipboard update it receives.
```java
@Override
protected void handleTextMessage(WebSocketSession sender, TextMessage msg) throws Exception {
    for (WebSocketSession s : sessions) {
        if (s.isOpen() && s != sender) {
            s.sendMessage(msg);
        }
    }
}
```
This snippet shows the broadcast logic. One device sends an update, then the server relays it to all others.

### 2. The Client
Each device runs a lightweight Java client that:
1. Connects to the server (`ws://<server-ip>:8080/sync`)
2. Monitors the system clipboard for changes.
3. Sends new data to the server.
4. Updates the local clipboard when it receives new data from another device.

Here's the core idea of the clipboard monitoring:
```java
String current = clipboard.read();
if (!current.equals(lastClipboard)) {
    lastClipboard = current;
    socket.sentText(current, true);
}
```

and on receiving a message:

```java
socket.onText((ws, data, last) -> {
    if (!data.equals(lastClipboard)) {
        lastClipboard = data;
        clipboard.write(data);
    }
})
```

This avoids infinite loops by checking if the update matches the last known clipboard content.

### 3. Extra Features
On top of the basics, I added:
- Device IDs to identify where updates came from,
- SHA-256 hashing to detect/filter duplicate data.
- Reconnection/retry logic to handle dropped connections
- Optional encryption for securing clipboard data over the network

### 4. Running It
Currently there are two ways to run the application:
- by accessing it through the terminal
- by using .jar files

But both methods require the user to follow this simple procedure:
- Start the server (*Example with .jar file*)
```sh
java -jar cuhlippa-server.jar
```
- Run the client on each device (*Example with .jar file*)
```sh
java -jar cuhlippa-client.jar
```

Then all you need to do is add something to the system clipboard, and within a second it will appear on all others.

For the full implementation details (including SQLite, persistence, image/file support, and the UI), you can check out the repo [here](https://github.com/kiing-dom/cuhlippa)

---

## Challenges and Solutions
While the core implementation was pretty straightforward, the development wasn't without its share of problems along the way.

### 1. Avoiding Infinite Loops
**Problem**: If *Device A* copies text to *Device B* and receives it, upon trying to copy that text to *Device B*'s system clipboard, *Device B* might re-broadcast the same data to *Device A*, creating an endless loop.
**Solution Found**: Each clipboard update is hashed (using SHA-256), so if an incoming hash matches an existing entry, it's ignored.

### 2. Handling Disconnections
**Problem**: WebSocket connections can drop if a device sleeps, switches network, or the connection drops.\
**Solution**: I built a retry loop with exponential backoff so that clients automatically attempt to reconnect without requiring user action.

### 3. Security Concerns
**Problem**: Clipboard data can be sensitive (passwords, API keys, etc.). Sending it in plain text over a network is unsafe.\
**Solution**: Added a filter for patterns to ignore. Also added optional AES encryption, so all messages are secured in transit. This means even on a shared network, clipboard contents can't be intercepted.

### 4. Cross-Platform Clipboard Access
**Problem**: Different operating systems expose their clipboard differently.\
**Solution**: Java's `java.awt.datatransfer` package provides methods that provide access to the devices clipboard, and consistent abstractions for text. I have manually implemented Base64 encoding to support file paths and images.

### 5. State Persistence
**Problem**: If the client restarts, the clipboard history would be lost.\
**Solution**: I used SQLite for lightweight persistence so recent clipboard items would be saved across sessions. Any unneeded data can then be manually removed by the user.

If I was to list out all the issues that I learned from while working on this project, I would have to write another article. The challenges forced me to think beyond the "happy path" and build something closer to production-ready.

---

## Demo / Showcase
Sometimes things are easier to understand when you see them for yourself. Here's Cuhlippa in action:
<img src="/blog/clipboard-manager/cuhlippa-demo.gif" />
<p style="text-align: center; font-style: italic; font-size:12px; margin-top: 8px; color: #6b7280;">Cuhlippa Demo</p>

---

## Takeaways
Building Cuhlippa was more than just a clipboard sync project. I had been curious about WebSockets for a while and this project gave me the perfect opportunity to explore a real-world use case for them. It was also good to polish my Java skills and to deal with tricky problems like concurrency. I learned so much throughout the development, but here are some key lessons I walked away with:
- *WebSockets are perfect for real-time sync.* Unlike REST or polling, a persistent bi-directional connection meant updates felt instantaneous across devices.
- *Simplicity Matters.* The core idea of Cuhlippa (detect &rightarrow; send &rightarrow; broadcast &rightarrow; apply) is small, but it scales surprisingly well.
- *Edge cases are where the real learning happens*. Handling disconnections, avoiding sync loops and securing data all pushed me beyond the "happy path", which is assuming I will never run into any issues (I DID.)
- *Cross-platform development is challenging but rewarding.* Java compiles on all operating systems so it made clipboard handling easy, as I didn't have to rewrite logic for each OS.
- *Security is non-negotiable.* Adding AES encryption gave me peace of mind that sensitive data wouldn't be exposed on the network.

---

## Conclusion
What started as a personal annoyance &mdash; wasting time moving data between machines &mdash; turned into a fully functional cross-platform tool. By combining Java with WebSockets, I built Cuhlippa, a clipboard manager that keeps all my devices in sync in real-time.\
This project reminded me that sometimes the best way to learn is to have fun by solving your own problems. I got to dive deep into WebSocket communication, client-server architecture, and practical concerns like reconnection, deduplication, and encryption.

If you've ever wished for a seamless, platform-independent clipboard, I encourage you to try it out:\
[🔗 Cuhlippa on GitHub](https://github.com/kiing-dom/cuhlippa)

Feel free to fork the repo, suggest features, or extend it. I'm currently looking into new syncing strategies and improving response speeds. If you do something cool with the code I'd love to hear about it!