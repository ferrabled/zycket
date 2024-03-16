import { expect } from "chai";
import { ethers } from "hardhat";
import { Zycket } from "../typechain-types";

describe("Zycket", function () {
  // We define a fixture to reuse the same setup in every test.

  let yourContract: Zycket;
  before(async () => {
    const [owner] = await ethers.getSigners();
    const yourContractFactory = await ethers.getContractFactory("Zycket");
    yourContract = (await yourContractFactory.connect(owner).deploy(owner.address)) as Zycket;
    await yourContract.waitForDeployment();
  });

  describe("Deployment", function () {
    it("Should have the right message on deploy", async function () {
      const [owner, bob] = await ethers.getSigners();
      expect(await yourContract.balanceOf(owner.address)).to.equal(0);
      await yourContract.safeMint(owner.address, 1)
      expect(await yourContract.balanceOf(owner.address)).to.equal(1);
    });

  });
});
