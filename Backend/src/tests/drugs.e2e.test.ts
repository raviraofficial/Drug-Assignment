import request from "supertest";
import { app } from "..";

describe("GET /drugs", () => {
  it("should return all drugs", async () => {
    const res = await request(app).get("/drugs");
    expect(res.statusCode).toEqual(200);
    expect(Array.isArray(res.body)).toBe(true);
  });
});
