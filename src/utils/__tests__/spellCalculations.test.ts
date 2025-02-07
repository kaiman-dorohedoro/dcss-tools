import { describe, expect, test } from "@jest/globals";
import { calculateSpellFailureRate } from "../spellCalculation";

describe("Spell Calculations", () => {
  test("should calculate spell success correctly", () => {
    const failureRate = calculateSpellFailureRate({
      strength: 4,
      spellcastingSkill: 4.5,
      intelligence: 25,
      spellSkills: [
        { name: "conjuration", skill: 5.3 },
        { name: "fire", skill: 0 },
      ],
      spellDifficulty: 4,
      armour: "robe",
      shield: "none",
      armourSkill: 0,
      shieldSkill: 0,
    });

    expect(failureRate).toBe(28);
  });

  test("should calculate spell success correctly", () => {
    const failureRate = calculateSpellFailureRate({
      strength: 4,
      spellcastingSkill: 4.8,
      intelligence: 25,
      spellSkills: [
        { name: "conjuration", skill: 5.4 },
        { name: "fire", skill: 0.8 },
      ],
      spellDifficulty: 4,
      armour: "robe",
      shield: "none",
      armourSkill: 0,
      shieldSkill: 0,
    });

    expect(failureRate).toBe(24);
  });

  test("should calculate spell success correctly", () => {
    const failureRate = calculateSpellFailureRate({
      strength: 4,
      spellcastingSkill: 6.2,
      intelligence: 31,
      spellSkills: [
        { name: "conjuration", skill: 6.3 },
        { name: "fire", skill: 3.2 },
      ],
      spellDifficulty: 4,
      armour: "robe",
      shield: "none",
      armourSkill: 0,
      shieldSkill: 0,
    });

    expect(failureRate).toBe(7);
  });

  test("should calculate spell success correctly", () => {
    const failureRate = calculateSpellFailureRate({
      strength: 4,
      spellcastingSkill: 9.2,
      intelligence: 32,
      spellSkills: [
        { name: "conjuration", skill: 7.2 },
        { name: "fire", skill: 4.3 },
      ],
      spellDifficulty: 4,
      armour: "robe",
      shield: "none",
      armourSkill: 0,
      shieldSkill: 0,
    });

    expect(failureRate).toBe(3);
  });

  test("should calculate spell success correctly", () => {
    const failureRate = calculateSpellFailureRate({
      strength: 4,
      spellcastingSkill: 9.2,
      intelligence: 32,
      spellSkills: [
        { name: "conjuration", skill: 7.2 },
        { name: "fire", skill: 4.3 },
      ],
      spellDifficulty: 4,
      armour: "leather_armour",
      shield: "none",
      armourSkill: 0,
      shieldSkill: 0,
    });

    expect(failureRate).toBe(5);
  });

  test("should calculate spell success correctly", () => {
    const failureRate = calculateSpellFailureRate({
      strength: 4,
      spellcastingSkill: 9.2,
      intelligence: 32,
      spellSkills: [
        { name: "conjuration", skill: 7.2 },
        { name: "fire", skill: 4.3 },
      ],
      spellDifficulty: 4,
      armour: "chain_mail",
      shield: "none",
      armourSkill: 0,
      shieldSkill: 0,
    });

    expect(failureRate).toBe(100);
  });

  test("should calculate spell success correctly", () => {
    const failureRate = calculateSpellFailureRate({
      strength: 4,
      spellcastingSkill: 9.2,
      intelligence: 32,
      spellSkills: [
        { name: "conjuration", skill: 7.2 },
        { name: "fire", skill: 4.3 },
      ],
      spellDifficulty: 4,
      armour: "ring_mail",
      shield: "none",
      armourSkill: 0,
      shieldSkill: 0,
    });

    expect(failureRate).toBe(19);
  });

  test("should calculate spell success correctly", () => {
    const failureRate = calculateSpellFailureRate({
      strength: 4,
      spellcastingSkill: 10.3,
      intelligence: 34,
      spellSkills: [
        { name: "conjuration", skill: 8 },
        { name: "fire", skill: 5 },
      ],
      spellDifficulty: 4,
      armour: "robe",
      shield: "none",
      armourSkill: 0,
      shieldSkill: 0,
    });

    expect(failureRate).toBe(1);
  });

  // https://archive.nemelex.cards/morgue/caiman/morgue-caiman-20250131-054317.txt
  test("should calculate spell success correctly", () => {
    const failureRate = calculateSpellFailureRate({
      strength: 13,
      spellcastingSkill: 7,
      intelligence: 13,
      spellSkills: [
        { name: "conjuration", skill: 8 },
        { name: "fire", skill: 4 },
      ],
      spellDifficulty: 3,
      armour: "leather_armour",
      shield: "none",
      armourSkill: 9,
      shieldSkill: 0,
    });

    expect(failureRate).toBe(4);
  });

  // https://archive.nemelex.cards/morgue/caiman/morgue-caiman-20250126-091458.txt
  test("should calculate spell success correctly", () => {
    const failureRate = calculateSpellFailureRate({
      strength: 41,
      spellcastingSkill: 15,
      intelligence: 9,
      spellSkills: [
        { name: "conjuration", skill: 14 },
        { name: "fire", skill: 6 },
      ],
      spellDifficulty: 4,
      armour: "storm_dragon",
      shield: "kite_shield",
      armourSkill: 15,
      shieldSkill: 18,
    });

    expect(failureRate).toBe(4);
  });

  // https://crawl.akrasiac.org/rawdata/hammy3456/morgue-hammy3456-20250206-022444.txt ==> 0.27 버전이었음
  // WIZARD 모드로 실행하니 다른 수치가 나와서 고침..
  test("tower shield, 5 level hex/air spell (silence)", () => {
    const failureRate = calculateSpellFailureRate({
      strength: 12,
      spellcastingSkill: 14,
      intelligence: 25,
      spellSkills: [
        { name: "hex", skill: 8 },
        { name: "air", skill: 9 },
      ],
      spellDifficulty: 5,
      armour: "robe",
      shield: "tower_shield",
      armourSkill: 0,
      shieldSkill: 24.6,
    });

    expect(failureRate).toBe(3);
  });

  test("tower shield, 6 level conj/erth spell (Iron Shot) - same case as above", () => {
    const failureRate = calculateSpellFailureRate({
      strength: 12,
      spellcastingSkill: 14,
      intelligence: 25,
      spellSkills: [
        { name: "conjuration", skill: 14 },
        { name: "earth", skill: 13 },
      ],
      spellDifficulty: 6,
      armour: "robe",
      shield: "tower_shield",
      armourSkill: 0,
      shieldSkill: 24.6,
    });

    expect(failureRate).toBe(2);
  });

  test("tower shield, 2 level conj/air spell (static discharge) - same case as above", () => {
    const failureRate = calculateSpellFailureRate({
      strength: 12,
      spellcastingSkill: 14,
      intelligence: 25,
      spellSkills: [
        { name: "conjuration", skill: 14 },
        { name: "air", skill: 9 },
      ],
      spellDifficulty: 2,
      armour: "robe",
      shield: "tower_shield",
      armourSkill: 0,
      shieldSkill: 24.6,
    });

    expect(failureRate).toBe(1);
  });

  // https://cbro.berotato.org/morgue/mroovka/morgue-mroovka-20250207-023701.txt
  test("tower shield, 8 level conj/alchemy spell (Fulsome Fusillade)", () => {
    const failureRate = calculateSpellFailureRate({
      strength: 29,
      spellcastingSkill: 16,
      intelligence: 43,
      spellSkills: [
        { name: "conjuration", skill: 20 },
        { name: "alchemy", skill: 19 },
      ],
      spellDifficulty: 8,
      armour: "robe",
      shield: "tower_shield",
      armourSkill: 0,
      shieldSkill: 15.2,
    });

    expect(failureRate).toBe(3);
  });

  // https://underhound.eu/crawl/morgue/SayItsName/morgue-SayItsName-20250205-225207.txt
  test("buckler, 8 level conj/earth spell (Lehudib's Crystal Spear)", () => {
    const failureRate = calculateSpellFailureRate({
      strength: 8,
      spellcastingSkill: 23.3,
      intelligence: 34,
      spellSkills: [
        { name: "conjuration", skill: 14.3 },
        { name: "earth", skill: 25.8 },
      ],
      spellDifficulty: 8,
      armour: "robe",
      shield: "buckler",
      armourSkill: 0,
      shieldSkill: 19,
    });

    expect(failureRate).toBe(1);
  });

  // https://crawl.dcss.io/crawl/morgue/AintCerebovvered/morgue-AintCerebovvered-20250204-194125.txt
  test("tower shield, 9 level conj/air spell (Chaing Lightning)", () => {
    const failureRate = calculateSpellFailureRate({
      strength: 18,
      spellcastingSkill: 27,
      intelligence: 10,
      spellSkills: [
        { name: "conjuration", skill: 26.5 },
        { name: "air", skill: 27 },
      ],
      spellDifficulty: 9,
      armour: "robe",
      shield: "tower_shield",
      armourSkill: 0,
      shieldSkill: 27,
    });

    expect(failureRate).toBe(4);
  });

  // https://crawl.dcss.io/crawl/morgue/slifty/morgue-slifty-20250201-052559.txt
  test("kite shield, leather armour, 4 level tloc/air spell (Vhi's Electric Charge)", () => {
    const failureRate = calculateSpellFailureRate({
      strength: 14,
      spellcastingSkill: 10,
      intelligence: 14,
      spellSkills: [
        { name: "translocations", skill: 10 },
        { name: "air", skill: 5 },
      ],
      spellDifficulty: 4,
      armour: "leather_armour",
      shield: "kite_shield",
      armourSkill: 24,
      shieldSkill: 21,
    });

    expect(failureRate).toBe(7);
  });
});
