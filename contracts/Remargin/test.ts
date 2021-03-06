// @ts-ignore
import {ethers} from "hardhat";
import {fromWei, toWei} from "../../utils/utils";

async function test() {
  const Contract = await ethers.getContractFactory("Remargin");
  const contract = await Contract.deploy();

  await contract.deployed();
  console.log("Greeter deployed to:", contract.address);
  const {keeperGasReward, markPrice, margin, position, targetMargin, amount} = await contract.callStatic.calAmountWithLeverage(
    "0xc32a2dfee97e2babc90a2b5e6aef41e789ef2e13", 0, toWei("3")
  )
  console.log("keeperGasReward: " + fromWei(keeperGasReward.toString()))
  console.log("markPrice: " + fromWei(markPrice.toString()))
  console.log("position: " + fromWei(position.toString()))
  console.log("margin: " + fromWei(margin.toString()))
  console.log("targetMargin: " + fromWei(targetMargin.toString()))
  console.log("amount: " + fromWei(amount.toString()))
}

test().catch((error) => {
  console.error(error);
  process.exitCode = 1;
})