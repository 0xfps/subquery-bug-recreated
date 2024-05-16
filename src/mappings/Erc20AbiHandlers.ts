// SPDX-License-Identifier: Apache-2.0

// Auto-generated

import assert from "assert";
import { APXETHTransfer, ETHTransfer, PXETHTransfer, USDCTransfer, USDTTransfer, WETHTransfer, WSTETHTransfer } from "../types";
import { TransferLog, } from "../types/abi-interfaces/Erc20Abi";

export async function handleTransferErc20AbiLogUSDC(log: TransferLog): Promise<void> {
    // Place your code logic here
    logger.info(`New transfer transaction log at block ${log.blockNumber}`);
    assert(log.args, "No log.args");

    const transaction = USDCTransfer.create({
        id: log.transactionHash,
        blockHeight: BigInt(log.blockNumber),
        to: log.args.to,
        from: log.args.from,
        value: log.args.value.toBigInt(),
        contractAddress: log.address,
    });

    await transaction.save();
}

export async function handleTransferErc20AbiLogUSDT(log: TransferLog): Promise<void> {
    // Place your code logic here
    logger.info(`New transfer transaction log at block ${log.blockNumber}`);
    assert(log.args, "No log.args");

    const transaction = USDTTransfer.create({
        id: log.transactionHash,
        blockHeight: BigInt(log.blockNumber),
        to: log.args.to,
        from: log.args.from,
        value: log.args.value.toBigInt(),
        contractAddress: log.address,
    });

    await transaction.save();
}

export async function handleTransferErc20AbiLogETH(log: TransferLog): Promise<void> {
    // Place your code logic here
    logger.info(`New transfer transaction log at block ${log.blockNumber}`);
    assert(log.args, "No log.args");

    const transaction = ETHTransfer.create({
        id: log.transactionHash,
        blockHeight: BigInt(log.blockNumber),
        to: log.args.to,
        from: log.args.from,
        value: log.args.value.toBigInt(),
        contractAddress: log.address,
    });

    await transaction.save();
}

export async function handleTransferErc20AbiLogWETH(log: TransferLog): Promise<void> {
    // Place your code logic here
    logger.info(`New transfer transaction log at block ${log.blockNumber}`);
    assert(log.args, "No log.args");

    const transaction = WETHTransfer.create({
        id: log.transactionHash,
        blockHeight: BigInt(log.blockNumber),
        to: log.args.to,
        from: log.args.from,
        value: log.args.value.toBigInt(),
        contractAddress: log.address,
    });

    await transaction.save();
}

export async function handleTransferErc20AbiLogPXETH(log: TransferLog): Promise<void> {
    // Place your code logic here
    logger.info(`New transfer transaction log at block ${log.blockNumber}`);
    assert(log.args, "No log.args");

    const transaction = PXETHTransfer.create({
        id: log.transactionHash,
        blockHeight: BigInt(log.blockNumber),
        to: log.args.to,
        from: log.args.from,
        value: log.args.value.toBigInt(),
        contractAddress: log.address,
    });

    await transaction.save();
}

export async function handleTransferErc20AbiLogAPXETH(log: TransferLog): Promise<void> {
    // Place your code logic here
    logger.info(`New transfer transaction log at block ${log.blockNumber}`);
    assert(log.args, "No log.args");

    const transaction = APXETHTransfer.create({
        id: log.transactionHash,
        blockHeight: BigInt(log.blockNumber),
        to: log.args.to,
        from: log.args.from,
        value: log.args.value.toBigInt(),
        contractAddress: log.address,
    });

    await transaction.save();
}

export async function handleTransferErc20AbiLogWSTETH(log: TransferLog): Promise<void> {
    // Place your code logic here
    logger.info(`New transfer transaction log at block ${log.blockNumber}`);
    assert(log.args, "No log.args");

    const transaction = WSTETHTransfer.create({
        id: log.transactionHash,
        blockHeight: BigInt(log.blockNumber),
        to: log.args.to,
        from: log.args.from,
        value: log.args.value.toBigInt(),
        contractAddress: log.address,
    });

    await transaction.save();
}