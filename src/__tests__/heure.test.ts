import { describe, test, expect } from "vitest";
import { getHour, getValue } from "../modules/heure";

describe("function getValue", () => {
    describe("when lune is 1", () => {
        describe("when terre is 1", () => {
            test("when soleil is 1", () => {
                expect(getValue(1, 1, 1)).toBe(0);
            });

            test("when soleil is 2", () => {
                expect(getValue(1, 1, 2)).toBe(5);
            });
        });

        describe("when terre is 2", () => {
            test("when soleil is 1", () => {
                expect(getValue(1, 2, 1)).toBe(0);
            });

            test("when soleil is 2", () => {
                expect(getValue(1, 2, 2)).toBe(2);
            });
        });
    })

    describe("when lune is 2", () => {
        describe("when terre is 1", () => {
            test("when soleil is 1", () => {
                expect(getValue(2, 1, 1)).toBe(1.5);
            });

            test("when soleil is 2", () => {
                expect(getValue(2, 1, 2)).toBe(4);
            });
        });

        describe("when terre is 2", () => {
            test("when soleil is 1", () => {
                expect(getValue(2, 2, 1)).toBe(1.5);
            });

            test("when soleil is 2", () => {
                expect(getValue(2, 2, 2)).toBe(2);
            });
        });
    })
});

describe("function calculerHeure", () => {
    describe("when lune is 1", () => {
        describe("when terre is 1", () => {
            test("when soleil is 1", () => {
                expect(getHour(1, 1, 1)).toBe("mortin");
            });

            test("when soleil is 2", () => {
                expect(getHour(1, 1, 2)).toBe("nuight");
            });
        });

        describe("when terre is 2", () => {
            test("when soleil is 1", () => {
                expect(getHour(1, 2, 1)).toBe("mortin");
            });

            test("when soleil is 2", () => {
                expect(getHour(1, 2, 2)).toBe("aprenoon");
            });
        });
    })

    describe("when lune is 2", () => {
        describe("when terre is 1", () => {
            test("when soleil is 1", () => {
                expect(getHour(2, 1, 1)).toBe("aprenoon");
            });

            test("when soleil is 2", () => {
                expect(getHour(2, 1, 2)).toBe("soirning");
            });
        });

        describe("when terre is 2", () => {
            test("when soleil is 1", () => {
                expect(getHour(2, 2, 1)).toBe("aprenoon");
            });

            test("when soleil is 2", () => {
                expect(getHour(2, 2, 2)).toBe("aprenoon");
            });
        });
    })
});