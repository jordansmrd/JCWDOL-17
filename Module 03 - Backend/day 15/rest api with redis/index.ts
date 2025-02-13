/** @format */

import express, { Request, Response } from "express";
import * as redis from "redis";
import axios from "axios";
const app = express();
const PORT = 8000;

const redisClient = redis.createClient({
  url: "redis://localhost:8081",
});

app.get("/posts", async (req: Request, res: Response) => {
  try {
    await redisClient.connect(); //connect redis client with redis server
    const redisData = await redisClient.get("posts");
    if (redisData)
      res.send({
        data: JSON.parse(redisData),
      });
    //response from redis
    else {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      await redisClient.setEx("posts", 5, JSON.stringify(response.data)); //save result api to redis

      res.send({
        data: response.data,
      }); //response from another API
    }
  } catch (error) {
    console.log(error);

    res.send({
      msg: JSON.stringify(error),
    });
  } finally {
    await redisClient.disconnect();
  }
});

app.listen(PORT, () => {
  console.log("app is running on port", PORT);
});
