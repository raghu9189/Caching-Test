# 🧠 Node.js Cache Prototype

This is a simple prototype project built with **Express.js** and **node-cache** to understand basic **in-memory caching mechanisms**. It demonstrates how cache hits, misses, purges, and updates work.

---

## 🛠 Tech Stack

* **Node.js**
* **Express**
* **[node-cache](https://www.npmjs.com/package/node-cache)** — Simple in-memory cache for Node.js

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/raghu9189/Caching-Test.git
cd Caching-Test
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Run the Server

```bash
node index.js
```

Server will start on:

```
http://localhost:8080
```

---

## 📦 API Endpoints

### `GET /:id`

* **Purpose:** Check if the value exists in cache.
* **Behavior:**

  * If cached: returns `Cache Hit = <value>`
  * If not cached: sets the value and returns `Cache Miss = <value>`

📌 **Example:**

```bash
curl http://localhost:8080/123
```

---

### `GET /cache-purge/:id`

* **Purpose:** Delete the cached value for the given key.
* **Behavior:**

  * If exists: deletes the cache and returns `Cache Deleted = <id>`
  * If not exists: sets the value and returns `Cache Set = <id>`

📌 **Example:**

```bash
curl http://localhost:8080/cache-purge/123
```

---

### `GET /cache-update/:id`

* **Purpose:** Update the value in the cache.
* **Behavior:**

  * If exists: deletes and updates the cache with `New <id>`
  * If not exists: creates the new cache value

📌 **Example:**

```bash
curl http://localhost:8080/cache-update/123
```

---

### `GET /cache-stats`

* **Purpose:** Log cache statistics to the console.
* **Returns:** `"stats"` as a placeholder response.

📌 **Example:**

```bash
curl http://localhost:8080/cache-stats
```

---

## ⏱ TTL Configuration

* Cache entries expire after **1 hour (3600 seconds)**, using `stdTTL` setting of `node-cache`.

---

## 📚 What You'll Learn

* How to implement a simple in-memory cache in Node.js
* Differentiating cache **hits** and **misses**
* Cache **purging**, **updating**, and viewing **stats**
* Using `node-cache` for fast, temporary storage

---

## 🧼 Improvements (Optional)

* Add persistent storage (e.g., Redis) for distributed caching
* Add support for query string parameters
* Use a structured logging library instead of `console.log`
* Use ESModules

---

## 🧑‍💻 Author

Made with ❤️ by **Raghu Ballu**

