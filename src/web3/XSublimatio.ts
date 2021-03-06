/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import BN from 'bn.js';
import { ContractOptions } from 'web3-eth-contract';
import { EventLog } from 'web3-core';
import { EventEmitter } from 'events';
import { Callback, PayableTransactionObject, NonPayableTransactionObject, BlockType, ContractEventLog, BaseContract } from './types';

export interface EventOptions {
    filter?: object;
    fromBlock?: BlockType;
    topics?: string[];
}

export type Approval = ContractEventLog<{
    owner: string;
    approved: string;
    tokenId: string;
    0: string;
    1: string;
    2: string;
}>;
export type ApprovalForAll = ContractEventLog<{
    owner: string;
    operator: string;
    approved: boolean;
    0: string;
    1: string;
    2: boolean;
}>;
export type BaseURISet = ContractEventLog<{
    baseURI: string;
    0: string;
}>;
export type BrewingEnabled = ContractEventLog<{}>;
export type ConsumingEnabled = ContractEventLog<{
    consumer: string;
    0: string;
}>;
export type DecompositionStarted = ContractEventLog<{
    owner: string;
    tokenId: string;
    burnDate: string;
    0: string;
    1: string;
    2: string;
}>;
export type OwnershipAccepted = ContractEventLog<{
    previousOwner: string;
    owner: string;
    0: string;
    1: string;
}>;
export type OwnershipProposed = ContractEventLog<{
    owner: string;
    pendingOwner: string;
    0: string;
    1: string;
}>;
export type ProceedsWithdrawn = ContractEventLog<{
    destination: string;
    amount: string;
    0: string;
    1: string;
}>;
export type Transfer = ContractEventLog<{
    from: string;
    to: string;
    tokenId: string;
    0: string;
    1: string;
    2: string;
}>;

export interface XSublimatio extends BaseContract {
    constructor(jsonInterface: any[], address?: string, options?: ContractOptions): XSublimatio;
    clone(): XSublimatio;
    methods: {
        DECOMPOSITION_TIME(): NonPayableTransactionObject<string>;

        MOLECULES_PER_PURCHASE(): NonPayableTransactionObject<string>;

        PRICE_PER_MOLECULE(): NonPayableTransactionObject<string>;

        acceptOwnership(): NonPayableTransactionObject<void>;

        approve(to: string, tokenId: number | string | BN): NonPayableTransactionObject<void>;

        availabilities(): NonPayableTransactionObject<{
            moleculesAvailabilities_: string[];
            drugAvailabilities_: string[];
            0: string[];
            1: string[];
        }>;

        balanceOf(owner: string): NonPayableTransactionObject<string>;

        baseURI(): NonPayableTransactionObject<string>;

        brew(
            tokenIds_: (number | string | BN)[],
            drugType_: number | string | BN,
            destination_: string
        ): NonPayableTransactionObject<string>;

        brewingEnabled(): NonPayableTransactionObject<boolean>;

        burnDateFor(arg0: number | string | BN): NonPayableTransactionObject<string>;

        consumingEnabledFor(arg0: string): NonPayableTransactionObject<boolean>;

        contractURI(): NonPayableTransactionObject<string>;

        decompose(tokenId_: number | string | BN): NonPayableTransactionObject<void>;

        drugAvailabilities(): NonPayableTransactionObject<string[]>;

        drugsAvailable(): NonPayableTransactionObject<string>;

        enableBrewing(): NonPayableTransactionObject<void>;

        enableConsumingFor(consumer_: string): NonPayableTransactionObject<void>;

        getApproved(tokenId: number | string | BN): NonPayableTransactionObject<string>;

        getDrugAvailability(drugType_: number | string | BN): NonPayableTransactionObject<string>;

        getMoleculeAvailability(moleculeType_: number | string | BN): NonPayableTransactionObject<string>;

        getRecipe(drugType_: number | string | BN): NonPayableTransactionObject<string[]>;

        isApprovedForAll(owner: string, operator: string): NonPayableTransactionObject<boolean>;

        moleculeAvailabilities(): NonPayableTransactionObject<string[]>;

        moleculesAvailable(): NonPayableTransactionObject<string>;

        name(): NonPayableTransactionObject<string>;

        owner(): NonPayableTransactionObject<string>;

        ownerOf(tokenId: number | string | BN): NonPayableTransactionObject<string>;

        pendingOwner(): NonPayableTransactionObject<string>;

        proposeOwnership(newOwner_: string): NonPayableTransactionObject<void>;

        purchase(destination_: string, minQuantity_: number | string | BN): PayableTransactionObject<string[]>;

        'safeTransferFrom(address,address,uint256)'(
            from: string,
            to: string,
            tokenId: number | string | BN
        ): NonPayableTransactionObject<void>;

        'safeTransferFrom(address,address,uint256,bytes)'(
            from: string,
            to: string,
            tokenId: number | string | BN,
            _data: string | number[]
        ): NonPayableTransactionObject<void>;

        setApprovalForAll(operator: string, approved: boolean): NonPayableTransactionObject<void>;

        setBaseURI(baseURI_: string): NonPayableTransactionObject<void>;

        startDecomposition(tokenId_: number | string | BN): NonPayableTransactionObject<void>;

        supportsInterface(interfaceId: string | number[]): NonPayableTransactionObject<boolean>;

        symbol(): NonPayableTransactionObject<string>;

        tokenByIndex(index: number | string | BN): NonPayableTransactionObject<string>;

        tokenOfOwnerByIndex(owner: string, index: number | string | BN): NonPayableTransactionObject<string>;

        tokenURI(tokenId: number | string | BN): NonPayableTransactionObject<string>;

        totalSupply(): NonPayableTransactionObject<string>;

        transferFrom(from: string, to: string, tokenId: number | string | BN): NonPayableTransactionObject<void>;

        withdrawProceeds(amount_: number | string | BN, destination_: string): NonPayableTransactionObject<void>;
    };
    events: {
        Approval(cb?: Callback<Approval>): EventEmitter;
        Approval(options?: EventOptions, cb?: Callback<Approval>): EventEmitter;

        ApprovalForAll(cb?: Callback<ApprovalForAll>): EventEmitter;
        ApprovalForAll(options?: EventOptions, cb?: Callback<ApprovalForAll>): EventEmitter;

        BaseURISet(cb?: Callback<BaseURISet>): EventEmitter;
        BaseURISet(options?: EventOptions, cb?: Callback<BaseURISet>): EventEmitter;

        BrewingEnabled(cb?: Callback<BrewingEnabled>): EventEmitter;
        BrewingEnabled(options?: EventOptions, cb?: Callback<BrewingEnabled>): EventEmitter;

        ConsumingEnabled(cb?: Callback<ConsumingEnabled>): EventEmitter;
        ConsumingEnabled(options?: EventOptions, cb?: Callback<ConsumingEnabled>): EventEmitter;

        DecompositionStarted(cb?: Callback<DecompositionStarted>): EventEmitter;
        DecompositionStarted(options?: EventOptions, cb?: Callback<DecompositionStarted>): EventEmitter;

        OwnershipAccepted(cb?: Callback<OwnershipAccepted>): EventEmitter;
        OwnershipAccepted(options?: EventOptions, cb?: Callback<OwnershipAccepted>): EventEmitter;

        OwnershipProposed(cb?: Callback<OwnershipProposed>): EventEmitter;
        OwnershipProposed(options?: EventOptions, cb?: Callback<OwnershipProposed>): EventEmitter;

        ProceedsWithdrawn(cb?: Callback<ProceedsWithdrawn>): EventEmitter;
        ProceedsWithdrawn(options?: EventOptions, cb?: Callback<ProceedsWithdrawn>): EventEmitter;

        Transfer(cb?: Callback<Transfer>): EventEmitter;
        Transfer(options?: EventOptions, cb?: Callback<Transfer>): EventEmitter;

        allEvents(options?: EventOptions, cb?: Callback<EventLog>): EventEmitter;
    };

    once(event: 'Approval', cb: Callback<Approval>): void;
    once(event: 'Approval', options: EventOptions, cb: Callback<Approval>): void;

    once(event: 'ApprovalForAll', cb: Callback<ApprovalForAll>): void;
    once(event: 'ApprovalForAll', options: EventOptions, cb: Callback<ApprovalForAll>): void;

    once(event: 'BaseURISet', cb: Callback<BaseURISet>): void;
    once(event: 'BaseURISet', options: EventOptions, cb: Callback<BaseURISet>): void;

    once(event: 'BrewingEnabled', cb: Callback<BrewingEnabled>): void;
    once(event: 'BrewingEnabled', options: EventOptions, cb: Callback<BrewingEnabled>): void;

    once(event: 'ConsumingEnabled', cb: Callback<ConsumingEnabled>): void;
    once(event: 'ConsumingEnabled', options: EventOptions, cb: Callback<ConsumingEnabled>): void;

    once(event: 'DecompositionStarted', cb: Callback<DecompositionStarted>): void;
    once(event: 'DecompositionStarted', options: EventOptions, cb: Callback<DecompositionStarted>): void;

    once(event: 'OwnershipAccepted', cb: Callback<OwnershipAccepted>): void;
    once(event: 'OwnershipAccepted', options: EventOptions, cb: Callback<OwnershipAccepted>): void;

    once(event: 'OwnershipProposed', cb: Callback<OwnershipProposed>): void;
    once(event: 'OwnershipProposed', options: EventOptions, cb: Callback<OwnershipProposed>): void;

    once(event: 'ProceedsWithdrawn', cb: Callback<ProceedsWithdrawn>): void;
    once(event: 'ProceedsWithdrawn', options: EventOptions, cb: Callback<ProceedsWithdrawn>): void;

    once(event: 'Transfer', cb: Callback<Transfer>): void;
    once(event: 'Transfer', options: EventOptions, cb: Callback<Transfer>): void;
}
