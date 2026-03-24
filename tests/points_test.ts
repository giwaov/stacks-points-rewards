import { describe, it, expect } from "vitest";
import { Cl } from "@stacks/transactions";

describe("points-rewards", () => {
  it("should mint points", () => {
    const result = simnet.callPublicFn("points-rewards", "mint-points", [Cl.principal(wallet2), Cl.uint(100)], deployer);
    expect(result.result).toBeOk(Cl.bool(true));
  });

  it("should transfer points", () => {
    simnet.callPublicFn("points-rewards", "mint-points", [Cl.principal(wallet1), Cl.uint(100)], deployer);
    const result = simnet.callPublicFn("points-rewards", "transfer-points", [Cl.principal(wallet2), Cl.uint(50)], wallet1);
    expect(result.result).toBeOk(Cl.bool(true));
  });
});
