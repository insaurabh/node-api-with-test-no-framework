import { randomUUID } from "node:crypto";

export default class Hero {
  constructor({ name, age, power }) {
    this.age = age;
    this.power = power;
    this.name = name;
    this.id = randomUUID();
  }
}
