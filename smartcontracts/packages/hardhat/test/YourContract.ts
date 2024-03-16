import { expect } from "chai";
import { ethers } from "hardhat";
import { Zycket } from "../typechain-types";

describe("Zycket", function () {
  // We define a fixture to reuse the same setup in every test.

  let yourContract: Zycket;
  before(async () => {
    const [owner] = await ethers.getSigners();
    const yourContractFactory = await ethers.getContractFactory("Zycket");
    yourContract = (await yourContractFactory.connect(owner).deploy(owner.address, "teste")) as Zycket;
    await yourContract.waitForDeployment();
  });

  describe("Deployment", function () {
    it("Should have the right message on deploy", async function () {
      const [owner] = await ethers.getSigners();
      expect(await yourContract.balanceOf(owner.address)).to.equal(0);
      await yourContract.safeMint(owner.address);
      expect(await yourContract.balanceOf(owner.address)).to.equal(1);
      expect(await yourContract.tokenURI(0)).to.equal("teste");
    });
    it("Should second mint have the same tokenUri", async function () {
      const [owner, bob] = await ethers.getSigners();
      await yourContract.safeMint(bob.address);
      expect(await yourContract.balanceOf(bob.address)).to.equal(1);
      expect(await yourContract.tokenURI(1)).to.equal("teste");
    });
  });
});
