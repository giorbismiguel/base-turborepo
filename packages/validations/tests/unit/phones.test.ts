import * as Yup from "yup";
import "../../src/strings";
import { REGULAR_EXPRESSION } from "../../src/strings/phone";
import { PHONE_LIST_MOCK_ERROR } from "../utils";

const { PHONE_LIST_MOCK } = require("../utils");

const regex = new RegExp(REGULAR_EXPRESSION.PHONE);

describe("Phone Cell Validator", function () {
  it(`should ignore empty string`, function () {
    // @ts-ignore
    const testScheme = Yup.string().phone();
    testScheme.validate("");
  });

  it(`should handle the phone utils ${PHONE_LIST_MOCK.length} numbers`, function () {
    PHONE_LIST_MOCK.forEach(async (e: string) => {
      if (!regex.test(e)) console.log(e);
      expect(regex.test(e)).toEqual(true);
    });
  });

  it("should handle each case phone utils numbers", function () {
    PHONE_LIST_MOCK_ERROR.forEach(async (e: string) => {
      expect(regex.test(e)).toEqual(false);
    });
  });

  it("should handle the mobile numbers", async () => {
    expect(regex.test("+5353782282")).toEqual(true);
    expect(regex.test("53782282")).toEqual(true);
    expect(regex.test("5353782282")).toEqual(true);
    expect(regex.test("1234567890")).toEqual(true);
  });

  it("should handle lenght of the numbers", async () => {
    const number = "530823164862222345";
    expect(regex.test(number) && number.length <= 15).toEqual(false);
  });

  it("should handle the phone number 77665566", async () => {
    expect(regex.test("77665566")).toEqual(true);
  });

  it("should handle the phone line numbers", async () => {
    expect(regex.test("72033366")).toEqual(true);
    expect(regex.test("24489163")).toEqual(true);
    expect(regex.test("24464301")).toEqual(true);
    expect(regex.test("48847167")).toEqual(true);
    expect(regex.test("22588674")).toEqual(true);
    expect(regex.test("54810792")).toEqual(true);
  });

  it("should handle the cuban phone line numbers", async () => {
    expect(regex.test("+5353259595")).toEqual(true);
    expect(regex.test("5353259895")).toEqual(true);
    expect(regex.test("53259895")).toEqual(true);
  });
});
