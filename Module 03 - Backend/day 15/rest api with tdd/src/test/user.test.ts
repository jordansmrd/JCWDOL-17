/** @format */

import request from "supertest";
import app from "../app";
import { PrismaClient } from "@prisma/client";
import nock from "nock";
import axios from "axios";
const data = [
  {
    firstName: "john",
    lastName: "doe",
    email: "john.doe@mail.com",
  },
  {
    firstName: "david",
    lastName: "joe",
    email: "david.joe@mail.com",
  },
];
describe("testing route /api/users", () => {
  it("should return array of user", async () => {
    const response = await request(app).get("/api/users");
    expect(response.status).toBe(200);
    expect(response.body).toEqual({
      message: "ok",
      data: [],
    });
  });

  it("should return error", async () => {
    const response = await request(app).get("/api/users/100");
    expect(response.status).toBe(500);
    expect(response.body).toEqual({
      message: "id out of range",
    });
  });

  it("should return error", async () => {
    const response = await request(app).get("/api/users/hello");
    expect(response.status).toBe(500);
    expect(response.body).toEqual({
      message: "id out of range",
    });
  });
});

describe("GET API/USERS/PRISMA with before after", () => {
  const sampleData = data;
  const prisma = new PrismaClient();
  beforeAll(async () => {
    await prisma.$connect();
  }); // connect with prisma from the start of test

  beforeEach(async () => {
    const users = await prisma.user.findMany(); // check users
    if (users.length == 0) await prisma.user.createMany({ data }); // create mocking test data
  }); // before each test we're gonna start this function

  afterAll(async () => {
    await prisma.$disconnect();
  }); // after all tests do this function

  afterEach(async () => {
    await prisma.user.deleteMany({
      where: {},
    });
  }); // after each test finished do this function

  it("testing with prisma data", async () => {
    const response = await request(app).get("/api/users/prisma");
    expect(response.status).toBe(200);
    expect(response.body).toEqual({
      message: "ok",
      data,
    });
  }); //the test

  it("testing with nock", async () => {
    nock("http://localhost:8000")
      .get("/api/users/prisma")
      .reply(200, {
        data: [
          {
            firstName: "john",
            lastName: "doe",
            email: "john.doe@mail.com",
          },
        ],
      });

    const get = await axios.get("http://localhost:8000/api/users/prisma");
    expect(get.data).toHaveProperty("data", [
      {
        firstName: "john",
        lastName: "doe",
        email: "john.doe@mail.com",
      },
    ]);
  });
});
