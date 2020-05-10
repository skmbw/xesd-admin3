import * as $protobuf from 'protobufjs';

/** Namespace com. */
export namespace com {

    /** Namespace xueershangda. */
    namespace xueershangda {

        /** Namespace tianxun. */
        namespace tianxun {

            /** Namespace account. */
            namespace account {

                /** Namespace model. */
                namespace model {

                    /** Properties of an AccountDetail. */
                    interface IAccountDetail {

                        /** AccountDetail id */
                        id?: (string|null);

                        /** AccountDetail userId */
                        userId?: (string|null);

                        /** AccountDetail accountId */
                        accountId?: (string|null);

                        /** AccountDetail amount */
                        amount?: (number|null);

                        /** AccountDetail category */
                        category?: (number|null);

                        /** AccountDetail operationTime */
                        operationTime?: (number|null);

                        /** AccountDetail ordersId */
                        ordersId?: (string|null);

                        /** AccountDetail tradeNo */
                        tradeNo?: (string|null);

                        /** AccountDetail state */
                        state?: (number|null);

                        /** AccountDetail updateDate */
                        updateDate?: (number|null);

                        /** AccountDetail page */
                        page?: (number|null);

                        /** AccountDetail pageSize */
                        pageSize?: (number|null);

                        /** AccountDetail orderBy */
                        orderBy?: (string|null);
                    }

                    /** Represents an AccountDetail. */
                    class AccountDetail implements IAccountDetail {

                        /**
                         * Constructs a new AccountDetail.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: com.xueershangda.tianxun.account.model.IAccountDetail);

                        /** AccountDetail id. */
                        public id: string;

                        /** AccountDetail userId. */
                        public userId: string;

                        /** AccountDetail accountId. */
                        public accountId: string;

                        /** AccountDetail amount. */
                        public amount: number;

                        /** AccountDetail category. */
                        public category: number;

                        /** AccountDetail operationTime. */
                        public operationTime: (number);

                        /** AccountDetail ordersId. */
                        public ordersId: string;

                        /** AccountDetail tradeNo. */
                        public tradeNo: string;

                        /** AccountDetail state. */
                        public state: number;

                        /** AccountDetail updateDate. */
                        public updateDate: (number);

                        /** AccountDetail page. */
                        public page: number;

                        /** AccountDetail pageSize. */
                        public pageSize: number;

                        /** AccountDetail orderBy. */
                        public orderBy: string;

                        /**
                         * Creates a new AccountDetail instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns AccountDetail instance
                         */
                        public static create(properties?: com.xueershangda.tianxun.account.model.IAccountDetail): com.xueershangda.tianxun.account.model.AccountDetail;

                        /**
                         * Encodes the specified AccountDetail message. Does not implicitly {@link com.xueershangda.tianxun.account.model.AccountDetail.verify|verify} messages.
                         * @param message AccountDetail message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: com.xueershangda.tianxun.account.model.IAccountDetail, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified AccountDetail message, length delimited. Does not implicitly {@link com.xueershangda.tianxun.account.model.AccountDetail.verify|verify} messages.
                         * @param message AccountDetail message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: com.xueershangda.tianxun.account.model.IAccountDetail, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an AccountDetail message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns AccountDetail
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.xueershangda.tianxun.account.model.AccountDetail;

                        /**
                         * Decodes an AccountDetail message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns AccountDetail
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.xueershangda.tianxun.account.model.AccountDetail;

                        /**
                         * Verifies an AccountDetail message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates an AccountDetail message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns AccountDetail
                         */
                        public static fromObject(object: { [k: string]: any }): com.xueershangda.tianxun.account.model.AccountDetail;

                        /**
                         * Creates a plain object from an AccountDetail message. Also converts values to other types if specified.
                         * @param message AccountDetail
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: com.xueershangda.tianxun.account.model.AccountDetail, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this AccountDetail to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of an AccountDetailReply. */
                    interface IAccountDetailReply {

                        /** AccountDetailReply code */
                        code?: (number|null);

                        /** AccountDetailReply message */
                        message?: (string|null);

                        /** AccountDetailReply data */
                        data?: (com.xueershangda.tianxun.account.model.IAccountDetail[]|null);

                        /** AccountDetailReply account */
                        account?: (com.xueershangda.tianxun.account.model.IAccount|null);
                    }

                    /** Represents an AccountDetailReply. */
                    class AccountDetailReply implements IAccountDetailReply {

                        /**
                         * Constructs a new AccountDetailReply.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: com.xueershangda.tianxun.account.model.IAccountDetailReply);

                        /** AccountDetailReply code. */
                        public code: number;

                        /** AccountDetailReply message. */
                        public message: string;

                        /** AccountDetailReply data. */
                        public data: com.xueershangda.tianxun.account.model.IAccountDetail[];

                        /** AccountDetailReply account. */
                        public account?: (com.xueershangda.tianxun.account.model.IAccount|null);

                        /**
                         * Creates a new AccountDetailReply instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns AccountDetailReply instance
                         */
                        public static create(properties?: com.xueershangda.tianxun.account.model.IAccountDetailReply): com.xueershangda.tianxun.account.model.AccountDetailReply;

                        /**
                         * Encodes the specified AccountDetailReply message. Does not implicitly {@link com.xueershangda.tianxun.account.model.AccountDetailReply.verify|verify} messages.
                         * @param message AccountDetailReply message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: com.xueershangda.tianxun.account.model.IAccountDetailReply, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified AccountDetailReply message, length delimited. Does not implicitly {@link com.xueershangda.tianxun.account.model.AccountDetailReply.verify|verify} messages.
                         * @param message AccountDetailReply message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: com.xueershangda.tianxun.account.model.IAccountDetailReply, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an AccountDetailReply message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns AccountDetailReply
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.xueershangda.tianxun.account.model.AccountDetailReply;

                        /**
                         * Decodes an AccountDetailReply message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns AccountDetailReply
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.xueershangda.tianxun.account.model.AccountDetailReply;

                        /**
                         * Verifies an AccountDetailReply message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates an AccountDetailReply message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns AccountDetailReply
                         */
                        public static fromObject(object: { [k: string]: any }): com.xueershangda.tianxun.account.model.AccountDetailReply;

                        /**
                         * Creates a plain object from an AccountDetailReply message. Also converts values to other types if specified.
                         * @param message AccountDetailReply
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: com.xueershangda.tianxun.account.model.AccountDetailReply, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this AccountDetailReply to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of an Account. */
                    interface IAccount {

                        /** Account id */
                        id?: (string|null);

                        /** Account alipay */
                        alipay?: (string|null);

                        /** Account weixin */
                        weixin?: (string|null);

                        /** Account balance */
                        balance?: (number|null);

                        /** Account userId */
                        userId?: (string|null);

                        /** Account account */
                        account?: (string|null);

                        /** Account payment */
                        payment?: (number|null);

                        /** Account income */
                        income?: (number|null);

                        /** Account recharge */
                        recharge?: (number|null);

                        /** Account state */
                        state?: (number|null);

                        /** Account createDate */
                        createDate?: (number|null);

                        /** Account page */
                        page?: (number|null);

                        /** Account pageSize */
                        pageSize?: (number|null);

                        /** Account orderBy */
                        orderBy?: (string|null);

                        /** Account avatar */
                        avatar?: (string|null);

                        /** Account text */
                        text?: (string|null);
                    }

                    /** Represents an Account. */
                    class Account implements IAccount {

                        /**
                         * Constructs a new Account.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: com.xueershangda.tianxun.account.model.IAccount);

                        /** Account id. */
                        public id: string;

                        /** Account alipay. */
                        public alipay: string;

                        /** Account weixin. */
                        public weixin: string;

                        /** Account balance. */
                        public balance: number;

                        /** Account userId. */
                        public userId: string;

                        /** Account account. */
                        public account: string;

                        /** Account payment. */
                        public payment: number;

                        /** Account income. */
                        public income: number;

                        /** Account recharge. */
                        public recharge: number;

                        /** Account state. */
                        public state: number;

                        /** Account createDate. */
                        public createDate: (number);

                        /** Account page. */
                        public page: number;

                        /** Account pageSize. */
                        public pageSize: number;

                        /** Account orderBy. */
                        public orderBy: string;

                        /** Account avatar. */
                        public avatar: string;

                        /** Account text. */
                        public text: string;

                        /**
                         * Creates a new Account instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns Account instance
                         */
                        public static create(properties?: com.xueershangda.tianxun.account.model.IAccount): com.xueershangda.tianxun.account.model.Account;

                        /**
                         * Encodes the specified Account message. Does not implicitly {@link com.xueershangda.tianxun.account.model.Account.verify|verify} messages.
                         * @param message Account message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: com.xueershangda.tianxun.account.model.IAccount, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified Account message, length delimited. Does not implicitly {@link com.xueershangda.tianxun.account.model.Account.verify|verify} messages.
                         * @param message Account message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: com.xueershangda.tianxun.account.model.IAccount, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an Account message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns Account
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.xueershangda.tianxun.account.model.Account;

                        /**
                         * Decodes an Account message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns Account
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.xueershangda.tianxun.account.model.Account;

                        /**
                         * Verifies an Account message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates an Account message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns Account
                         */
                        public static fromObject(object: { [k: string]: any }): com.xueershangda.tianxun.account.model.Account;

                        /**
                         * Creates a plain object from an Account message. Also converts values to other types if specified.
                         * @param message Account
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: com.xueershangda.tianxun.account.model.Account, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this Account to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of an AccountReply. */
                    interface IAccountReply {

                        /** AccountReply code */
                        code?: (number|null);

                        /** AccountReply message */
                        message?: (string|null);

                        /** AccountReply data */
                        data?: (com.xueershangda.tianxun.account.model.IAccountDetail[]|null);

                        /** AccountReply account */
                        account?: (com.xueershangda.tianxun.account.model.IAccount|null);

                        /** AccountReply accountList */
                        accountList?: (com.xueershangda.tianxun.account.model.IAccount[]|null);

                        /** AccountReply score */
                        score?: (com.xueershangda.tianxun.score.model.IScore|null);
                    }

                    /** Represents an AccountReply. */
                    class AccountReply implements IAccountReply {

                        /**
                         * Constructs a new AccountReply.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: com.xueershangda.tianxun.account.model.IAccountReply);

                        /** AccountReply code. */
                        public code: number;

                        /** AccountReply message. */
                        public message: string;

                        /** AccountReply data. */
                        public data: com.xueershangda.tianxun.account.model.IAccountDetail[];

                        /** AccountReply account. */
                        public account?: (com.xueershangda.tianxun.account.model.IAccount|null);

                        /** AccountReply accountList. */
                        public accountList: com.xueershangda.tianxun.account.model.IAccount[];

                        /** AccountReply score. */
                        public score?: (com.xueershangda.tianxun.score.model.IScore|null);

                        /**
                         * Creates a new AccountReply instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns AccountReply instance
                         */
                        public static create(properties?: com.xueershangda.tianxun.account.model.IAccountReply): com.xueershangda.tianxun.account.model.AccountReply;

                        /**
                         * Encodes the specified AccountReply message. Does not implicitly {@link com.xueershangda.tianxun.account.model.AccountReply.verify|verify} messages.
                         * @param message AccountReply message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: com.xueershangda.tianxun.account.model.IAccountReply, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified AccountReply message, length delimited. Does not implicitly {@link com.xueershangda.tianxun.account.model.AccountReply.verify|verify} messages.
                         * @param message AccountReply message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: com.xueershangda.tianxun.account.model.IAccountReply, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an AccountReply message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns AccountReply
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.xueershangda.tianxun.account.model.AccountReply;

                        /**
                         * Decodes an AccountReply message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns AccountReply
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.xueershangda.tianxun.account.model.AccountReply;

                        /**
                         * Verifies an AccountReply message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates an AccountReply message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns AccountReply
                         */
                        public static fromObject(object: { [k: string]: any }): com.xueershangda.tianxun.account.model.AccountReply;

                        /**
                         * Creates a plain object from an AccountReply message. Also converts values to other types if specified.
                         * @param message AccountReply
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: com.xueershangda.tianxun.account.model.AccountReply, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this AccountReply to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of a PlatformDetail. */
                    interface IPlatformDetail {

                        /** PlatformDetail id */
                        id?: (string|null);

                        /** PlatformDetail userId */
                        userId?: (string|null);

                        /** PlatformDetail accountId */
                        accountId?: (string|null);

                        /** PlatformDetail amount */
                        amount?: (number|null);

                        /** PlatformDetail category */
                        category?: (number|null);

                        /** PlatformDetail operationTime */
                        operationTime?: (number|null);

                        /** PlatformDetail page */
                        page?: (number|null);

                        /** PlatformDetail pageSize */
                        pageSize?: (number|null);

                        /** PlatformDetail orderBy */
                        orderBy?: (string|null);
                    }

                    /** Represents a PlatformDetail. */
                    class PlatformDetail implements IPlatformDetail {

                        /**
                         * Constructs a new PlatformDetail.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: com.xueershangda.tianxun.account.model.IPlatformDetail);

                        /** PlatformDetail id. */
                        public id: string;

                        /** PlatformDetail userId. */
                        public userId: string;

                        /** PlatformDetail accountId. */
                        public accountId: string;

                        /** PlatformDetail amount. */
                        public amount: number;

                        /** PlatformDetail category. */
                        public category: number;

                        /** PlatformDetail operationTime. */
                        public operationTime: (number);

                        /** PlatformDetail page. */
                        public page: number;

                        /** PlatformDetail pageSize. */
                        public pageSize: number;

                        /** PlatformDetail orderBy. */
                        public orderBy: string;

                        /**
                         * Creates a new PlatformDetail instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns PlatformDetail instance
                         */
                        public static create(properties?: com.xueershangda.tianxun.account.model.IPlatformDetail): com.xueershangda.tianxun.account.model.PlatformDetail;

                        /**
                         * Encodes the specified PlatformDetail message. Does not implicitly {@link com.xueershangda.tianxun.account.model.PlatformDetail.verify|verify} messages.
                         * @param message PlatformDetail message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: com.xueershangda.tianxun.account.model.IPlatformDetail, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified PlatformDetail message, length delimited. Does not implicitly {@link com.xueershangda.tianxun.account.model.PlatformDetail.verify|verify} messages.
                         * @param message PlatformDetail message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: com.xueershangda.tianxun.account.model.IPlatformDetail, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a PlatformDetail message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns PlatformDetail
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.xueershangda.tianxun.account.model.PlatformDetail;

                        /**
                         * Decodes a PlatformDetail message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns PlatformDetail
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.xueershangda.tianxun.account.model.PlatformDetail;

                        /**
                         * Verifies a PlatformDetail message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a PlatformDetail message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns PlatformDetail
                         */
                        public static fromObject(object: { [k: string]: any }): com.xueershangda.tianxun.account.model.PlatformDetail;

                        /**
                         * Creates a plain object from a PlatformDetail message. Also converts values to other types if specified.
                         * @param message PlatformDetail
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: com.xueershangda.tianxun.account.model.PlatformDetail, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this PlatformDetail to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of a PlatformAccount. */
                    interface IPlatformAccount {

                        /** PlatformAccount id */
                        id?: (string|null);

                        /** PlatformAccount balance */
                        balance?: (number|null);

                        /** PlatformAccount total */
                        total?: (number|null);

                        /** PlatformAccount discount */
                        discount?: (number|null);

                        /** PlatformAccount page */
                        page?: (number|null);

                        /** PlatformAccount pageSize */
                        pageSize?: (number|null);

                        /** PlatformAccount orderBy */
                        orderBy?: (string|null);
                    }

                    /** Represents a PlatformAccount. */
                    class PlatformAccount implements IPlatformAccount {

                        /**
                         * Constructs a new PlatformAccount.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: com.xueershangda.tianxun.account.model.IPlatformAccount);

                        /** PlatformAccount id. */
                        public id: string;

                        /** PlatformAccount balance. */
                        public balance: number;

                        /** PlatformAccount total. */
                        public total: number;

                        /** PlatformAccount discount. */
                        public discount: number;

                        /** PlatformAccount page. */
                        public page: number;

                        /** PlatformAccount pageSize. */
                        public pageSize: number;

                        /** PlatformAccount orderBy. */
                        public orderBy: string;

                        /**
                         * Creates a new PlatformAccount instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns PlatformAccount instance
                         */
                        public static create(properties?: com.xueershangda.tianxun.account.model.IPlatformAccount): com.xueershangda.tianxun.account.model.PlatformAccount;

                        /**
                         * Encodes the specified PlatformAccount message. Does not implicitly {@link com.xueershangda.tianxun.account.model.PlatformAccount.verify|verify} messages.
                         * @param message PlatformAccount message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: com.xueershangda.tianxun.account.model.IPlatformAccount, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified PlatformAccount message, length delimited. Does not implicitly {@link com.xueershangda.tianxun.account.model.PlatformAccount.verify|verify} messages.
                         * @param message PlatformAccount message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: com.xueershangda.tianxun.account.model.IPlatformAccount, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a PlatformAccount message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns PlatformAccount
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.xueershangda.tianxun.account.model.PlatformAccount;

                        /**
                         * Decodes a PlatformAccount message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns PlatformAccount
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.xueershangda.tianxun.account.model.PlatformAccount;

                        /**
                         * Verifies a PlatformAccount message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a PlatformAccount message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns PlatformAccount
                         */
                        public static fromObject(object: { [k: string]: any }): com.xueershangda.tianxun.account.model.PlatformAccount;

                        /**
                         * Creates a plain object from a PlatformAccount message. Also converts values to other types if specified.
                         * @param message PlatformAccount
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: com.xueershangda.tianxun.account.model.PlatformAccount, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this PlatformAccount to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }
                }
            }

            /** Namespace score. */
            namespace score {

                /** Namespace model. */
                namespace model {

                    /** Properties of a Score. */
                    interface IScore {

                        /** Score id */
                        id?: (string|null);

                        /** Score userId */
                        userId?: (string|null);

                        /** Score year */
                        year?: (string|null);

                        /** Score score */
                        score?: (number|null);

                        /** Score lastScore */
                        lastScore?: (number|null);

                        /** Score state */
                        state?: (number|null);

                        /** Score createDate */
                        createDate?: (number|null);

                        /** Score updateDate */
                        updateDate?: (number|null);

                        /** Score page */
                        page?: (number|null);

                        /** Score pageSize */
                        pageSize?: (number|null);

                        /** Score orderBy */
                        orderBy?: (string|null);

                        /** Score recharge */
                        recharge?: (number|null);

                        /** Score income */
                        income?: (number|null);

                        /** Score payment */
                        payment?: (number|null);

                        /** Score nickName */
                        nickName?: (string|null);

                        /** Score account */
                        account?: (string|null);

                        /** Score avatar */
                        avatar?: (string|null);
                    }

                    /** Represents a Score. */
                    class Score implements IScore {

                        /**
                         * Constructs a new Score.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: com.xueershangda.tianxun.score.model.IScore);

                        /** Score id. */
                        public id: string;

                        /** Score userId. */
                        public userId: string;

                        /** Score year. */
                        public year: string;

                        /** Score score. */
                        public score: (number);

                        /** Score lastScore. */
                        public lastScore: (number);

                        /** Score state. */
                        public state: number;

                        /** Score createDate. */
                        public createDate: (number);

                        /** Score updateDate. */
                        public updateDate: (number);

                        /** Score page. */
                        public page: number;

                        /** Score pageSize. */
                        public pageSize: number;

                        /** Score orderBy. */
                        public orderBy: string;

                        /** Score recharge. */
                        public recharge: number;

                        /** Score income. */
                        public income: number;

                        /** Score payment. */
                        public payment: number;

                        /** Score nickName. */
                        public nickName: string;

                        /** Score account. */
                        public account: string;

                        /** Score avatar. */
                        public avatar: string;

                        /**
                         * Creates a new Score instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns Score instance
                         */
                        public static create(properties?: com.xueershangda.tianxun.score.model.IScore): com.xueershangda.tianxun.score.model.Score;

                        /**
                         * Encodes the specified Score message. Does not implicitly {@link com.xueershangda.tianxun.score.model.Score.verify|verify} messages.
                         * @param message Score message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: com.xueershangda.tianxun.score.model.IScore, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified Score message, length delimited. Does not implicitly {@link com.xueershangda.tianxun.score.model.Score.verify|verify} messages.
                         * @param message Score message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: com.xueershangda.tianxun.score.model.IScore, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a Score message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns Score
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.xueershangda.tianxun.score.model.Score;

                        /**
                         * Decodes a Score message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns Score
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.xueershangda.tianxun.score.model.Score;

                        /**
                         * Verifies a Score message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a Score message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns Score
                         */
                        public static fromObject(object: { [k: string]: any }): com.xueershangda.tianxun.score.model.Score;

                        /**
                         * Creates a plain object from a Score message. Also converts values to other types if specified.
                         * @param message Score
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: com.xueershangda.tianxun.score.model.Score, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this Score to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of a ScoreReply. */
                    interface IScoreReply {

                        /** ScoreReply code */
                        code?: (number|null);

                        /** ScoreReply message */
                        message?: (string|null);

                        /** ScoreReply data */
                        data?: (com.xueershangda.tianxun.score.model.IScoreDetail[]|null);

                        /** ScoreReply score */
                        score?: (com.xueershangda.tianxun.score.model.IScore|null);

                        /** ScoreReply scoreList */
                        scoreList?: (com.xueershangda.tianxun.score.model.IScore[]|null);
                    }

                    /** Represents a ScoreReply. */
                    class ScoreReply implements IScoreReply {

                        /**
                         * Constructs a new ScoreReply.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: com.xueershangda.tianxun.score.model.IScoreReply);

                        /** ScoreReply code. */
                        public code: number;

                        /** ScoreReply message. */
                        public message: string;

                        /** ScoreReply data. */
                        public data: com.xueershangda.tianxun.score.model.IScoreDetail[];

                        /** ScoreReply score. */
                        public score?: (com.xueershangda.tianxun.score.model.IScore|null);

                        /** ScoreReply scoreList. */
                        public scoreList: com.xueershangda.tianxun.score.model.IScore[];

                        /**
                         * Creates a new ScoreReply instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns ScoreReply instance
                         */
                        public static create(properties?: com.xueershangda.tianxun.score.model.IScoreReply): com.xueershangda.tianxun.score.model.ScoreReply;

                        /**
                         * Encodes the specified ScoreReply message. Does not implicitly {@link com.xueershangda.tianxun.score.model.ScoreReply.verify|verify} messages.
                         * @param message ScoreReply message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: com.xueershangda.tianxun.score.model.IScoreReply, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified ScoreReply message, length delimited. Does not implicitly {@link com.xueershangda.tianxun.score.model.ScoreReply.verify|verify} messages.
                         * @param message ScoreReply message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: com.xueershangda.tianxun.score.model.IScoreReply, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a ScoreReply message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns ScoreReply
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.xueershangda.tianxun.score.model.ScoreReply;

                        /**
                         * Decodes a ScoreReply message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns ScoreReply
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.xueershangda.tianxun.score.model.ScoreReply;

                        /**
                         * Verifies a ScoreReply message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a ScoreReply message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns ScoreReply
                         */
                        public static fromObject(object: { [k: string]: any }): com.xueershangda.tianxun.score.model.ScoreReply;

                        /**
                         * Creates a plain object from a ScoreReply message. Also converts values to other types if specified.
                         * @param message ScoreReply
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: com.xueershangda.tianxun.score.model.ScoreReply, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this ScoreReply to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of a ScoreDetail. */
                    interface IScoreDetail {

                        /** ScoreDetail id */
                        id?: (string|null);

                        /** ScoreDetail scoreId */
                        scoreId?: (string|null);

                        /** ScoreDetail score */
                        score?: (number|null);

                        /** ScoreDetail targetId */
                        targetId?: (string|null);

                        /** ScoreDetail type */
                        type?: (string|null);

                        /** ScoreDetail createDate */
                        createDate?: (number|null);

                        /** ScoreDetail comment */
                        comment?: (string|null);

                        /** ScoreDetail userId */
                        userId?: (string|null);

                        /** ScoreDetail page */
                        page?: (number|null);

                        /** ScoreDetail pageSize */
                        pageSize?: (number|null);

                        /** ScoreDetail orderBy */
                        orderBy?: (string|null);
                    }

                    /** Represents a ScoreDetail. */
                    class ScoreDetail implements IScoreDetail {

                        /**
                         * Constructs a new ScoreDetail.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: com.xueershangda.tianxun.score.model.IScoreDetail);

                        /** ScoreDetail id. */
                        public id: string;

                        /** ScoreDetail scoreId. */
                        public scoreId: string;

                        /** ScoreDetail score. */
                        public score: number;

                        /** ScoreDetail targetId. */
                        public targetId: string;

                        /** ScoreDetail type. */
                        public type: string;

                        /** ScoreDetail createDate. */
                        public createDate: (number);

                        /** ScoreDetail comment. */
                        public comment: string;

                        /** ScoreDetail userId. */
                        public userId: string;

                        /** ScoreDetail page. */
                        public page: number;

                        /** ScoreDetail pageSize. */
                        public pageSize: number;

                        /** ScoreDetail orderBy. */
                        public orderBy: string;

                        /**
                         * Creates a new ScoreDetail instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns ScoreDetail instance
                         */
                        public static create(properties?: com.xueershangda.tianxun.score.model.IScoreDetail): com.xueershangda.tianxun.score.model.ScoreDetail;

                        /**
                         * Encodes the specified ScoreDetail message. Does not implicitly {@link com.xueershangda.tianxun.score.model.ScoreDetail.verify|verify} messages.
                         * @param message ScoreDetail message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: com.xueershangda.tianxun.score.model.IScoreDetail, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified ScoreDetail message, length delimited. Does not implicitly {@link com.xueershangda.tianxun.score.model.ScoreDetail.verify|verify} messages.
                         * @param message ScoreDetail message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: com.xueershangda.tianxun.score.model.IScoreDetail, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a ScoreDetail message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns ScoreDetail
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.xueershangda.tianxun.score.model.ScoreDetail;

                        /**
                         * Decodes a ScoreDetail message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns ScoreDetail
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.xueershangda.tianxun.score.model.ScoreDetail;

                        /**
                         * Verifies a ScoreDetail message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a ScoreDetail message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns ScoreDetail
                         */
                        public static fromObject(object: { [k: string]: any }): com.xueershangda.tianxun.score.model.ScoreDetail;

                        /**
                         * Creates a plain object from a ScoreDetail message. Also converts values to other types if specified.
                         * @param message ScoreDetail
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: com.xueershangda.tianxun.score.model.ScoreDetail, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this ScoreDetail to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }
                }
            }

            /** Namespace answer. */
            namespace answer {

                /** Namespace model. */
                namespace model {

                    /** Properties of an Answer. */
                    interface IAnswer {

                        /** Answer id */
                        id?: (string|null);

                        /** Answer summary */
                        summary?: (string|null);

                        /** Answer income */
                        income?: (number|null);

                        /** Answer platform */
                        platform?: (boolean|null);

                        /** Answer answerUserId */
                        answerUserId?: (string|null);

                        /** Answer answerDate */
                        answerDate?: (number|null);

                        /** Answer questionId */
                        questionId?: (string|null);

                        /** Answer accept */
                        accept?: (number|null);

                        /** Answer orders */
                        orders?: (number|null);

                        /** Answer state */
                        state?: (number|null);

                        /** Answer open */
                        open?: (boolean|null);

                        /** Answer full */
                        full?: (boolean|null);

                        /** Answer content */
                        content?: (string|null);

                        /** Answer focusNumber */
                        focusNumber?: (number|null);

                        /** Answer loveNumber */
                        loveNumber?: (number|null);

                        /** Answer despiseNumber */
                        despiseNumber?: (number|null);

                        /** Answer page */
                        page?: (number|null);

                        /** Answer pageSize */
                        pageSize?: (number|null);

                        /** Answer orderBy */
                        orderBy?: (string|null);

                        /** Answer nickName */
                        nickName?: (string|null);

                        /** Answer avatar */
                        avatar?: (string|null);

                        /** Answer account */
                        account?: (string|null);

                        /** Answer password */
                        password?: (string|null);

                        /** Answer fileList */
                        fileList?: (com.xueershangda.tianxun.article.model.IImages[]|null);

                        /** Answer targetId */
                        targetId?: (string|null);

                        /** Answer ownerId */
                        ownerId?: (string|null);
                    }

                    /** Represents an Answer. */
                    class Answer implements IAnswer {

                        /**
                         * Constructs a new Answer.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: com.xueershangda.tianxun.answer.model.IAnswer);

                        /** Answer id. */
                        public id: string;

                        /** Answer summary. */
                        public summary: string;

                        /** Answer income. */
                        public income: number;

                        /** Answer platform. */
                        public platform: boolean;

                        /** Answer answerUserId. */
                        public answerUserId: string;

                        /** Answer answerDate. */
                        public answerDate: (number);

                        /** Answer questionId. */
                        public questionId: string;

                        /** Answer accept. */
                        public accept: number;

                        /** Answer orders. */
                        public orders: number;

                        /** Answer state. */
                        public state: number;

                        /** Answer open. */
                        public open: boolean;

                        /** Answer full. */
                        public full: boolean;

                        /** Answer content. */
                        public content: string;

                        /** Answer focusNumber. */
                        public focusNumber: (number);

                        /** Answer loveNumber. */
                        public loveNumber: (number);

                        /** Answer despiseNumber. */
                        public despiseNumber: (number);

                        /** Answer page. */
                        public page: number;

                        /** Answer pageSize. */
                        public pageSize: number;

                        /** Answer orderBy. */
                        public orderBy: string;

                        /** Answer nickName. */
                        public nickName: string;

                        /** Answer avatar. */
                        public avatar: string;

                        /** Answer account. */
                        public account: string;

                        /** Answer password. */
                        public password: string;

                        /** Answer fileList. */
                        public fileList: com.xueershangda.tianxun.article.model.IImages[];

                        /** Answer targetId. */
                        public targetId: string;

                        /** Answer ownerId. */
                        public ownerId: string;

                        /**
                         * Creates a new Answer instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns Answer instance
                         */
                        public static create(properties?: com.xueershangda.tianxun.answer.model.IAnswer): com.xueershangda.tianxun.answer.model.Answer;

                        /**
                         * Encodes the specified Answer message. Does not implicitly {@link com.xueershangda.tianxun.answer.model.Answer.verify|verify} messages.
                         * @param message Answer message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: com.xueershangda.tianxun.answer.model.IAnswer, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified Answer message, length delimited. Does not implicitly {@link com.xueershangda.tianxun.answer.model.Answer.verify|verify} messages.
                         * @param message Answer message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: com.xueershangda.tianxun.answer.model.IAnswer, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an Answer message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns Answer
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.xueershangda.tianxun.answer.model.Answer;

                        /**
                         * Decodes an Answer message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns Answer
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.xueershangda.tianxun.answer.model.Answer;

                        /**
                         * Verifies an Answer message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates an Answer message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns Answer
                         */
                        public static fromObject(object: { [k: string]: any }): com.xueershangda.tianxun.answer.model.Answer;

                        /**
                         * Creates a plain object from an Answer message. Also converts values to other types if specified.
                         * @param message Answer
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: com.xueershangda.tianxun.answer.model.Answer, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this Answer to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of an AnswerReply. */
                    interface IAnswerReply {

                        /** AnswerReply code */
                        code?: (number|null);

                        /** AnswerReply message */
                        message?: (string|null);

                        /** AnswerReply data */
                        data?: (com.xueershangda.tianxun.answer.model.IAnswer[]|null);

                        /** AnswerReply question */
                        question?: (com.xueershangda.tianxun.question.model.IQuestion|null);
                    }

                    /** Represents an AnswerReply. */
                    class AnswerReply implements IAnswerReply {

                        /**
                         * Constructs a new AnswerReply.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: com.xueershangda.tianxun.answer.model.IAnswerReply);

                        /** AnswerReply code. */
                        public code: number;

                        /** AnswerReply message. */
                        public message: string;

                        /** AnswerReply data. */
                        public data: com.xueershangda.tianxun.answer.model.IAnswer[];

                        /** AnswerReply question. */
                        public question?: (com.xueershangda.tianxun.question.model.IQuestion|null);

                        /**
                         * Creates a new AnswerReply instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns AnswerReply instance
                         */
                        public static create(properties?: com.xueershangda.tianxun.answer.model.IAnswerReply): com.xueershangda.tianxun.answer.model.AnswerReply;

                        /**
                         * Encodes the specified AnswerReply message. Does not implicitly {@link com.xueershangda.tianxun.answer.model.AnswerReply.verify|verify} messages.
                         * @param message AnswerReply message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: com.xueershangda.tianxun.answer.model.IAnswerReply, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified AnswerReply message, length delimited. Does not implicitly {@link com.xueershangda.tianxun.answer.model.AnswerReply.verify|verify} messages.
                         * @param message AnswerReply message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: com.xueershangda.tianxun.answer.model.IAnswerReply, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an AnswerReply message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns AnswerReply
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.xueershangda.tianxun.answer.model.AnswerReply;

                        /**
                         * Decodes an AnswerReply message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns AnswerReply
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.xueershangda.tianxun.answer.model.AnswerReply;

                        /**
                         * Verifies an AnswerReply message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates an AnswerReply message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns AnswerReply
                         */
                        public static fromObject(object: { [k: string]: any }): com.xueershangda.tianxun.answer.model.AnswerReply;

                        /**
                         * Creates a plain object from an AnswerReply message. Also converts values to other types if specified.
                         * @param message AnswerReply
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: com.xueershangda.tianxun.answer.model.AnswerReply, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this AnswerReply to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of a Dialogue. */
                    interface IDialogue {

                        /** Dialogue id */
                        id?: (string|null);

                        /** Dialogue userId */
                        userId?: (string|null);

                        /** Dialogue nickName */
                        nickName?: (string|null);

                        /** Dialogue dialogDate */
                        dialogDate?: (number|null);

                        /** Dialogue questionId */
                        questionId?: (string|null);

                        /** Dialogue state */
                        state?: (number|null);

                        /** Dialogue open */
                        open?: (boolean|null);

                        /** Dialogue answerId */
                        answerId?: (string|null);

                        /** Dialogue content */
                        content?: (string|null);

                        /** Dialogue page */
                        page?: (number|null);

                        /** Dialogue pageSize */
                        pageSize?: (number|null);

                        /** Dialogue orderBy */
                        orderBy?: (string|null);
                    }

                    /** Represents a Dialogue. */
                    class Dialogue implements IDialogue {

                        /**
                         * Constructs a new Dialogue.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: com.xueershangda.tianxun.answer.model.IDialogue);

                        /** Dialogue id. */
                        public id: string;

                        /** Dialogue userId. */
                        public userId: string;

                        /** Dialogue nickName. */
                        public nickName: string;

                        /** Dialogue dialogDate. */
                        public dialogDate: (number);

                        /** Dialogue questionId. */
                        public questionId: string;

                        /** Dialogue state. */
                        public state: number;

                        /** Dialogue open. */
                        public open: boolean;

                        /** Dialogue answerId. */
                        public answerId: string;

                        /** Dialogue content. */
                        public content: string;

                        /** Dialogue page. */
                        public page: number;

                        /** Dialogue pageSize. */
                        public pageSize: number;

                        /** Dialogue orderBy. */
                        public orderBy: string;

                        /**
                         * Creates a new Dialogue instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns Dialogue instance
                         */
                        public static create(properties?: com.xueershangda.tianxun.answer.model.IDialogue): com.xueershangda.tianxun.answer.model.Dialogue;

                        /**
                         * Encodes the specified Dialogue message. Does not implicitly {@link com.xueershangda.tianxun.answer.model.Dialogue.verify|verify} messages.
                         * @param message Dialogue message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: com.xueershangda.tianxun.answer.model.IDialogue, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified Dialogue message, length delimited. Does not implicitly {@link com.xueershangda.tianxun.answer.model.Dialogue.verify|verify} messages.
                         * @param message Dialogue message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: com.xueershangda.tianxun.answer.model.IDialogue, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a Dialogue message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns Dialogue
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.xueershangda.tianxun.answer.model.Dialogue;

                        /**
                         * Decodes a Dialogue message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns Dialogue
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.xueershangda.tianxun.answer.model.Dialogue;

                        /**
                         * Verifies a Dialogue message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a Dialogue message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns Dialogue
                         */
                        public static fromObject(object: { [k: string]: any }): com.xueershangda.tianxun.answer.model.Dialogue;

                        /**
                         * Creates a plain object from a Dialogue message. Also converts values to other types if specified.
                         * @param message Dialogue
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: com.xueershangda.tianxun.answer.model.Dialogue, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this Dialogue to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of a DialogueReply. */
                    interface IDialogueReply {

                        /** DialogueReply code */
                        code?: (number|null);

                        /** DialogueReply message */
                        message?: (string|null);

                        /** DialogueReply data */
                        data?: (com.xueershangda.tianxun.answer.model.IDialogue[]|null);
                    }

                    /** Represents a DialogueReply. */
                    class DialogueReply implements IDialogueReply {

                        /**
                         * Constructs a new DialogueReply.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: com.xueershangda.tianxun.answer.model.IDialogueReply);

                        /** DialogueReply code. */
                        public code: number;

                        /** DialogueReply message. */
                        public message: string;

                        /** DialogueReply data. */
                        public data: com.xueershangda.tianxun.answer.model.IDialogue[];

                        /**
                         * Creates a new DialogueReply instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns DialogueReply instance
                         */
                        public static create(properties?: com.xueershangda.tianxun.answer.model.IDialogueReply): com.xueershangda.tianxun.answer.model.DialogueReply;

                        /**
                         * Encodes the specified DialogueReply message. Does not implicitly {@link com.xueershangda.tianxun.answer.model.DialogueReply.verify|verify} messages.
                         * @param message DialogueReply message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: com.xueershangda.tianxun.answer.model.IDialogueReply, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified DialogueReply message, length delimited. Does not implicitly {@link com.xueershangda.tianxun.answer.model.DialogueReply.verify|verify} messages.
                         * @param message DialogueReply message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: com.xueershangda.tianxun.answer.model.IDialogueReply, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a DialogueReply message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns DialogueReply
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.xueershangda.tianxun.answer.model.DialogueReply;

                        /**
                         * Decodes a DialogueReply message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns DialogueReply
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.xueershangda.tianxun.answer.model.DialogueReply;

                        /**
                         * Verifies a DialogueReply message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a DialogueReply message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns DialogueReply
                         */
                        public static fromObject(object: { [k: string]: any }): com.xueershangda.tianxun.answer.model.DialogueReply;

                        /**
                         * Creates a plain object from a DialogueReply message. Also converts values to other types if specified.
                         * @param message DialogueReply
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: com.xueershangda.tianxun.answer.model.DialogueReply, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this DialogueReply to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of an AnswerFile. */
                    interface IAnswerFile {

                        /** AnswerFile id */
                        id?: (string|null);

                        /** AnswerFile answerId */
                        answerId?: (string|null);

                        /** AnswerFile filePath */
                        filePath?: (string|null);

                        /** AnswerFile createDate */
                        createDate?: (number|null);

                        /** AnswerFile type */
                        type?: (string|null);

                        /** AnswerFile page */
                        page?: (number|null);

                        /** AnswerFile pageSize */
                        pageSize?: (number|null);

                        /** AnswerFile orderBy */
                        orderBy?: (string|null);
                    }

                    /** Represents an AnswerFile. */
                    class AnswerFile implements IAnswerFile {

                        /**
                         * Constructs a new AnswerFile.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: com.xueershangda.tianxun.answer.model.IAnswerFile);

                        /** AnswerFile id. */
                        public id: string;

                        /** AnswerFile answerId. */
                        public answerId: string;

                        /** AnswerFile filePath. */
                        public filePath: string;

                        /** AnswerFile createDate. */
                        public createDate: (number);

                        /** AnswerFile type. */
                        public type: string;

                        /** AnswerFile page. */
                        public page: number;

                        /** AnswerFile pageSize. */
                        public pageSize: number;

                        /** AnswerFile orderBy. */
                        public orderBy: string;

                        /**
                         * Creates a new AnswerFile instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns AnswerFile instance
                         */
                        public static create(properties?: com.xueershangda.tianxun.answer.model.IAnswerFile): com.xueershangda.tianxun.answer.model.AnswerFile;

                        /**
                         * Encodes the specified AnswerFile message. Does not implicitly {@link com.xueershangda.tianxun.answer.model.AnswerFile.verify|verify} messages.
                         * @param message AnswerFile message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: com.xueershangda.tianxun.answer.model.IAnswerFile, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified AnswerFile message, length delimited. Does not implicitly {@link com.xueershangda.tianxun.answer.model.AnswerFile.verify|verify} messages.
                         * @param message AnswerFile message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: com.xueershangda.tianxun.answer.model.IAnswerFile, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an AnswerFile message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns AnswerFile
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.xueershangda.tianxun.answer.model.AnswerFile;

                        /**
                         * Decodes an AnswerFile message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns AnswerFile
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.xueershangda.tianxun.answer.model.AnswerFile;

                        /**
                         * Verifies an AnswerFile message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates an AnswerFile message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns AnswerFile
                         */
                        public static fromObject(object: { [k: string]: any }): com.xueershangda.tianxun.answer.model.AnswerFile;

                        /**
                         * Creates a plain object from an AnswerFile message. Also converts values to other types if specified.
                         * @param message AnswerFile
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: com.xueershangda.tianxun.answer.model.AnswerFile, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this AnswerFile to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }
                }
            }

            /** Namespace article. */
            namespace article {

                /** Namespace model. */
                namespace model {

                    /** Properties of an Images. */
                    interface IImages {

                        /** Images id */
                        id?: (string|null);

                        /** Images targetId */
                        targetId?: (string|null);

                        /** Images filePath */
                        filePath?: (string|null);

                        /** Images createDate */
                        createDate?: (number|null);

                        /** Images type */
                        type?: (string|null);

                        /** Images source */
                        source?: (number|null);

                        /** Images page */
                        page?: (number|null);

                        /** Images pageSize */
                        pageSize?: (number|null);

                        /** Images orderBy */
                        orderBy?: (string|null);

                        /** Images name */
                        name?: (string|null);

                        /** Images url */
                        url?: (string|null);
                    }

                    /** Represents an Images. */
                    class Images implements IImages {

                        /**
                         * Constructs a new Images.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: com.xueershangda.tianxun.article.model.IImages);

                        /** Images id. */
                        public id: string;

                        /** Images targetId. */
                        public targetId: string;

                        /** Images filePath. */
                        public filePath: string;

                        /** Images createDate. */
                        public createDate: (number);

                        /** Images type. */
                        public type: string;

                        /** Images source. */
                        public source: number;

                        /** Images page. */
                        public page: number;

                        /** Images pageSize. */
                        public pageSize: number;

                        /** Images orderBy. */
                        public orderBy: string;

                        /** Images name. */
                        public name: string;

                        /** Images url. */
                        public url: string;

                        /**
                         * Creates a new Images instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns Images instance
                         */
                        public static create(properties?: com.xueershangda.tianxun.article.model.IImages): com.xueershangda.tianxun.article.model.Images;

                        /**
                         * Encodes the specified Images message. Does not implicitly {@link com.xueershangda.tianxun.article.model.Images.verify|verify} messages.
                         * @param message Images message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: com.xueershangda.tianxun.article.model.IImages, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified Images message, length delimited. Does not implicitly {@link com.xueershangda.tianxun.article.model.Images.verify|verify} messages.
                         * @param message Images message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: com.xueershangda.tianxun.article.model.IImages, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an Images message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns Images
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.xueershangda.tianxun.article.model.Images;

                        /**
                         * Decodes an Images message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns Images
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.xueershangda.tianxun.article.model.Images;

                        /**
                         * Verifies an Images message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates an Images message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns Images
                         */
                        public static fromObject(object: { [k: string]: any }): com.xueershangda.tianxun.article.model.Images;

                        /**
                         * Creates a plain object from an Images message. Also converts values to other types if specified.
                         * @param message Images
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: com.xueershangda.tianxun.article.model.Images, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this Images to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of an Article. */
                    interface IArticle {

                        /** Article id */
                        id?: (string|null);

                        /** Article title */
                        title?: (string|null);

                        /** Article summary */
                        summary?: (string|null);

                        /** Article freeTimes */
                        freeTimes?: (number|null);

                        /** Article category */
                        category?: (string|null);

                        /** Article specialId */
                        specialId?: (string|null);

                        /** Article terminal */
                        terminal?: (string|null);

                        /** Article authorId */
                        authorId?: (string|null);

                        /** Article authorName */
                        authorName?: (string|null);

                        /** Article createDate */
                        createDate?: (number|null);

                        /** Article updateDate */
                        updateDate?: (number|null);

                        /** Article state */
                        state?: (number|null);

                        /** Article platform */
                        platform?: (boolean|null);

                        /** Article open */
                        open?: (boolean|null);

                        /** Article deleted */
                        deleted?: (boolean|null);

                        /** Article free */
                        free?: (boolean|null);

                        /** Article price */
                        price?: (number|null);

                        /** Article content */
                        content?: (string|null);

                        /** Article number */
                        number?: (number|null);

                        /** Article focusNumber */
                        focusNumber?: (number|null);

                        /** Article loveNumber */
                        loveNumber?: (number|null);

                        /** Article despiseNumber */
                        despiseNumber?: (number|null);

                        /** Article deleteDate */
                        deleteDate?: (number|null);

                        /** Article page */
                        page?: (number|null);

                        /** Article pageSize */
                        pageSize?: (number|null);

                        /** Article orderBy */
                        orderBy?: (string|null);

                        /** Article tokenId */
                        tokenId?: (string|null);

                        /** Article fileList */
                        fileList?: (com.xueershangda.tianxun.article.model.IImages[]|null);

                        /** Article ids */
                        ids?: (string[]|null);

                        /** Article coverImage */
                        coverImage?: (string|null);

                        /** Article backup */
                        backup?: (string|null);
                    }

                    /** Represents an Article. */
                    class Article implements IArticle {

                        /**
                         * Constructs a new Article.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: com.xueershangda.tianxun.article.model.IArticle);

                        /** Article id. */
                        public id: string;

                        /** Article title. */
                        public title: string;

                        /** Article summary. */
                        public summary: any;

                        /** Article freeTimes. */
                        public freeTimes: number;

                        /** Article category. */
                        public category: string;

                        /** Article specialId. */
                        public specialId: string;

                        /** Article terminal. */
                        public terminal: string;

                        /** Article authorId. */
                        public authorId: string;

                        /** Article authorName. */
                        public authorName: string;

                        /** Article createDate. */
                        public createDate: (number);

                        /** Article updateDate. */
                        public updateDate: (number);

                        /** Article state. */
                        public state: number;

                        /** Article platform. */
                        public platform: boolean;

                        /** Article open. */
                        public open: boolean;

                        /** Article deleted. */
                        public deleted: boolean;

                        /** Article free. */
                        public free: boolean;

                        /** Article price. */
                        public price: number;

                        /** Article content. */
                        public content: string;

                        /** Article number. */
                        public number: (number);

                        /** Article focusNumber. */
                        public focusNumber: (number);

                        /** Article loveNumber. */
                        public loveNumber: (number);

                        /** Article despiseNumber. */
                        public despiseNumber: (number);

                        /** Article deleteDate. */
                        public deleteDate: (number);

                        /** Article page. */
                        public page: number;

                        /** Article pageSize. */
                        public pageSize: number;

                        /** Article orderBy. */
                        public orderBy: string;

                        /** Article tokenId. */
                        public tokenId: string;

                        /** Article fileList. */
                        public fileList: com.xueershangda.tianxun.article.model.IImages[];

                        /** Article ids. */
                        public ids: string[];

                        /** Article coverImage. */
                        public coverImage: string;

                        /** Article backup. */
                        public backup: string;

                        /**
                         * Creates a new Article instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns Article instance
                         */
                        public static create(properties?: com.xueershangda.tianxun.article.model.IArticle): com.xueershangda.tianxun.article.model.Article;

                        /**
                         * Encodes the specified Article message. Does not implicitly {@link com.xueershangda.tianxun.article.model.Article.verify|verify} messages.
                         * @param message Article message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: com.xueershangda.tianxun.article.model.IArticle, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified Article message, length delimited. Does not implicitly {@link com.xueershangda.tianxun.article.model.Article.verify|verify} messages.
                         * @param message Article message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: com.xueershangda.tianxun.article.model.IArticle, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an Article message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns Article
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.xueershangda.tianxun.article.model.Article;

                        /**
                         * Decodes an Article message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns Article
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.xueershangda.tianxun.article.model.Article;

                        /**
                         * Verifies an Article message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates an Article message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns Article
                         */
                        public static fromObject(object: { [k: string]: any }): com.xueershangda.tianxun.article.model.Article;

                        /**
                         * Creates a plain object from an Article message. Also converts values to other types if specified.
                         * @param message Article
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: com.xueershangda.tianxun.article.model.Article, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this Article to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of an ArticleReply. */
                    interface IArticleReply {

                        /** ArticleReply code */
                        code?: (number|null);

                        /** ArticleReply message */
                        message?: (string|null);

                        /** ArticleReply data */
                        data?: (com.xueershangda.tianxun.article.model.IArticle[]|null);

                        /** ArticleReply account */
                        account?: (string|null);

                        /** ArticleReply price */
                        price?: (number|null);

                        /** ArticleReply title */
                        title?: (string|null);

                        /** ArticleReply type */
                        type?: (string|null);

                        /** ArticleReply targetId */
                        targetId?: (string|null);
                    }

                    /** Represents an ArticleReply. */
                    class ArticleReply implements IArticleReply {

                        /**
                         * Constructs a new ArticleReply.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: com.xueershangda.tianxun.article.model.IArticleReply);

                        /** ArticleReply code. */
                        public code: number;

                        /** ArticleReply message. */
                        public message: string;

                        /** ArticleReply data. */
                        public data: com.xueershangda.tianxun.article.model.IArticle[];

                        /** ArticleReply account. */
                        public account: string;

                        /** ArticleReply price. */
                        public price: number;

                        /** ArticleReply title. */
                        public title: string;

                        /** ArticleReply type. */
                        public type: string;

                        /** ArticleReply targetId. */
                        public targetId: string;

                        /**
                         * Creates a new ArticleReply instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns ArticleReply instance
                         */
                        public static create(properties?: com.xueershangda.tianxun.article.model.IArticleReply): com.xueershangda.tianxun.article.model.ArticleReply;

                        /**
                         * Encodes the specified ArticleReply message. Does not implicitly {@link com.xueershangda.tianxun.article.model.ArticleReply.verify|verify} messages.
                         * @param message ArticleReply message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: com.xueershangda.tianxun.article.model.IArticleReply, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified ArticleReply message, length delimited. Does not implicitly {@link com.xueershangda.tianxun.article.model.ArticleReply.verify|verify} messages.
                         * @param message ArticleReply message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: com.xueershangda.tianxun.article.model.IArticleReply, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an ArticleReply message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns ArticleReply
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.xueershangda.tianxun.article.model.ArticleReply;

                        /**
                         * Decodes an ArticleReply message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns ArticleReply
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.xueershangda.tianxun.article.model.ArticleReply;

                        /**
                         * Verifies an ArticleReply message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates an ArticleReply message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns ArticleReply
                         */
                        public static fromObject(object: { [k: string]: any }): com.xueershangda.tianxun.article.model.ArticleReply;

                        /**
                         * Creates a plain object from an ArticleReply message. Also converts values to other types if specified.
                         * @param message ArticleReply
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: com.xueershangda.tianxun.article.model.ArticleReply, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this ArticleReply to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }
                }
            }

            /** Namespace question. */
            namespace question {

                /** Namespace model. */
                namespace model {

                    /** Properties of a Question. */
                    interface IQuestion {

                        /** Question id */
                        id?: (string|null);

                        /** Question title */
                        title?: (string|null);

                        /** Question summary */
                        summary?: (string|null);

                        /** Question price */
                        price?: (number|null);

                        /** Question asker */
                        asker?: (string|null);

                        /** Question askerName */
                        askerName?: (string|null);

                        /** Question askDate */
                        askDate?: (number|null);

                        /** Question answerDate */
                        answerDate?: (number|null);

                        /** Question closeDate */
                        closeDate?: (number|null);

                        /** Question solved */
                        solved?: (boolean|null);

                        /** Question open */
                        open?: (boolean|null);

                        /** Question platform */
                        platform?: (number|null);

                        /** Question category */
                        category?: (string|null);

                        /** Question categoryCode */
                        categoryCode?: (number|null);

                        /** Question satisfiedAnswerId */
                        satisfiedAnswerId?: (string|null);

                        /** Question satisfiedUserId */
                        satisfiedUserId?: (string|null);

                        /** Question satisfiedUserName */
                        satisfiedUserName?: (string|null);

                        /** Question state */
                        state?: (number|null);

                        /** Question deleted */
                        deleted?: (boolean|null);

                        /** Question content */
                        content?: (string|null);

                        /** Question number */
                        number?: (number|null);

                        /** Question answerNumber */
                        answerNumber?: (number|null);

                        /** Question focusNumber */
                        focusNumber?: (number|null);

                        /** Question loveNumber */
                        loveNumber?: (number|null);

                        /** Question despiseNumber */
                        despiseNumber?: (number|null);

                        /** Question fee */
                        fee?: (number|null);

                        /** Question serviceType */
                        serviceType?: (number|null);

                        /** Question deleteDate */
                        deleteDate?: (number|null);

                        /** Question terminal */
                        terminal?: (number|null);

                        /** Question page */
                        page?: (number|null);

                        /** Question pageSize */
                        pageSize?: (number|null);

                        /** Question orderBy */
                        orderBy?: (string|null);

                        /** Question tokenId */
                        tokenId?: (string|null);

                        /** Question fileList */
                        fileList?: (com.xueershangda.tianxun.article.model.IImages[]|null);

                        /** Question answer */
                        answer?: (com.xueershangda.tianxun.answer.model.IAnswer|null);

                        /** Question userId */
                        userId?: (string|null);

                        /** Question filePath */
                        filePath?: (string|null);

                        /** Question type */
                        type?: (string|null);

                        /** Question ids */
                        ids?: (string[]|null);

                        /** Question account */
                        account?: (string|null);
                    }

                    /** Represents a Question. */
                    class Question implements IQuestion {

                        /**
                         * Constructs a new Question.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: com.xueershangda.tianxun.question.model.IQuestion);

                        /** Question id. */
                        public id: string;

                        /** Question title. */
                        public title: string;

                        /** Question summary. */
                        public summary: string;

                        /** Question price. */
                        public price: number;

                        /** Question asker. */
                        public asker: string;

                        /** Question askerName. */
                        public askerName: string;

                        /** Question askDate. */
                        public askDate: (number);

                        /** Question answerDate. */
                        public answerDate: (number);

                        /** Question closeDate. */
                        public closeDate: (number);

                        /** Question solved. */
                        public solved: boolean;

                        /** Question open. */
                        public open: boolean;

                        /** Question platform. */
                        public platform: number;

                        /** Question category. */
                        public category: string;

                        /** Question categoryCode. */
                        public categoryCode: number;

                        /** Question satisfiedAnswerId. */
                        public satisfiedAnswerId: string;

                        /** Question satisfiedUserId. */
                        public satisfiedUserId: string;

                        /** Question satisfiedUserName. */
                        public satisfiedUserName: string;

                        /** Question state. */
                        public state: number;

                        /** Question deleted. */
                        public deleted: boolean;

                        /** Question content. */
                        public content: string;

                        /** Question number. */
                        public number: (number);

                        /** Question answerNumber. */
                        public answerNumber: number;

                        /** Question focusNumber. */
                        public focusNumber: (number);

                        /** Question loveNumber. */
                        public loveNumber: (number);

                        /** Question despiseNumber. */
                        public despiseNumber: (number);

                        /** Question fee. */
                        public fee: number;

                        /** Question serviceType. */
                        public serviceType: number;

                        /** Question deleteDate. */
                        public deleteDate: (number);

                        /** Question terminal. */
                        public terminal: number;

                        /** Question page. */
                        public page: number;

                        /** Question pageSize. */
                        public pageSize: number;

                        /** Question orderBy. */
                        public orderBy: string;

                        /** Question tokenId. */
                        public tokenId: string;

                        /** Question fileList. */
                        public fileList: com.xueershangda.tianxun.article.model.IImages[];

                        /** Question answer. */
                        public answer?: (com.xueershangda.tianxun.answer.model.IAnswer|null);

                        /** Question userId. */
                        public userId: string;

                        /** Question filePath. */
                        public filePath: string;

                        /** Question type. */
                        public type: string;

                        /** Question ids. */
                        public ids: string[];

                        /** Question account. */
                        public account: string;

                        /**
                         * Creates a new Question instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns Question instance
                         */
                        public static create(properties?: com.xueershangda.tianxun.question.model.IQuestion): com.xueershangda.tianxun.question.model.Question;

                        /**
                         * Encodes the specified Question message. Does not implicitly {@link com.xueershangda.tianxun.question.model.Question.verify|verify} messages.
                         * @param message Question message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: com.xueershangda.tianxun.question.model.IQuestion, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified Question message, length delimited. Does not implicitly {@link com.xueershangda.tianxun.question.model.Question.verify|verify} messages.
                         * @param message Question message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: com.xueershangda.tianxun.question.model.IQuestion, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a Question message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns Question
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.xueershangda.tianxun.question.model.Question;

                        /**
                         * Decodes a Question message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns Question
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.xueershangda.tianxun.question.model.Question;

                        /**
                         * Verifies a Question message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a Question message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns Question
                         */
                        public static fromObject(object: { [k: string]: any }): com.xueershangda.tianxun.question.model.Question;

                        /**
                         * Creates a plain object from a Question message. Also converts values to other types if specified.
                         * @param message Question
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: com.xueershangda.tianxun.question.model.Question, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this Question to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of a QuestionReply. */
                    interface IQuestionReply {

                        /** QuestionReply code */
                        code?: (number|null);

                        /** QuestionReply message */
                        message?: (string|null);

                        /** QuestionReply data */
                        data?: (com.xueershangda.tianxun.question.model.IQuestion[]|null);

                        /** QuestionReply account */
                        account?: (string|null);

                        /** QuestionReply price */
                        price?: (number|null);

                        /** QuestionReply title */
                        title?: (string|null);

                        /** QuestionReply type */
                        type?: (string|null);

                        /** QuestionReply targetId */
                        targetId?: (string|null);
                    }

                    /** Represents a QuestionReply. */
                    class QuestionReply implements IQuestionReply {

                        /**
                         * Constructs a new QuestionReply.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: com.xueershangda.tianxun.question.model.IQuestionReply);

                        /** QuestionReply code. */
                        public code: number;

                        /** QuestionReply message. */
                        public message: string;

                        /** QuestionReply data. */
                        public data: com.xueershangda.tianxun.question.model.IQuestion[];

                        /** QuestionReply account. */
                        public account: string;

                        /** QuestionReply price. */
                        public price: number;

                        /** QuestionReply title. */
                        public title: string;

                        /** QuestionReply type. */
                        public type: string;

                        /** QuestionReply targetId. */
                        public targetId: string;

                        /**
                         * Creates a new QuestionReply instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns QuestionReply instance
                         */
                        public static create(properties?: com.xueershangda.tianxun.question.model.IQuestionReply): com.xueershangda.tianxun.question.model.QuestionReply;

                        /**
                         * Encodes the specified QuestionReply message. Does not implicitly {@link com.xueershangda.tianxun.question.model.QuestionReply.verify|verify} messages.
                         * @param message QuestionReply message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: com.xueershangda.tianxun.question.model.IQuestionReply, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified QuestionReply message, length delimited. Does not implicitly {@link com.xueershangda.tianxun.question.model.QuestionReply.verify|verify} messages.
                         * @param message QuestionReply message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: com.xueershangda.tianxun.question.model.IQuestionReply, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a QuestionReply message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns QuestionReply
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.xueershangda.tianxun.question.model.QuestionReply;

                        /**
                         * Decodes a QuestionReply message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns QuestionReply
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.xueershangda.tianxun.question.model.QuestionReply;

                        /**
                         * Verifies a QuestionReply message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a QuestionReply message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns QuestionReply
                         */
                        public static fromObject(object: { [k: string]: any }): com.xueershangda.tianxun.question.model.QuestionReply;

                        /**
                         * Creates a plain object from a QuestionReply message. Also converts values to other types if specified.
                         * @param message QuestionReply
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: com.xueershangda.tianxun.question.model.QuestionReply, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this QuestionReply to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of a Category. */
                    interface ICategory {

                        /** Category id */
                        id?: (string|null);

                        /** Category text */
                        text?: (string|null);

                        /** Category status */
                        status?: (number|null);

                        /** Category level */
                        level?: (number|null);

                        /** Category parent */
                        parent?: (string|null);

                        /** Category icon */
                        icon?: (string|null);

                        /** Category orderBy */
                        orderBy?: (string|null);

                        /** Category page */
                        page?: (number|null);

                        /** Category pageSize */
                        pageSize?: (number|null);
                    }

                    /** Represents a Category. */
                    class Category implements ICategory {

                        /**
                         * Constructs a new Category.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: com.xueershangda.tianxun.question.model.ICategory);

                        /** Category id. */
                        public id: string;

                        /** Category text. */
                        public text: string;

                        /** Category status. */
                        public status: number;

                        /** Category level. */
                        public level: number;

                        /** Category parent. */
                        public parent: string;

                        /** Category icon. */
                        public icon: string;

                        /** Category orderBy. */
                        public orderBy: string;

                        /** Category page. */
                        public page: number;

                        /** Category pageSize. */
                        public pageSize: number;

                        /**
                         * Creates a new Category instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns Category instance
                         */
                        public static create(properties?: com.xueershangda.tianxun.question.model.ICategory): com.xueershangda.tianxun.question.model.Category;

                        /**
                         * Encodes the specified Category message. Does not implicitly {@link com.xueershangda.tianxun.question.model.Category.verify|verify} messages.
                         * @param message Category message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: com.xueershangda.tianxun.question.model.ICategory, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified Category message, length delimited. Does not implicitly {@link com.xueershangda.tianxun.question.model.Category.verify|verify} messages.
                         * @param message Category message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: com.xueershangda.tianxun.question.model.ICategory, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a Category message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns Category
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.xueershangda.tianxun.question.model.Category;

                        /**
                         * Decodes a Category message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns Category
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.xueershangda.tianxun.question.model.Category;

                        /**
                         * Verifies a Category message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a Category message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns Category
                         */
                        public static fromObject(object: { [k: string]: any }): com.xueershangda.tianxun.question.model.Category;

                        /**
                         * Creates a plain object from a Category message. Also converts values to other types if specified.
                         * @param message Category
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: com.xueershangda.tianxun.question.model.Category, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this Category to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of a CategoryReply. */
                    interface ICategoryReply {

                        /** CategoryReply code */
                        code?: (number|null);

                        /** CategoryReply message */
                        message?: (string|null);

                        /** CategoryReply data */
                        data?: (com.xueershangda.tianxun.question.model.ICategory[]|null);
                    }

                    /** Represents a CategoryReply. */
                    class CategoryReply implements ICategoryReply {

                        /**
                         * Constructs a new CategoryReply.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: com.xueershangda.tianxun.question.model.ICategoryReply);

                        /** CategoryReply code. */
                        public code: number;

                        /** CategoryReply message. */
                        public message: string;

                        /** CategoryReply data. */
                        public data: com.xueershangda.tianxun.question.model.ICategory[];

                        /**
                         * Creates a new CategoryReply instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns CategoryReply instance
                         */
                        public static create(properties?: com.xueershangda.tianxun.question.model.ICategoryReply): com.xueershangda.tianxun.question.model.CategoryReply;

                        /**
                         * Encodes the specified CategoryReply message. Does not implicitly {@link com.xueershangda.tianxun.question.model.CategoryReply.verify|verify} messages.
                         * @param message CategoryReply message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: com.xueershangda.tianxun.question.model.ICategoryReply, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified CategoryReply message, length delimited. Does not implicitly {@link com.xueershangda.tianxun.question.model.CategoryReply.verify|verify} messages.
                         * @param message CategoryReply message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: com.xueershangda.tianxun.question.model.ICategoryReply, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a CategoryReply message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns CategoryReply
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.xueershangda.tianxun.question.model.CategoryReply;

                        /**
                         * Decodes a CategoryReply message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns CategoryReply
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.xueershangda.tianxun.question.model.CategoryReply;

                        /**
                         * Verifies a CategoryReply message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a CategoryReply message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns CategoryReply
                         */
                        public static fromObject(object: { [k: string]: any }): com.xueershangda.tianxun.question.model.CategoryReply;

                        /**
                         * Creates a plain object from a CategoryReply message. Also converts values to other types if specified.
                         * @param message CategoryReply
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: com.xueershangda.tianxun.question.model.CategoryReply, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this CategoryReply to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }
                }
            }

            /** Namespace proto. */
            namespace proto {

                /** Properties of a Content. */
                interface IContent {

                    /** Content id */
                    id?: (string|null);

                    /** Content articleId */
                    articleId?: (string|null);

                    /** Content text */
                    text?: (string|null);

                    /** Content order */
                    order?: (number|null);

                    /** Content page */
                    page?: (number|null);

                    /** Content pageSize */
                    pageSize?: (number|null);

                    /** Content orderBy */
                    orderBy?: (string|null);
                }

                /** Represents a Content. */
                class Content implements IContent {

                    /**
                     * Constructs a new Content.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: com.xueershangda.tianxun.proto.IContent);

                    /** Content id. */
                    public id: string;

                    /** Content articleId. */
                    public articleId: string;

                    /** Content text. */
                    public text: string;

                    /** Content order. */
                    public order: number;

                    /** Content page. */
                    public page: number;

                    /** Content pageSize. */
                    public pageSize: number;

                    /** Content orderBy. */
                    public orderBy: string;

                    /**
                     * Creates a new Content instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Content instance
                     */
                    public static create(properties?: com.xueershangda.tianxun.proto.IContent): com.xueershangda.tianxun.proto.Content;

                    /**
                     * Encodes the specified Content message. Does not implicitly {@link com.xueershangda.tianxun.proto.Content.verify|verify} messages.
                     * @param message Content message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: com.xueershangda.tianxun.proto.IContent, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Content message, length delimited. Does not implicitly {@link com.xueershangda.tianxun.proto.Content.verify|verify} messages.
                     * @param message Content message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: com.xueershangda.tianxun.proto.IContent, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Content message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Content
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.xueershangda.tianxun.proto.Content;

                    /**
                     * Decodes a Content message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Content
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.xueershangda.tianxun.proto.Content;

                    /**
                     * Verifies a Content message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Content message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Content
                     */
                    public static fromObject(object: { [k: string]: any }): com.xueershangda.tianxun.proto.Content;

                    /**
                     * Creates a plain object from a Content message. Also converts values to other types if specified.
                     * @param message Content
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: com.xueershangda.tianxun.proto.Content, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Content to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a Follow. */
                interface IFollow {

                    /** Follow id */
                    id?: (string|null);

                    /** Follow userId */
                    userId?: (string|null);

                    /** Follow followDate */
                    followDate?: (number|null);

                    /** Follow followId */
                    followId?: (string|null);

                    /** Follow type */
                    type?: (number|null);

                    /** Follow targetId */
                    targetId?: (string|null);

                    /** Follow name */
                    name?: (string|null);

                    /** Follow remark */
                    remark?: (string|null);

                    /** Follow page */
                    page?: (number|null);

                    /** Follow pageSize */
                    pageSize?: (number|null);

                    /** Follow orderBy */
                    orderBy?: (string|null);
                }

                /** Represents a Follow. */
                class Follow implements IFollow {

                    /**
                     * Constructs a new Follow.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: com.xueershangda.tianxun.proto.IFollow);

                    /** Follow id. */
                    public id: string;

                    /** Follow userId. */
                    public userId: string;

                    /** Follow followDate. */
                    public followDate: (number);

                    /** Follow followId. */
                    public followId: string;

                    /** Follow type. */
                    public type: number;

                    /** Follow targetId. */
                    public targetId: string;

                    /** Follow name. */
                    public name: string;

                    /** Follow remark. */
                    public remark: string;

                    /** Follow page. */
                    public page: number;

                    /** Follow pageSize. */
                    public pageSize: number;

                    /** Follow orderBy. */
                    public orderBy: string;

                    /**
                     * Creates a new Follow instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Follow instance
                     */
                    public static create(properties?: com.xueershangda.tianxun.proto.IFollow): com.xueershangda.tianxun.proto.Follow;

                    /**
                     * Encodes the specified Follow message. Does not implicitly {@link com.xueershangda.tianxun.proto.Follow.verify|verify} messages.
                     * @param message Follow message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: com.xueershangda.tianxun.proto.IFollow, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Follow message, length delimited. Does not implicitly {@link com.xueershangda.tianxun.proto.Follow.verify|verify} messages.
                     * @param message Follow message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: com.xueershangda.tianxun.proto.IFollow, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Follow message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Follow
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.xueershangda.tianxun.proto.Follow;

                    /**
                     * Decodes a Follow message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Follow
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.xueershangda.tianxun.proto.Follow;

                    /**
                     * Verifies a Follow message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Follow message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Follow
                     */
                    public static fromObject(object: { [k: string]: any }): com.xueershangda.tianxun.proto.Follow;

                    /**
                     * Creates a plain object from a Follow message. Also converts values to other types if specified.
                     * @param message Follow
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: com.xueershangda.tianxun.proto.Follow, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Follow to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a Tags. */
                interface ITags {

                    /** Tags id */
                    id?: (string|null);

                    /** Tags name */
                    name?: (string|null);

                    /** Tags state */
                    state?: (number|null);

                    /** Tags hot */
                    hot?: (number|null);

                    /** Tags createDate */
                    createDate?: (number|null);

                    /** Tags focusNumber */
                    focusNumber?: (number|null);

                    /** Tags loveNumber */
                    loveNumber?: (number|null);

                    /** Tags despiseNumber */
                    despiseNumber?: (number|null);

                    /** Tags description */
                    description?: (string|null);

                    /** Tags page */
                    page?: (number|null);

                    /** Tags pageSize */
                    pageSize?: (number|null);

                    /** Tags orderBy */
                    orderBy?: (string|null);
                }

                /** Represents a Tags. */
                class Tags implements ITags {

                    /**
                     * Constructs a new Tags.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: com.xueershangda.tianxun.proto.ITags);

                    /** Tags id. */
                    public id: string;

                    /** Tags name. */
                    public name: string;

                    /** Tags state. */
                    public state: number;

                    /** Tags hot. */
                    public hot: number;

                    /** Tags createDate. */
                    public createDate: (number);

                    /** Tags focusNumber. */
                    public focusNumber: (number);

                    /** Tags loveNumber. */
                    public loveNumber: (number);

                    /** Tags despiseNumber. */
                    public despiseNumber: (number);

                    /** Tags description. */
                    public description: string;

                    /** Tags page. */
                    public page: number;

                    /** Tags pageSize. */
                    public pageSize: number;

                    /** Tags orderBy. */
                    public orderBy: string;

                    /**
                     * Creates a new Tags instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Tags instance
                     */
                    public static create(properties?: com.xueershangda.tianxun.proto.ITags): com.xueershangda.tianxun.proto.Tags;

                    /**
                     * Encodes the specified Tags message. Does not implicitly {@link com.xueershangda.tianxun.proto.Tags.verify|verify} messages.
                     * @param message Tags message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: com.xueershangda.tianxun.proto.ITags, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Tags message, length delimited. Does not implicitly {@link com.xueershangda.tianxun.proto.Tags.verify|verify} messages.
                     * @param message Tags message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: com.xueershangda.tianxun.proto.ITags, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Tags message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Tags
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.xueershangda.tianxun.proto.Tags;

                    /**
                     * Decodes a Tags message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Tags
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.xueershangda.tianxun.proto.Tags;

                    /**
                     * Verifies a Tags message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Tags message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Tags
                     */
                    public static fromObject(object: { [k: string]: any }): com.xueershangda.tianxun.proto.Tags;

                    /**
                     * Creates a plain object from a Tags message. Also converts values to other types if specified.
                     * @param message Tags
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: com.xueershangda.tianxun.proto.Tags, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Tags to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }
            }

            /** Namespace user. */
            namespace user {

                /** Namespace model. */
                namespace model {

                    /** Properties of a User. */
                    interface IUser {

                        /** User id */
                        id?: (string|null);

                        /** User name */
                        name?: (string|null);

                        /** User nickName */
                        nickName?: (string|null);

                        /** User account */
                        account?: (string|null);

                        /** User email */
                        email?: (string|null);

                        /** User mobile */
                        mobile?: (string|null);

                        /** User password */
                        password?: (string|null);

                        /** User registerDate */
                        registerDate?: (number|null);

                        /** User age */
                        age?: (number|null);

                        /** User lastLoginDate */
                        lastLoginDate?: (number|null);

                        /** User state */
                        state?: (number|null);

                        /** User level */
                        level?: (number|null);

                        /** User asker */
                        asker?: (number|null);

                        /** User answer */
                        answer?: (number|null);

                        /** User identityCard */
                        identityCard?: (string|null);

                        /** User identityType */
                        identityType?: (number|null);

                        /** User alipay */
                        alipay?: (string|null);

                        /** User weixin */
                        weixin?: (string|null);

                        /** User qq */
                        qq?: (string|null);

                        /** User address */
                        address?: (string|null);

                        /** User avatar */
                        avatar?: (string|null);

                        /** User birthday */
                        birthday?: (number|null);

                        /** User summary */
                        summary?: (string|null);

                        /** User signature */
                        signature?: (string|null);

                        /** User title */
                        title?: (string|null);

                        /** User focusNumber */
                        focusNumber?: (number|null);

                        /** User loveNumber */
                        loveNumber?: (number|null);

                        /** User page */
                        page?: (number|null);

                        /** User pageSize */
                        pageSize?: (number|null);

                        /** User orderBy */
                        orderBy?: (string|null);

                        /** User tokenId */
                        tokenId?: (string|null);

                        /** User oldPassword */
                        oldPassword?: (string|null);

                        /** User checkPasswd */
                        checkPasswd?: (string|null);

                        /** User gender */
                        gender?: (number|null);

                        /** User agreement */
                        agreement?: (boolean|null);

                        /** User source */
                        source?: (number|null);

                        /** User targetId */
                        targetId?: (string|null);

                        /** User type */
                        type?: (number|null);

                        /** User grade */
                        grade?: (number|null);

                        /** User replyTime */
                        replyTime?: (number|null);

                        /** User parent */
                        parent?: (string|null);

                        /** User paymentAuthority */
                        paymentAuthority?: (number|null);

                        /** User paymentAmount */
                        paymentAmount?: (number|null);

                        /** User teacher */
                        teacher?: (number|null);

                        /** User weixinQrcode */
                        weixinQrcode?: (string|null);

                        /** User alipayQrcode */
                        alipayQrcode?: (string|null);
                    }

                    /** Represents a User. */
                    class User implements IUser {

                        /**
                         * Constructs a new User.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: com.xueershangda.tianxun.user.model.IUser);

                        /** User id. */
                        public id: string;

                        /** User name. */
                        public name: string;

                        /** User nickName. */
                        public nickName: string;

                        /** User account. */
                        public account: string;

                        /** User email. */
                        public email: string;

                        /** User mobile. */
                        public mobile: string;

                        /** User password. */
                        public password: string;

                        /** User registerDate. */
                        public registerDate: (number);

                        /** User age. */
                        public age: number;

                        /** User lastLoginDate. */
                        public lastLoginDate: (number);

                        /** User state. */
                        public state: number;

                        /** User level. */
                        public level: number;

                        /** User asker. */
                        public asker: number;

                        /** User answer. */
                        public answer: number;

                        /** User identityCard. */
                        public identityCard: string;

                        /** User identityType. */
                        public identityType: number;

                        /** User alipay. */
                        public alipay: string;

                        /** User weixin. */
                        public weixin: string;

                        /** User qq. */
                        public qq: string;

                        /** User address. */
                        public address: string;

                        /** User avatar. */
                        public avatar: string;

                        /** User birthday. */
                        public birthday: (number);

                        /** User summary. */
                        public summary: string;

                        /** User signature. */
                        public signature: string;

                        /** User title. */
                        public title: string;

                        /** User focusNumber. */
                        public focusNumber: (number);

                        /** User loveNumber. */
                        public loveNumber: (number);

                        /** User page. */
                        public page: number;

                        /** User pageSize. */
                        public pageSize: number;

                        /** User orderBy. */
                        public orderBy: string;

                        /** User tokenId. */
                        public tokenId: string;

                        /** User oldPassword. */
                        public oldPassword: string;

                        /** User checkPasswd. */
                        public checkPasswd: string;

                        /** User gender. */
                        public gender: number;

                        /** User agreement. */
                        public agreement: boolean;

                        /** User source. */
                        public source: number;

                        /** User targetId. */
                        public targetId: string;

                        /** User type. */
                        public type: number;

                        /** User grade. */
                        public grade: number;

                        /** User replyTime. */
                        public replyTime: (number);

                        /** User parent. */
                        public parent: string;

                        /** User paymentAuthority. */
                        public paymentAuthority: number;

                        /** User paymentAmount. */
                        public paymentAmount: number;

                        /** User teacher. */
                        public teacher: number;

                        /** User weixinQrcode. */
                        public weixinQrcode: string;

                        /** User alipayQrcode. */
                        public alipayQrcode: string;

                        /**
                         * Creates a new User instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns User instance
                         */
                        public static create(properties?: com.xueershangda.tianxun.user.model.IUser): com.xueershangda.tianxun.user.model.User;

                        /**
                         * Encodes the specified User message. Does not implicitly {@link com.xueershangda.tianxun.user.model.User.verify|verify} messages.
                         * @param message User message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: com.xueershangda.tianxun.user.model.IUser, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified User message, length delimited. Does not implicitly {@link com.xueershangda.tianxun.user.model.User.verify|verify} messages.
                         * @param message User message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: com.xueershangda.tianxun.user.model.IUser, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a User message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns User
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.xueershangda.tianxun.user.model.User;

                        /**
                         * Decodes a User message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns User
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.xueershangda.tianxun.user.model.User;

                        /**
                         * Verifies a User message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a User message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns User
                         */
                        public static fromObject(object: { [k: string]: any }): com.xueershangda.tianxun.user.model.User;

                        /**
                         * Creates a plain object from a User message. Also converts values to other types if specified.
                         * @param message User
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: com.xueershangda.tianxun.user.model.User, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this User to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of a UserReply. */
                    interface IUserReply {

                        /** UserReply code */
                        code?: (number|null);

                        /** UserReply message */
                        message?: (string|null);

                        /** UserReply data */
                        data?: (com.xueershangda.tianxun.user.model.IUser[]|null);

                        /** UserReply questionList */
                        questionList?: (com.xueershangda.tianxun.question.model.IQuestion[]|null);
                    }

                    /** Represents a UserReply. */
                    class UserReply implements IUserReply {

                        /**
                         * Constructs a new UserReply.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: com.xueershangda.tianxun.user.model.IUserReply);

                        /** UserReply code. */
                        public code: number;

                        /** UserReply message. */
                        public message: string;

                        /** UserReply data. */
                        public data: com.xueershangda.tianxun.user.model.IUser[];

                        /** UserReply questionList. */
                        public questionList: com.xueershangda.tianxun.question.model.IQuestion[];

                        /**
                         * Creates a new UserReply instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns UserReply instance
                         */
                        public static create(properties?: com.xueershangda.tianxun.user.model.IUserReply): com.xueershangda.tianxun.user.model.UserReply;

                        /**
                         * Encodes the specified UserReply message. Does not implicitly {@link com.xueershangda.tianxun.user.model.UserReply.verify|verify} messages.
                         * @param message UserReply message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: com.xueershangda.tianxun.user.model.IUserReply, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified UserReply message, length delimited. Does not implicitly {@link com.xueershangda.tianxun.user.model.UserReply.verify|verify} messages.
                         * @param message UserReply message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: com.xueershangda.tianxun.user.model.IUserReply, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a UserReply message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns UserReply
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.xueershangda.tianxun.user.model.UserReply;

                        /**
                         * Decodes a UserReply message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns UserReply
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.xueershangda.tianxun.user.model.UserReply;

                        /**
                         * Verifies a UserReply message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a UserReply message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns UserReply
                         */
                        public static fromObject(object: { [k: string]: any }): com.xueershangda.tianxun.user.model.UserReply;

                        /**
                         * Creates a plain object from a UserReply message. Also converts values to other types if specified.
                         * @param message UserReply
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: com.xueershangda.tianxun.user.model.UserReply, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this UserReply to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of a Favorite. */
                    interface IFavorite {

                        /** Favorite id */
                        id?: (string|null);

                        /** Favorite favoriteDate */
                        favoriteDate?: (number|null);

                        /** Favorite targetId */
                        targetId?: (string|null);

                        /** Favorite targetType */
                        targetType?: (number|null);

                        /** Favorite userId */
                        userId?: (string|null);

                        /** Favorite remark */
                        remark?: (string|null);

                        /** Favorite name */
                        name?: (string|null);

                        /** Favorite state */
                        state?: (number|null);

                        /** Favorite page */
                        page?: (number|null);

                        /** Favorite pageSize */
                        pageSize?: (number|null);

                        /** Favorite orderBy */
                        orderBy?: (string|null);
                    }

                    /** Represents a Favorite. */
                    class Favorite implements IFavorite {

                        /**
                         * Constructs a new Favorite.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: com.xueershangda.tianxun.user.model.IFavorite);

                        /** Favorite id. */
                        public id: string;

                        /** Favorite favoriteDate. */
                        public favoriteDate: (number);

                        /** Favorite targetId. */
                        public targetId: string;

                        /** Favorite targetType. */
                        public targetType: number;

                        /** Favorite userId. */
                        public userId: string;

                        /** Favorite remark. */
                        public remark: string;

                        /** Favorite name. */
                        public name: string;

                        /** Favorite state. */
                        public state: number;

                        /** Favorite page. */
                        public page: number;

                        /** Favorite pageSize. */
                        public pageSize: number;

                        /** Favorite orderBy. */
                        public orderBy: string;

                        /**
                         * Creates a new Favorite instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns Favorite instance
                         */
                        public static create(properties?: com.xueershangda.tianxun.user.model.IFavorite): com.xueershangda.tianxun.user.model.Favorite;

                        /**
                         * Encodes the specified Favorite message. Does not implicitly {@link com.xueershangda.tianxun.user.model.Favorite.verify|verify} messages.
                         * @param message Favorite message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: com.xueershangda.tianxun.user.model.IFavorite, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified Favorite message, length delimited. Does not implicitly {@link com.xueershangda.tianxun.user.model.Favorite.verify|verify} messages.
                         * @param message Favorite message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: com.xueershangda.tianxun.user.model.IFavorite, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a Favorite message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns Favorite
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.xueershangda.tianxun.user.model.Favorite;

                        /**
                         * Decodes a Favorite message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns Favorite
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.xueershangda.tianxun.user.model.Favorite;

                        /**
                         * Verifies a Favorite message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a Favorite message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns Favorite
                         */
                        public static fromObject(object: { [k: string]: any }): com.xueershangda.tianxun.user.model.Favorite;

                        /**
                         * Creates a plain object from a Favorite message. Also converts values to other types if specified.
                         * @param message Favorite
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: com.xueershangda.tianxun.user.model.Favorite, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this Favorite to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of a FavoriteReply. */
                    interface IFavoriteReply {

                        /** FavoriteReply code */
                        code?: (number|null);

                        /** FavoriteReply message */
                        message?: (string|null);

                        /** FavoriteReply data */
                        data?: (com.xueershangda.tianxun.user.model.IFavorite[]|null);
                    }

                    /** Represents a FavoriteReply. */
                    class FavoriteReply implements IFavoriteReply {

                        /**
                         * Constructs a new FavoriteReply.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: com.xueershangda.tianxun.user.model.IFavoriteReply);

                        /** FavoriteReply code. */
                        public code: number;

                        /** FavoriteReply message. */
                        public message: string;

                        /** FavoriteReply data. */
                        public data: com.xueershangda.tianxun.user.model.IFavorite[];

                        /**
                         * Creates a new FavoriteReply instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns FavoriteReply instance
                         */
                        public static create(properties?: com.xueershangda.tianxun.user.model.IFavoriteReply): com.xueershangda.tianxun.user.model.FavoriteReply;

                        /**
                         * Encodes the specified FavoriteReply message. Does not implicitly {@link com.xueershangda.tianxun.user.model.FavoriteReply.verify|verify} messages.
                         * @param message FavoriteReply message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: com.xueershangda.tianxun.user.model.IFavoriteReply, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified FavoriteReply message, length delimited. Does not implicitly {@link com.xueershangda.tianxun.user.model.FavoriteReply.verify|verify} messages.
                         * @param message FavoriteReply message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: com.xueershangda.tianxun.user.model.IFavoriteReply, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a FavoriteReply message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns FavoriteReply
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.xueershangda.tianxun.user.model.FavoriteReply;

                        /**
                         * Decodes a FavoriteReply message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns FavoriteReply
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.xueershangda.tianxun.user.model.FavoriteReply;

                        /**
                         * Verifies a FavoriteReply message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a FavoriteReply message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns FavoriteReply
                         */
                        public static fromObject(object: { [k: string]: any }): com.xueershangda.tianxun.user.model.FavoriteReply;

                        /**
                         * Creates a plain object from a FavoriteReply message. Also converts values to other types if specified.
                         * @param message FavoriteReply
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: com.xueershangda.tianxun.user.model.FavoriteReply, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this FavoriteReply to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }
                }
            }

            /** Namespace orders. */
            namespace orders {

                /** Namespace model. */
                namespace model {

                    /** Properties of an Orders. */
                    interface IOrders {

                        /** Orders id */
                        id?: (string|null);

                        /** Orders targetId */
                        targetId?: (string|null);

                        /** Orders type */
                        type?: (number|null);

                        /** Orders createDate */
                        createDate?: (number|null);

                        /** Orders payDate */
                        payDate?: (number|null);

                        /** Orders amount */
                        amount?: (number|null);

                        /** Orders state */
                        state?: (number|null);

                        /** Orders buyer */
                        buyer?: (string|null);

                        /** Orders seller */
                        seller?: (string|null);

                        /** Orders payChannel */
                        payChannel?: (string|null);

                        /** Orders account */
                        account?: (string|null);

                        /** Orders remark */
                        remark?: (string|null);

                        /** Orders subject */
                        subject?: (string|null);

                        /** Orders tradeNo */
                        tradeNo?: (string|null);

                        /** Orders page */
                        page?: (number|null);

                        /** Orders pageSize */
                        pageSize?: (number|null);

                        /** Orders orderBy */
                        orderBy?: (string|null);
                    }

                    /** Represents an Orders. */
                    class Orders implements IOrders {

                        /**
                         * Constructs a new Orders.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: com.xueershangda.tianxun.orders.model.IOrders);

                        /** Orders id. */
                        public id: string;

                        /** Orders targetId. */
                        public targetId: string;

                        /** Orders type. */
                        public type: number;

                        /** Orders createDate. */
                        public createDate: (number);

                        /** Orders payDate. */
                        public payDate: (number);

                        /** Orders amount. */
                        public amount: number;

                        /** Orders state. */
                        public state: number;

                        /** Orders buyer. */
                        public buyer: string;

                        /** Orders seller. */
                        public seller: string;

                        /** Orders payChannel. */
                        public payChannel: string;

                        /** Orders account. */
                        public account: string;

                        /** Orders remark. */
                        public remark: string;

                        /** Orders subject. */
                        public subject: string;

                        /** Orders tradeNo. */
                        public tradeNo: string;

                        /** Orders page. */
                        public page: number;

                        /** Orders pageSize. */
                        public pageSize: number;

                        /** Orders orderBy. */
                        public orderBy: string;

                        /**
                         * Creates a new Orders instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns Orders instance
                         */
                        public static create(properties?: com.xueershangda.tianxun.orders.model.IOrders): com.xueershangda.tianxun.orders.model.Orders;

                        /**
                         * Encodes the specified Orders message. Does not implicitly {@link com.xueershangda.tianxun.orders.model.Orders.verify|verify} messages.
                         * @param message Orders message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: com.xueershangda.tianxun.orders.model.IOrders, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified Orders message, length delimited. Does not implicitly {@link com.xueershangda.tianxun.orders.model.Orders.verify|verify} messages.
                         * @param message Orders message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: com.xueershangda.tianxun.orders.model.IOrders, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an Orders message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns Orders
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.xueershangda.tianxun.orders.model.Orders;

                        /**
                         * Decodes an Orders message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns Orders
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.xueershangda.tianxun.orders.model.Orders;

                        /**
                         * Verifies an Orders message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates an Orders message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns Orders
                         */
                        public static fromObject(object: { [k: string]: any }): com.xueershangda.tianxun.orders.model.Orders;

                        /**
                         * Creates a plain object from an Orders message. Also converts values to other types if specified.
                         * @param message Orders
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: com.xueershangda.tianxun.orders.model.Orders, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this Orders to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of an OrdersReply. */
                    interface IOrdersReply {

                        /** OrdersReply code */
                        code?: (number|null);

                        /** OrdersReply message */
                        message?: (string|null);

                        /** OrdersReply data */
                        data?: (com.xueershangda.tianxun.orders.model.IOrders[]|null);
                    }

                    /** Represents an OrdersReply. */
                    class OrdersReply implements IOrdersReply {

                        /**
                         * Constructs a new OrdersReply.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: com.xueershangda.tianxun.orders.model.IOrdersReply);

                        /** OrdersReply code. */
                        public code: number;

                        /** OrdersReply message. */
                        public message: string;

                        /** OrdersReply data. */
                        public data: com.xueershangda.tianxun.orders.model.IOrders[];

                        /**
                         * Creates a new OrdersReply instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns OrdersReply instance
                         */
                        public static create(properties?: com.xueershangda.tianxun.orders.model.IOrdersReply): com.xueershangda.tianxun.orders.model.OrdersReply;

                        /**
                         * Encodes the specified OrdersReply message. Does not implicitly {@link com.xueershangda.tianxun.orders.model.OrdersReply.verify|verify} messages.
                         * @param message OrdersReply message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: com.xueershangda.tianxun.orders.model.IOrdersReply, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified OrdersReply message, length delimited. Does not implicitly {@link com.xueershangda.tianxun.orders.model.OrdersReply.verify|verify} messages.
                         * @param message OrdersReply message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: com.xueershangda.tianxun.orders.model.IOrdersReply, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an OrdersReply message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns OrdersReply
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.xueershangda.tianxun.orders.model.OrdersReply;

                        /**
                         * Decodes an OrdersReply message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns OrdersReply
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.xueershangda.tianxun.orders.model.OrdersReply;

                        /**
                         * Verifies an OrdersReply message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates an OrdersReply message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns OrdersReply
                         */
                        public static fromObject(object: { [k: string]: any }): com.xueershangda.tianxun.orders.model.OrdersReply;

                        /**
                         * Creates a plain object from an OrdersReply message. Also converts values to other types if specified.
                         * @param message OrdersReply
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: com.xueershangda.tianxun.orders.model.OrdersReply, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this OrdersReply to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }
                }
            }

            /** Namespace comment. */
            namespace comment {

                /** Namespace model. */
                namespace model {

                    /** Properties of a Comment. */
                    interface IComment {

                        /** Comment id */
                        id?: (string|null);

                        /** Comment content */
                        content?: (string|null);

                        /** Comment userId */
                        userId?: (string|null);

                        /** Comment nickName */
                        nickName?: (string|null);

                        /** Comment commentDate */
                        commentDate?: (number|null);

                        /** Comment articleId */
                        articleId?: (string|null);

                        /** Comment type */
                        type?: (number|null);

                        /** Comment orders */
                        orders?: (number|null);

                        /** Comment state */
                        state?: (number|null);

                        /** Comment page */
                        page?: (number|null);

                        /** Comment pageSize */
                        pageSize?: (number|null);

                        /** Comment orderBy */
                        orderBy?: (string|null);

                        /** Comment targetTitle */
                        targetTitle?: (string|null);
                    }

                    /** Represents a Comment. */
                    class Comment implements IComment {

                        /**
                         * Constructs a new Comment.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: com.xueershangda.tianxun.comment.model.IComment);

                        /** Comment id. */
                        public id: string;

                        /** Comment content. */
                        public content: string;

                        /** Comment userId. */
                        public userId: string;

                        /** Comment nickName. */
                        public nickName: string;

                        /** Comment commentDate. */
                        public commentDate: (number);

                        /** Comment articleId. */
                        public articleId: string;

                        /** Comment type. */
                        public type: number;

                        /** Comment orders. */
                        public orders: number;

                        /** Comment state. */
                        public state: number;

                        /** Comment page. */
                        public page: number;

                        /** Comment pageSize. */
                        public pageSize: number;

                        /** Comment orderBy. */
                        public orderBy: string;

                        /** Comment targetTitle. */
                        public targetTitle: string;

                        /**
                         * Creates a new Comment instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns Comment instance
                         */
                        public static create(properties?: com.xueershangda.tianxun.comment.model.IComment): com.xueershangda.tianxun.comment.model.Comment;

                        /**
                         * Encodes the specified Comment message. Does not implicitly {@link com.xueershangda.tianxun.comment.model.Comment.verify|verify} messages.
                         * @param message Comment message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: com.xueershangda.tianxun.comment.model.IComment, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified Comment message, length delimited. Does not implicitly {@link com.xueershangda.tianxun.comment.model.Comment.verify|verify} messages.
                         * @param message Comment message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: com.xueershangda.tianxun.comment.model.IComment, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a Comment message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns Comment
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.xueershangda.tianxun.comment.model.Comment;

                        /**
                         * Decodes a Comment message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns Comment
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.xueershangda.tianxun.comment.model.Comment;

                        /**
                         * Verifies a Comment message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a Comment message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns Comment
                         */
                        public static fromObject(object: { [k: string]: any }): com.xueershangda.tianxun.comment.model.Comment;

                        /**
                         * Creates a plain object from a Comment message. Also converts values to other types if specified.
                         * @param message Comment
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: com.xueershangda.tianxun.comment.model.Comment, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this Comment to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of a CommentReply. */
                    interface ICommentReply {

                        /** CommentReply code */
                        code?: (number|null);

                        /** CommentReply message */
                        message?: (string|null);

                        /** CommentReply data */
                        data?: (com.xueershangda.tianxun.comment.model.IComment[]|null);
                    }

                    /** Represents a CommentReply. */
                    class CommentReply implements ICommentReply {

                        /**
                         * Constructs a new CommentReply.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: com.xueershangda.tianxun.comment.model.ICommentReply);

                        /** CommentReply code. */
                        public code: number;

                        /** CommentReply message. */
                        public message: string;

                        /** CommentReply data. */
                        public data: com.xueershangda.tianxun.comment.model.IComment[];

                        /**
                         * Creates a new CommentReply instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns CommentReply instance
                         */
                        public static create(properties?: com.xueershangda.tianxun.comment.model.ICommentReply): com.xueershangda.tianxun.comment.model.CommentReply;

                        /**
                         * Encodes the specified CommentReply message. Does not implicitly {@link com.xueershangda.tianxun.comment.model.CommentReply.verify|verify} messages.
                         * @param message CommentReply message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: com.xueershangda.tianxun.comment.model.ICommentReply, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified CommentReply message, length delimited. Does not implicitly {@link com.xueershangda.tianxun.comment.model.CommentReply.verify|verify} messages.
                         * @param message CommentReply message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: com.xueershangda.tianxun.comment.model.ICommentReply, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a CommentReply message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns CommentReply
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.xueershangda.tianxun.comment.model.CommentReply;

                        /**
                         * Decodes a CommentReply message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns CommentReply
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.xueershangda.tianxun.comment.model.CommentReply;

                        /**
                         * Verifies a CommentReply message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a CommentReply message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns CommentReply
                         */
                        public static fromObject(object: { [k: string]: any }): com.xueershangda.tianxun.comment.model.CommentReply;

                        /**
                         * Creates a plain object from a CommentReply message. Also converts values to other types if specified.
                         * @param message CommentReply
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: com.xueershangda.tianxun.comment.model.CommentReply, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this CommentReply to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }
                }
            }

            /** Namespace game. */
            namespace game {

                /** Namespace model. */
                namespace model {

                    /** Properties of an Equipment. */
                    interface IEquipment {

                        /** Equipment id */
                        id?: (string|null);

                        /** Equipment name */
                        name?: (string|null);

                        /** Equipment occupation */
                        occupation?: (string|null);

                        /** Equipment type */
                        type?: (string|null);

                        /** Equipment damage */
                        damage?: (number|null);

                        /** Equipment defense */
                        defense?: (number|null);

                        /** Equipment healthPoint */
                        healthPoint?: (number|null);

                        /** Equipment userId */
                        userId?: (string|null);

                        /** Equipment state */
                        state?: (number|null);

                        /** Equipment dressed */
                        dressed?: (boolean|null);

                        /** Equipment page */
                        page?: (number|null);

                        /** Equipment pageSize */
                        pageSize?: (number|null);

                        /** Equipment orderBy */
                        orderBy?: (string|null);

                        /** Equipment level */
                        level?: (number|null);

                        /** Equipment coverImage */
                        coverImage?: (string|null);

                        /** Equipment summary */
                        summary?: (string|null);

                        /** Equipment text */
                        text?: (string|null);

                        /** Equipment itemsId */
                        itemsId?: (string|null);

                        /** Equipment heatDegree */
                        heatDegree?: (number|null);
                    }

                    /** Represents an Equipment. */
                    class Equipment implements IEquipment {

                        /**
                         * Constructs a new Equipment.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: com.xueershangda.tianxun.game.model.IEquipment);

                        /** Equipment id. */
                        public id: string;

                        /** Equipment name. */
                        public name: string;

                        /** Equipment occupation. */
                        public occupation: string;

                        /** Equipment type. */
                        public type: string;

                        /** Equipment damage. */
                        public damage: number;

                        /** Equipment defense. */
                        public defense: number;

                        /** Equipment healthPoint. */
                        public healthPoint: number;

                        /** Equipment userId. */
                        public userId: string;

                        /** Equipment state. */
                        public state: number;

                        /** Equipment dressed. */
                        public dressed: boolean;

                        /** Equipment page. */
                        public page: number;

                        /** Equipment pageSize. */
                        public pageSize: number;

                        /** Equipment orderBy. */
                        public orderBy: string;

                        /** Equipment level. */
                        public level: number;

                        /** Equipment coverImage. */
                        public coverImage: string;

                        /** Equipment summary. */
                        public summary: string;

                        /** Equipment text. */
                        public text: string;

                        /** Equipment itemsId. */
                        public itemsId: string;

                        /** Equipment heatDegree. */
                        public heatDegree: number;

                        /**
                         * Creates a new Equipment instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns Equipment instance
                         */
                        public static create(properties?: com.xueershangda.tianxun.game.model.IEquipment): com.xueershangda.tianxun.game.model.Equipment;

                        /**
                         * Encodes the specified Equipment message. Does not implicitly {@link com.xueershangda.tianxun.game.model.Equipment.verify|verify} messages.
                         * @param message Equipment message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: com.xueershangda.tianxun.game.model.IEquipment, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified Equipment message, length delimited. Does not implicitly {@link com.xueershangda.tianxun.game.model.Equipment.verify|verify} messages.
                         * @param message Equipment message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: com.xueershangda.tianxun.game.model.IEquipment, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an Equipment message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns Equipment
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.xueershangda.tianxun.game.model.Equipment;

                        /**
                         * Decodes an Equipment message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns Equipment
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.xueershangda.tianxun.game.model.Equipment;

                        /**
                         * Verifies an Equipment message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates an Equipment message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns Equipment
                         */
                        public static fromObject(object: { [k: string]: any }): com.xueershangda.tianxun.game.model.Equipment;

                        /**
                         * Creates a plain object from an Equipment message. Also converts values to other types if specified.
                         * @param message Equipment
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: com.xueershangda.tianxun.game.model.Equipment, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this Equipment to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of an EquipmentReply. */
                    interface IEquipmentReply {

                        /** EquipmentReply code */
                        code?: (number|null);

                        /** EquipmentReply message */
                        message?: (string|null);

                        /** EquipmentReply data */
                        data?: (com.xueershangda.tianxun.game.model.IEquipment[]|null);
                    }

                    /** Represents an EquipmentReply. */
                    class EquipmentReply implements IEquipmentReply {

                        /**
                         * Constructs a new EquipmentReply.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: com.xueershangda.tianxun.game.model.IEquipmentReply);

                        /** EquipmentReply code. */
                        public code: number;

                        /** EquipmentReply message. */
                        public message: string;

                        /** EquipmentReply data. */
                        public data: com.xueershangda.tianxun.game.model.IEquipment[];

                        /**
                         * Creates a new EquipmentReply instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns EquipmentReply instance
                         */
                        public static create(properties?: com.xueershangda.tianxun.game.model.IEquipmentReply): com.xueershangda.tianxun.game.model.EquipmentReply;

                        /**
                         * Encodes the specified EquipmentReply message. Does not implicitly {@link com.xueershangda.tianxun.game.model.EquipmentReply.verify|verify} messages.
                         * @param message EquipmentReply message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: com.xueershangda.tianxun.game.model.IEquipmentReply, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified EquipmentReply message, length delimited. Does not implicitly {@link com.xueershangda.tianxun.game.model.EquipmentReply.verify|verify} messages.
                         * @param message EquipmentReply message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: com.xueershangda.tianxun.game.model.IEquipmentReply, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an EquipmentReply message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns EquipmentReply
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.xueershangda.tianxun.game.model.EquipmentReply;

                        /**
                         * Decodes an EquipmentReply message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns EquipmentReply
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.xueershangda.tianxun.game.model.EquipmentReply;

                        /**
                         * Verifies an EquipmentReply message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates an EquipmentReply message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns EquipmentReply
                         */
                        public static fromObject(object: { [k: string]: any }): com.xueershangda.tianxun.game.model.EquipmentReply;

                        /**
                         * Creates a plain object from an EquipmentReply message. Also converts values to other types if specified.
                         * @param message EquipmentReply
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: com.xueershangda.tianxun.game.model.EquipmentReply, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this EquipmentReply to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of a Characters. */
                    interface ICharacters {

                        /** Characters id */
                        id?: (string|null);

                        /** Characters userId */
                        userId?: (string|null);

                        /** Characters arms */
                        arms?: (string|null);

                        /** Characters armour */
                        armour?: (string|null);

                        /** Characters gaiter */
                        gaiter?: (string|null);

                        /** Characters shoes */
                        shoes?: (string|null);

                        /** Characters helmet */
                        helmet?: (string|null);

                        /** Characters wrister */
                        wrister?: (string|null);

                        /** Characters ringRight */
                        ringRight?: (string|null);

                        /** Characters ringLeft */
                        ringLeft?: (string|null);

                        /** Characters necklace */
                        necklace?: (string|null);

                        /** Characters belt */
                        belt?: (string|null);

                        /** Characters shoulder */
                        shoulder?: (string|null);

                        /** Characters damage */
                        damage?: (number|null);

                        /** Characters defense */
                        defense?: (number|null);

                        /** Characters healthPoint */
                        healthPoint?: (number|null);

                        /** Characters grade */
                        grade?: (number|null);

                        /** Characters experience */
                        experience?: (number|null);

                        /** Characters state */
                        state?: (number|null);

                        /** Characters page */
                        page?: (number|null);

                        /** Characters pageSize */
                        pageSize?: (number|null);

                        /** Characters orderBy */
                        orderBy?: (string|null);

                        /** Characters nickName */
                        nickName?: (string|null);

                        /** Characters account */
                        account?: (string|null);

                        /** Characters avatar */
                        avatar?: (string|null);

                        /** Characters text */
                        text?: (string|null);

                        /** Characters attack */
                        attack?: (number|null);

                        /** Characters currentPoint */
                        currentPoint?: (number|null);

                        /** Characters gradeExperience */
                        gradeExperience?: (number|null);

                        /** Characters powerValue */
                        powerValue?: (number|null);
                    }

                    /** Represents a Characters. */
                    class Characters implements ICharacters {

                        /**
                         * Constructs a new Characters.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: com.xueershangda.tianxun.game.model.ICharacters);

                        /** Characters id. */
                        public id: string;

                        /** Characters userId. */
                        public userId: string;

                        /** Characters arms. */
                        public arms: string;

                        /** Characters armour. */
                        public armour: string;

                        /** Characters gaiter. */
                        public gaiter: string;

                        /** Characters shoes. */
                        public shoes: string;

                        /** Characters helmet. */
                        public helmet: string;

                        /** Characters wrister. */
                        public wrister: string;

                        /** Characters ringRight. */
                        public ringRight: string;

                        /** Characters ringLeft. */
                        public ringLeft: string;

                        /** Characters necklace. */
                        public necklace: string;

                        /** Characters belt. */
                        public belt: string;

                        /** Characters shoulder. */
                        public shoulder: string;

                        /** Characters damage. */
                        public damage: number;

                        /** Characters defense. */
                        public defense: number;

                        /** Characters healthPoint. */
                        public healthPoint: number;

                        /** Characters grade. */
                        public grade: number;

                        /** Characters experience. */
                        public experience: (number);

                        /** Characters state. */
                        public state: number;

                        /** Characters page. */
                        public page: number;

                        /** Characters pageSize. */
                        public pageSize: number;

                        /** Characters orderBy. */
                        public orderBy: string;

                        /** Characters nickName. */
                        public nickName: string;

                        /** Characters account. */
                        public account: string;

                        /** Characters avatar. */
                        public avatar: string;

                        /** Characters text. */
                        public text: string;

                        /** Characters attack. */
                        public attack: number;

                        /** Characters currentPoint. */
                        public currentPoint: number;

                        /** Characters gradeExperience. */
                        public gradeExperience: (number);

                        /** Characters powerValue. */
                        public powerValue: number;

                        /**
                         * Creates a new Characters instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns Characters instance
                         */
                        public static create(properties?: com.xueershangda.tianxun.game.model.ICharacters): com.xueershangda.tianxun.game.model.Characters;

                        /**
                         * Encodes the specified Characters message. Does not implicitly {@link com.xueershangda.tianxun.game.model.Characters.verify|verify} messages.
                         * @param message Characters message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: com.xueershangda.tianxun.game.model.ICharacters, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified Characters message, length delimited. Does not implicitly {@link com.xueershangda.tianxun.game.model.Characters.verify|verify} messages.
                         * @param message Characters message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: com.xueershangda.tianxun.game.model.ICharacters, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a Characters message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns Characters
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.xueershangda.tianxun.game.model.Characters;

                        /**
                         * Decodes a Characters message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns Characters
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.xueershangda.tianxun.game.model.Characters;

                        /**
                         * Verifies a Characters message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a Characters message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns Characters
                         */
                        public static fromObject(object: { [k: string]: any }): com.xueershangda.tianxun.game.model.Characters;

                        /**
                         * Creates a plain object from a Characters message. Also converts values to other types if specified.
                         * @param message Characters
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: com.xueershangda.tianxun.game.model.Characters, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this Characters to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of a CharactersReply. */
                    interface ICharactersReply {

                        /** CharactersReply code */
                        code?: (number|null);

                        /** CharactersReply message */
                        message?: (string|null);

                        /** CharactersReply data */
                        data?: (com.xueershangda.tianxun.game.model.ICharacters[]|null);

                        /** CharactersReply characters */
                        characters?: (com.xueershangda.tianxun.game.model.ICharacters|null);
                    }

                    /** Represents a CharactersReply. */
                    class CharactersReply implements ICharactersReply {

                        /**
                         * Constructs a new CharactersReply.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: com.xueershangda.tianxun.game.model.ICharactersReply);

                        /** CharactersReply code. */
                        public code: number;

                        /** CharactersReply message. */
                        public message: string;

                        /** CharactersReply data. */
                        public data: com.xueershangda.tianxun.game.model.ICharacters[];

                        /** CharactersReply characters. */
                        public characters?: (com.xueershangda.tianxun.game.model.ICharacters|null);

                        /**
                         * Creates a new CharactersReply instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns CharactersReply instance
                         */
                        public static create(properties?: com.xueershangda.tianxun.game.model.ICharactersReply): com.xueershangda.tianxun.game.model.CharactersReply;

                        /**
                         * Encodes the specified CharactersReply message. Does not implicitly {@link com.xueershangda.tianxun.game.model.CharactersReply.verify|verify} messages.
                         * @param message CharactersReply message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: com.xueershangda.tianxun.game.model.ICharactersReply, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified CharactersReply message, length delimited. Does not implicitly {@link com.xueershangda.tianxun.game.model.CharactersReply.verify|verify} messages.
                         * @param message CharactersReply message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: com.xueershangda.tianxun.game.model.ICharactersReply, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a CharactersReply message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns CharactersReply
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.xueershangda.tianxun.game.model.CharactersReply;

                        /**
                         * Decodes a CharactersReply message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns CharactersReply
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.xueershangda.tianxun.game.model.CharactersReply;

                        /**
                         * Verifies a CharactersReply message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a CharactersReply message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns CharactersReply
                         */
                        public static fromObject(object: { [k: string]: any }): com.xueershangda.tianxun.game.model.CharactersReply;

                        /**
                         * Creates a plain object from a CharactersReply message. Also converts values to other types if specified.
                         * @param message CharactersReply
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: com.xueershangda.tianxun.game.model.CharactersReply, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this CharactersReply to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of a VirtualItems. */
                    interface IVirtualItems {

                        /** VirtualItems id */
                        id?: (string|null);

                        /** VirtualItems name */
                        name?: (string|null);

                        /** VirtualItems occupation */
                        occupation?: (string|null);

                        /** VirtualItems type */
                        type?: (string|null);

                        /** VirtualItems damage */
                        damage?: (number|null);

                        /** VirtualItems defense */
                        defense?: (number|null);

                        /** VirtualItems healthPoint */
                        healthPoint?: (number|null);

                        /** VirtualItems level */
                        level?: (number|null);

                        /** VirtualItems state */
                        state?: (number|null);

                        /** VirtualItems dressed */
                        dressed?: (boolean|null);

                        /** VirtualItems page */
                        page?: (number|null);

                        /** VirtualItems pageSize */
                        pageSize?: (number|null);

                        /** VirtualItems orderBy */
                        orderBy?: (string|null);

                        /** VirtualItems coverImage */
                        coverImage?: (string|null);

                        /** VirtualItems number */
                        number?: (number|null);

                        /** VirtualItems focusNumber */
                        focusNumber?: (number|null);

                        /** VirtualItems loveNumber */
                        loveNumber?: (number|null);

                        /** VirtualItems price */
                        price?: (number|null);

                        /** VirtualItems summary */
                        summary?: (string|null);

                        /** VirtualItems text */
                        text?: (string|null);
                    }

                    /** Represents a VirtualItems. */
                    class VirtualItems implements IVirtualItems {

                        /**
                         * Constructs a new VirtualItems.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: com.xueershangda.tianxun.game.model.IVirtualItems);

                        /** VirtualItems id. */
                        public id: string;

                        /** VirtualItems name. */
                        public name: string;

                        /** VirtualItems occupation. */
                        public occupation: string;

                        /** VirtualItems type. */
                        public type: string;

                        /** VirtualItems damage. */
                        public damage: number;

                        /** VirtualItems defense. */
                        public defense: number;

                        /** VirtualItems healthPoint. */
                        public healthPoint: number;

                        /** VirtualItems level. */
                        public level: number;

                        /** VirtualItems state. */
                        public state: number;

                        /** VirtualItems dressed. */
                        public dressed: boolean;

                        /** VirtualItems page. */
                        public page: number;

                        /** VirtualItems pageSize. */
                        public pageSize: number;

                        /** VirtualItems orderBy. */
                        public orderBy: string;

                        /** VirtualItems coverImage. */
                        public coverImage: string;

                        /** VirtualItems number. */
                        public number: (number);

                        /** VirtualItems focusNumber. */
                        public focusNumber: (number);

                        /** VirtualItems loveNumber. */
                        public loveNumber: (number);

                        /** VirtualItems price. */
                        public price: number;

                        /** VirtualItems summary. */
                        public summary: string;

                        /** VirtualItems text. */
                        public text: string;

                        /**
                         * Creates a new VirtualItems instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns VirtualItems instance
                         */
                        public static create(properties?: com.xueershangda.tianxun.game.model.IVirtualItems): com.xueershangda.tianxun.game.model.VirtualItems;

                        /**
                         * Encodes the specified VirtualItems message. Does not implicitly {@link com.xueershangda.tianxun.game.model.VirtualItems.verify|verify} messages.
                         * @param message VirtualItems message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: com.xueershangda.tianxun.game.model.IVirtualItems, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified VirtualItems message, length delimited. Does not implicitly {@link com.xueershangda.tianxun.game.model.VirtualItems.verify|verify} messages.
                         * @param message VirtualItems message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: com.xueershangda.tianxun.game.model.IVirtualItems, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a VirtualItems message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns VirtualItems
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.xueershangda.tianxun.game.model.VirtualItems;

                        /**
                         * Decodes a VirtualItems message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns VirtualItems
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.xueershangda.tianxun.game.model.VirtualItems;

                        /**
                         * Verifies a VirtualItems message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a VirtualItems message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns VirtualItems
                         */
                        public static fromObject(object: { [k: string]: any }): com.xueershangda.tianxun.game.model.VirtualItems;

                        /**
                         * Creates a plain object from a VirtualItems message. Also converts values to other types if specified.
                         * @param message VirtualItems
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: com.xueershangda.tianxun.game.model.VirtualItems, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this VirtualItems to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of a VirtualItemsReply. */
                    interface IVirtualItemsReply {

                        /** VirtualItemsReply code */
                        code?: (number|null);

                        /** VirtualItemsReply message */
                        message?: (string|null);

                        /** VirtualItemsReply data */
                        data?: (com.xueershangda.tianxun.game.model.IVirtualItems[]|null);

                        /** VirtualItemsReply equipmentList */
                        equipmentList?: (com.xueershangda.tianxun.game.model.IEquipment[]|null);
                    }

                    /** Represents a VirtualItemsReply. */
                    class VirtualItemsReply implements IVirtualItemsReply {

                        /**
                         * Constructs a new VirtualItemsReply.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: com.xueershangda.tianxun.game.model.IVirtualItemsReply);

                        /** VirtualItemsReply code. */
                        public code: number;

                        /** VirtualItemsReply message. */
                        public message: string;

                        /** VirtualItemsReply data. */
                        public data: com.xueershangda.tianxun.game.model.IVirtualItems[];

                        /** VirtualItemsReply equipmentList. */
                        public equipmentList: com.xueershangda.tianxun.game.model.IEquipment[];

                        /**
                         * Creates a new VirtualItemsReply instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns VirtualItemsReply instance
                         */
                        public static create(properties?: com.xueershangda.tianxun.game.model.IVirtualItemsReply): com.xueershangda.tianxun.game.model.VirtualItemsReply;

                        /**
                         * Encodes the specified VirtualItemsReply message. Does not implicitly {@link com.xueershangda.tianxun.game.model.VirtualItemsReply.verify|verify} messages.
                         * @param message VirtualItemsReply message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: com.xueershangda.tianxun.game.model.IVirtualItemsReply, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified VirtualItemsReply message, length delimited. Does not implicitly {@link com.xueershangda.tianxun.game.model.VirtualItemsReply.verify|verify} messages.
                         * @param message VirtualItemsReply message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: com.xueershangda.tianxun.game.model.IVirtualItemsReply, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a VirtualItemsReply message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns VirtualItemsReply
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.xueershangda.tianxun.game.model.VirtualItemsReply;

                        /**
                         * Decodes a VirtualItemsReply message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns VirtualItemsReply
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.xueershangda.tianxun.game.model.VirtualItemsReply;

                        /**
                         * Verifies a VirtualItemsReply message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a VirtualItemsReply message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns VirtualItemsReply
                         */
                        public static fromObject(object: { [k: string]: any }): com.xueershangda.tianxun.game.model.VirtualItemsReply;

                        /**
                         * Creates a plain object from a VirtualItemsReply message. Also converts values to other types if specified.
                         * @param message VirtualItemsReply
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: com.xueershangda.tianxun.game.model.VirtualItemsReply, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this VirtualItemsReply to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }
                }
            }

            /** Namespace video. */
            namespace video {

                /** Namespace model. */
                namespace model {

                    /** Properties of a Video. */
                    interface IVideo {

                        /** Video id */
                        id?: (string|null);

                        /** 视频标题 */
                        title?: (string|null);

                        /** 视频url */
                        url?: (string|null);

                        /** 视频封面 */
                        image?: (string|null);

                        /** 视频简介 */
                        summary?: (string|null);

                        /** 创建时间 */
                        createDate?: (number|null);

                        /** 更新时间 */
                        updateDate?: (number|null);

                        /** 价格 */
                        price?: (number|null);

                        /** 免费时长 */
                        freeTime?: (number|null);

                        /** 是否免费 */
                        free?: (boolean|null);

                        /** 销售数 */
                        number?: (number|null);

                        /** 点赞数 */
                        loveNumber?: (number|null);

                        /** 关注数 */
                        focusNumber?: (number|null);

                        /** 鄙视数 */
                        despiseNumber?: (number|null);

                        /** 状态 */
                        state?: (number|null);

                        /** 分类 */
                        category?: (string|null);

                        /** 广告语 */
                        ads?: (string|null);

                        /** 备注 */
                        remark?: (string|null);

                        /** 用户id/平台 */
                        userId?: (string|null);

                        /** 视频类型 */
                        videoType?: (string|null);

                        /** 1新增2更新 */
                        update?: (number|null);

                        /** 预览url，试看 */
                        previewUrl?: (string|null);

                        /** order by 排序语句 */
                        orderBy?: (string|null);

                        /** 分页开始记录 */
                        start?: (number|null);

                        /** 页码 */
                        page?: (number|null);

                        /** 分页大小 */
                        pageSize?: (number|null);

                        /** 1新增2更新 */
                        updateVideo?: (number|null);

                        /** 日期路径 */
                        datePath?: (string|null);
                    }

                    /** Represents a Video. */
                    class Video implements IVideo {

                        /**
                         * Constructs a new Video.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: com.xueershangda.tianxun.video.model.IVideo);

                        /** Video id. */
                        public id: string;

                        /** 视频标题 */
                        public title: string;

                        /** 视频url */
                        public url: string;

                        /** 视频封面 */
                        public image: string;

                        /** 视频简介 */
                        public summary: string;

                        /** 创建时间 */
                        public createDate: (number);

                        /** 更新时间 */
                        public updateDate: (number);

                        /** 价格 */
                        public price: number;

                        /** 免费时长 */
                        public freeTime: number;

                        /** 是否免费 */
                        public free: boolean;

                        /** 销售数 */
                        public number: number;

                        /** 点赞数 */
                        public loveNumber: number;

                        /** 关注数 */
                        public focusNumber: number;

                        /** 鄙视数 */
                        public despiseNumber: number;

                        /** 状态 */
                        public state: number;

                        /** 分类 */
                        public category: string;

                        /** 广告语 */
                        public ads: string;

                        /** 备注 */
                        public remark: string;

                        /** 用户id/平台 */
                        public userId: string;

                        /** 视频类型 */
                        public videoType: string;

                        /** 1新增2更新 */
                        public update: number;

                        /** 预览url，试看 */
                        public previewUrl: string;

                        /** order by 排序语句 */
                        public orderBy: string;

                        /** 分页开始记录 */
                        public start: number;

                        /** 页码 */
                        public page: number;

                        /** 分页大小 */
                        public pageSize: number;

                        /** 1新增2更新 */
                        public updateVideo: number;

                        /** 日期路径 */
                        public datePath: string;

                        /**
                         * Creates a new Video instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns Video instance
                         */
                        public static create(properties?: com.xueershangda.tianxun.video.model.IVideo): com.xueershangda.tianxun.video.model.Video;

                        /**
                         * Encodes the specified Video message. Does not implicitly {@link com.xueershangda.tianxun.video.model.Video.verify|verify} messages.
                         * @param message Video message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: com.xueershangda.tianxun.video.model.IVideo, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified Video message, length delimited. Does not implicitly {@link com.xueershangda.tianxun.video.model.Video.verify|verify} messages.
                         * @param message Video message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: com.xueershangda.tianxun.video.model.IVideo, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a Video message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns Video
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.xueershangda.tianxun.video.model.Video;

                        /**
                         * Decodes a Video message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns Video
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.xueershangda.tianxun.video.model.Video;

                        /**
                         * Verifies a Video message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a Video message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns Video
                         */
                        public static fromObject(object: { [k: string]: any }): com.xueershangda.tianxun.video.model.Video;

                        /**
                         * Creates a plain object from a Video message. Also converts values to other types if specified.
                         * @param message Video
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: com.xueershangda.tianxun.video.model.Video, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this Video to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of a VideoReply. */
                    interface IVideoReply {

                        /** VideoReply code */
                        code?: (number|null);

                        /** VideoReply message */
                        message?: (string|null);

                        /** VideoReply data */
                        data?: (com.xueershangda.tianxun.video.model.IVideo[]|null);

                        /** VideoReply video */
                        video?: (com.xueershangda.tianxun.video.model.IVideo|null);

                        /** VideoReply account */
                        account?: (string|null);

                        /** VideoReply price */
                        price?: (number|null);

                        /** VideoReply title */
                        title?: (string|null);

                        /** VideoReply type */
                        type?: (string|null);

                        /** VideoReply targetId */
                        targetId?: (string|null);
                    }

                    /** Represents a VideoReply. */
                    class VideoReply implements IVideoReply {

                        /**
                         * Constructs a new VideoReply.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: com.xueershangda.tianxun.video.model.IVideoReply);

                        /** VideoReply code. */
                        public code: number;

                        /** VideoReply message. */
                        public message: string;

                        /** VideoReply data. */
                        public data: com.xueershangda.tianxun.video.model.IVideo[];

                        /** VideoReply video. */
                        public video?: (com.xueershangda.tianxun.video.model.IVideo|null);

                        /** VideoReply account. */
                        public account: string;

                        /** VideoReply price. */
                        public price: number;

                        /** VideoReply title. */
                        public title: string;

                        /** VideoReply type. */
                        public type: string;

                        /** VideoReply targetId. */
                        public targetId: string;

                        /**
                         * Creates a new VideoReply instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns VideoReply instance
                         */
                        public static create(properties?: com.xueershangda.tianxun.video.model.IVideoReply): com.xueershangda.tianxun.video.model.VideoReply;

                        /**
                         * Encodes the specified VideoReply message. Does not implicitly {@link com.xueershangda.tianxun.video.model.VideoReply.verify|verify} messages.
                         * @param message VideoReply message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: com.xueershangda.tianxun.video.model.IVideoReply, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified VideoReply message, length delimited. Does not implicitly {@link com.xueershangda.tianxun.video.model.VideoReply.verify|verify} messages.
                         * @param message VideoReply message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: com.xueershangda.tianxun.video.model.IVideoReply, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a VideoReply message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns VideoReply
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.xueershangda.tianxun.video.model.VideoReply;

                        /**
                         * Decodes a VideoReply message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns VideoReply
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.xueershangda.tianxun.video.model.VideoReply;

                        /**
                         * Verifies a VideoReply message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a VideoReply message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns VideoReply
                         */
                        public static fromObject(object: { [k: string]: any }): com.xueershangda.tianxun.video.model.VideoReply;

                        /**
                         * Creates a plain object from a VideoReply message. Also converts values to other types if specified.
                         * @param message VideoReply
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: com.xueershangda.tianxun.video.model.VideoReply, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this VideoReply to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }
                }
            }

            /** Namespace pay. */
            namespace pay {

                /** Namespace model. */
                namespace model {

                    /** Properties of an Alipay. */
                    interface IAlipay {

                        /** Alipay code */
                        code?: (number|null);

                        /** Alipay message */
                        message?: (string|null);

                        /** Alipay id */
                        id?: (string|null);

                        /** 诸多请求参数，ts端无法序列化map */
                        body?: (string|null);

                        /** Alipay value */
                        value?: (string|null);

                        /** Alipay result */
                        result?: (string|null);

                        /** 订单标题 */
                        subject?: (string|null);

                        /** 订单标题描述 */
                        titleDesc?: (string|null);

                        /** 外部订单号（商户自己订单号） */
                        outTradeNo?: (string|null);

                        /** 支付宝订单号 */
                        orderId?: (string|null);

                        /** 订单金额，单位元 */
                        amount?: (number|null);

                        /** 购买标的类型：1文章、2问题 */
                        type?: (number|null);

                        /** 订单创建时间 */
                        createDate?: (number|null);

                        /** 支付时间 */
                        payDate?: (number|null);

                        /** 订单状态，1待支付，2支付中，3支付成功 */
                        state?: (number|null);

                        /** 买家用户id */
                        buyer?: (string|null);

                        /** 卖家用户id */
                        seller?: (string|null);

                        /** 支付渠道 */
                        payChannel?: (string|null);
                    }

                    /** Represents an Alipay. */
                    class Alipay implements IAlipay {

                        /**
                         * Constructs a new Alipay.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: com.xueershangda.tianxun.pay.model.IAlipay);

                        /** Alipay code. */
                        public code: number;

                        /** Alipay message. */
                        public message: string;

                        /** Alipay id. */
                        public id: string;

                        /** 诸多请求参数，ts端无法序列化map */
                        public body: string;

                        /** Alipay value. */
                        public value: string;

                        /** Alipay result. */
                        public result: string;

                        /** 订单标题 */
                        public subject: string;

                        /** 订单标题描述 */
                        public titleDesc: string;

                        /** 外部订单号（商户自己订单号） */
                        public outTradeNo: string;

                        /** 支付宝订单号 */
                        public orderId: string;

                        /** 订单金额，单位元 */
                        public amount: number;

                        /** 购买标的类型：1文章、2问题 */
                        public type: number;

                        /** 订单创建时间 */
                        public createDate: (number);

                        /** 支付时间 */
                        public payDate: (number);

                        /** 订单状态，1待支付，2支付中，3支付成功 */
                        public state: number;

                        /** 买家用户id */
                        public buyer: string;

                        /** 卖家用户id */
                        public seller: string;

                        /** 支付渠道 */
                        public payChannel: string;

                        /**
                         * Creates a new Alipay instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns Alipay instance
                         */
                        public static create(properties?: com.xueershangda.tianxun.pay.model.IAlipay): com.xueershangda.tianxun.pay.model.Alipay;

                        /**
                         * Encodes the specified Alipay message. Does not implicitly {@link com.xueershangda.tianxun.pay.model.Alipay.verify|verify} messages.
                         * @param message Alipay message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: com.xueershangda.tianxun.pay.model.IAlipay, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified Alipay message, length delimited. Does not implicitly {@link com.xueershangda.tianxun.pay.model.Alipay.verify|verify} messages.
                         * @param message Alipay message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: com.xueershangda.tianxun.pay.model.IAlipay, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an Alipay message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns Alipay
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.xueershangda.tianxun.pay.model.Alipay;

                        /**
                         * Decodes an Alipay message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns Alipay
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.xueershangda.tianxun.pay.model.Alipay;

                        /**
                         * Verifies an Alipay message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates an Alipay message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns Alipay
                         */
                        public static fromObject(object: { [k: string]: any }): com.xueershangda.tianxun.pay.model.Alipay;

                        /**
                         * Creates a plain object from an Alipay message. Also converts values to other types if specified.
                         * @param message Alipay
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: com.xueershangda.tianxun.pay.model.Alipay, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this Alipay to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of an AlipayReply. */
                    interface IAlipayReply {

                        /** AlipayReply code */
                        code?: (number|null);

                        /** AlipayReply message */
                        message?: (string|null);

                        /** AlipayReply data */
                        data?: (com.xueershangda.tianxun.pay.model.IAlipay[]|null);

                        /** AlipayReply body */
                        body?: (string|null);

                        /** AlipayReply value */
                        value?: (string|null);

                        /** AlipayReply result */
                        result?: (string|null);
                    }

                    /** Represents an AlipayReply. */
                    class AlipayReply implements IAlipayReply {

                        /**
                         * Constructs a new AlipayReply.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: com.xueershangda.tianxun.pay.model.IAlipayReply);

                        /** AlipayReply code. */
                        public code: number;

                        /** AlipayReply message. */
                        public message: string;

                        /** AlipayReply data. */
                        public data: com.xueershangda.tianxun.pay.model.IAlipay[];

                        /** AlipayReply body. */
                        public body: string;

                        /** AlipayReply value. */
                        public value: string;

                        /** AlipayReply result. */
                        public result: string;

                        /**
                         * Creates a new AlipayReply instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns AlipayReply instance
                         */
                        public static create(properties?: com.xueershangda.tianxun.pay.model.IAlipayReply): com.xueershangda.tianxun.pay.model.AlipayReply;

                        /**
                         * Encodes the specified AlipayReply message. Does not implicitly {@link com.xueershangda.tianxun.pay.model.AlipayReply.verify|verify} messages.
                         * @param message AlipayReply message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: com.xueershangda.tianxun.pay.model.IAlipayReply, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified AlipayReply message, length delimited. Does not implicitly {@link com.xueershangda.tianxun.pay.model.AlipayReply.verify|verify} messages.
                         * @param message AlipayReply message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: com.xueershangda.tianxun.pay.model.IAlipayReply, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an AlipayReply message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns AlipayReply
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.xueershangda.tianxun.pay.model.AlipayReply;

                        /**
                         * Decodes an AlipayReply message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns AlipayReply
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.xueershangda.tianxun.pay.model.AlipayReply;

                        /**
                         * Verifies an AlipayReply message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates an AlipayReply message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns AlipayReply
                         */
                        public static fromObject(object: { [k: string]: any }): com.xueershangda.tianxun.pay.model.AlipayReply;

                        /**
                         * Creates a plain object from an AlipayReply message. Also converts values to other types if specified.
                         * @param message AlipayReply
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: com.xueershangda.tianxun.pay.model.AlipayReply, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this AlipayReply to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }
                }
            }

            /** Namespace employee. */
            namespace employee {

                /** Namespace model. */
                namespace model {

                    /** Properties of an Employee. */
                    interface IEmployee {

                        /** Employee orderBy */
                        orderBy?: (string|null);

                        /** Employee start */
                        start?: (number|null);

                        /** Employee pageSize */
                        pageSize?: (number|null);

                        /** Employee id */
                        id?: (string|null);

                        /** Employee account */
                        account?: (string|null);

                        /** Employee name */
                        name?: (string|null);

                        /** Employee mobile */
                        mobile?: (string|null);

                        /** Employee email */
                        email?: (string|null);

                        /** Employee gender */
                        gender?: (number|null);

                        /** Employee deptName */
                        deptName?: (string|null);

                        /** Employee position */
                        position?: (string|null);

                        /** Employee password */
                        password?: (string|null);

                        /** Employee avatar */
                        avatar?: (string|null);

                        /** Employee admin */
                        admin?: (number|null);

                        /** Employee createDate */
                        createDate?: (number|null);

                        /** Employee number */
                        number?: (string|null);

                        /** Employee entryTime */
                        entryTime?: (number|null);

                        /** Employee birthday */
                        birthday?: (number|null);

                        /** Employee address */
                        address?: (string|null);

                        /** Employee idcard */
                        idcard?: (string|null);

                        /** Employee deptId */
                        deptId?: (string|null);

                        /** Employee state */
                        state?: (number|null);

                        /** Employee employeeNo */
                        employeeNo?: (number|null);

                        /** Employee token */
                        token?: (string|null);
                    }

                    /** Represents an Employee. */
                    class Employee implements IEmployee {

                        /**
                         * Constructs a new Employee.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: com.xueershangda.tianxun.employee.model.IEmployee);

                        /** Employee orderBy. */
                        public orderBy: string;

                        /** Employee start. */
                        public start: number;

                        /** Employee pageSize. */
                        public pageSize: number;

                        /** Employee id. */
                        public id: string;

                        /** Employee account. */
                        public account: string;

                        /** Employee name. */
                        public name: string;

                        /** Employee mobile. */
                        public mobile: string;

                        /** Employee email. */
                        public email: string;

                        /** Employee gender. */
                        public gender: number;

                        /** Employee deptName. */
                        public deptName: string;

                        /** Employee position. */
                        public position: string;

                        /** Employee password. */
                        public password: string;

                        /** Employee avatar. */
                        public avatar: string;

                        /** Employee admin. */
                        public admin: number;

                        /** Employee createDate. */
                        public createDate: (number);

                        /** Employee number. */
                        public number: string;

                        /** Employee entryTime. */
                        public entryTime: (number);

                        /** Employee birthday. */
                        public birthday: (number);

                        /** Employee address. */
                        public address: string;

                        /** Employee idcard. */
                        public idcard: string;

                        /** Employee deptId. */
                        public deptId: string;

                        /** Employee state. */
                        public state: number;

                        /** Employee employeeNo. */
                        public employeeNo: number;

                        /** Employee token. */
                        public token: string;

                        /**
                         * Creates a new Employee instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns Employee instance
                         */
                        public static create(properties?: com.xueershangda.tianxun.employee.model.IEmployee): com.xueershangda.tianxun.employee.model.Employee;

                        /**
                         * Encodes the specified Employee message. Does not implicitly {@link com.xueershangda.tianxun.employee.model.Employee.verify|verify} messages.
                         * @param message Employee message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: com.xueershangda.tianxun.employee.model.IEmployee, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified Employee message, length delimited. Does not implicitly {@link com.xueershangda.tianxun.employee.model.Employee.verify|verify} messages.
                         * @param message Employee message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: com.xueershangda.tianxun.employee.model.IEmployee, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an Employee message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns Employee
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.xueershangda.tianxun.employee.model.Employee;

                        /**
                         * Decodes an Employee message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns Employee
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.xueershangda.tianxun.employee.model.Employee;

                        /**
                         * Verifies an Employee message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates an Employee message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns Employee
                         */
                        public static fromObject(object: { [k: string]: any }): com.xueershangda.tianxun.employee.model.Employee;

                        /**
                         * Creates a plain object from an Employee message. Also converts values to other types if specified.
                         * @param message Employee
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: com.xueershangda.tianxun.employee.model.Employee, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this Employee to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of an App. */
                    interface IApp {

                        /** App id */
                        id?: (string|null);

                        /** App name */
                        name?: (string|null);

                        /** App description */
                        description?: (string|null);
                    }

                    /** Represents an App. */
                    class App implements IApp {

                        /**
                         * Constructs a new App.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: com.xueershangda.tianxun.employee.model.IApp);

                        /** App id. */
                        public id: string;

                        /** App name. */
                        public name: string;

                        /** App description. */
                        public description: string;

                        /**
                         * Creates a new App instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns App instance
                         */
                        public static create(properties?: com.xueershangda.tianxun.employee.model.IApp): com.xueershangda.tianxun.employee.model.App;

                        /**
                         * Encodes the specified App message. Does not implicitly {@link com.xueershangda.tianxun.employee.model.App.verify|verify} messages.
                         * @param message App message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: com.xueershangda.tianxun.employee.model.IApp, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified App message, length delimited. Does not implicitly {@link com.xueershangda.tianxun.employee.model.App.verify|verify} messages.
                         * @param message App message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: com.xueershangda.tianxun.employee.model.IApp, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an App message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns App
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.xueershangda.tianxun.employee.model.App;

                        /**
                         * Decodes an App message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns App
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.xueershangda.tianxun.employee.model.App;

                        /**
                         * Verifies an App message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates an App message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns App
                         */
                        public static fromObject(object: { [k: string]: any }): com.xueershangda.tianxun.employee.model.App;

                        /**
                         * Creates a plain object from an App message. Also converts values to other types if specified.
                         * @param message App
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: com.xueershangda.tianxun.employee.model.App, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this App to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of a Menu. */
                    interface IMenu {

                        /** Menu id */
                        id?: (string|null);

                        /** Menu text */
                        text?: (string|null);

                        /** Menu i18n */
                        i18n?: (string|null);

                        /** Menu group */
                        group?: (boolean|null);

                        /** Menu hideInBreadcrumb */
                        hideInBreadcrumb?: (boolean|null);

                        /** Menu children */
                        children?: (com.xueershangda.tianxun.employee.model.ISubmenu[]|null);

                        /** Menu name */
                        name?: (string|null);

                        /** Menu enabled */
                        enabled?: (boolean|null);

                        /** Menu orders */
                        orders?: (number|null);

                        /** Menu state */
                        state?: (number|null);

                        /** Menu icon */
                        icon?: (string|null);

                        /** Menu initial */
                        initial?: (boolean|null);
                    }

                    /** Represents a Menu. */
                    class Menu implements IMenu {

                        /**
                         * Constructs a new Menu.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: com.xueershangda.tianxun.employee.model.IMenu);

                        /** Menu id. */
                        public id: string;

                        /** Menu text. */
                        public text: string;

                        /** Menu i18n. */
                        public i18n: string;

                        /** Menu group. */
                        public group: boolean;

                        /** Menu hideInBreadcrumb. */
                        public hideInBreadcrumb: boolean;

                        /** Menu children. */
                        public children: com.xueershangda.tianxun.employee.model.ISubmenu[];

                        /** Menu name. */
                        public name: string;

                        /** Menu enabled. */
                        public enabled: boolean;

                        /** Menu orders. */
                        public orders: number;

                        /** Menu state. */
                        public state: number;

                        /** Menu icon. */
                        public icon: string;

                        /** Menu initial. */
                        public initial: boolean;

                        /**
                         * Creates a new Menu instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns Menu instance
                         */
                        public static create(properties?: com.xueershangda.tianxun.employee.model.IMenu): com.xueershangda.tianxun.employee.model.Menu;

                        /**
                         * Encodes the specified Menu message. Does not implicitly {@link com.xueershangda.tianxun.employee.model.Menu.verify|verify} messages.
                         * @param message Menu message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: com.xueershangda.tianxun.employee.model.IMenu, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified Menu message, length delimited. Does not implicitly {@link com.xueershangda.tianxun.employee.model.Menu.verify|verify} messages.
                         * @param message Menu message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: com.xueershangda.tianxun.employee.model.IMenu, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a Menu message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns Menu
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.xueershangda.tianxun.employee.model.Menu;

                        /**
                         * Decodes a Menu message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns Menu
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.xueershangda.tianxun.employee.model.Menu;

                        /**
                         * Verifies a Menu message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a Menu message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns Menu
                         */
                        public static fromObject(object: { [k: string]: any }): com.xueershangda.tianxun.employee.model.Menu;

                        /**
                         * Creates a plain object from a Menu message. Also converts values to other types if specified.
                         * @param message Menu
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: com.xueershangda.tianxun.employee.model.Menu, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this Menu to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of a Submenu. */
                    interface ISubmenu {

                        /** Submenu id */
                        id?: (string|null);

                        /** Submenu text */
                        text?: (string|null);

                        /** Submenu i18n */
                        i18n?: (string|null);

                        /** Submenu icon */
                        icon?: (string|null);

                        /** Submenu link */
                        link?: (string|null);

                        /** Submenu children */
                        children?: (com.xueershangda.tianxun.employee.model.IMenuItem[]|null);

                        /** Submenu shortcutRoot */
                        shortcutRoot?: (boolean|null);
                    }

                    /** Represents a Submenu. */
                    class Submenu implements ISubmenu {

                        /**
                         * Constructs a new Submenu.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: com.xueershangda.tianxun.employee.model.ISubmenu);

                        /** Submenu id. */
                        public id: string;

                        /** Submenu text. */
                        public text: string;

                        /** Submenu i18n. */
                        public i18n: string;

                        /** Submenu icon. */
                        public icon: string;

                        /** Submenu link. */
                        public link: string;

                        /** Submenu children. */
                        public children: com.xueershangda.tianxun.employee.model.IMenuItem[];

                        /** Submenu shortcutRoot. */
                        public shortcutRoot: boolean;

                        /**
                         * Creates a new Submenu instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns Submenu instance
                         */
                        public static create(properties?: com.xueershangda.tianxun.employee.model.ISubmenu): com.xueershangda.tianxun.employee.model.Submenu;

                        /**
                         * Encodes the specified Submenu message. Does not implicitly {@link com.xueershangda.tianxun.employee.model.Submenu.verify|verify} messages.
                         * @param message Submenu message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: com.xueershangda.tianxun.employee.model.ISubmenu, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified Submenu message, length delimited. Does not implicitly {@link com.xueershangda.tianxun.employee.model.Submenu.verify|verify} messages.
                         * @param message Submenu message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: com.xueershangda.tianxun.employee.model.ISubmenu, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a Submenu message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns Submenu
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.xueershangda.tianxun.employee.model.Submenu;

                        /**
                         * Decodes a Submenu message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns Submenu
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.xueershangda.tianxun.employee.model.Submenu;

                        /**
                         * Verifies a Submenu message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a Submenu message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns Submenu
                         */
                        public static fromObject(object: { [k: string]: any }): com.xueershangda.tianxun.employee.model.Submenu;

                        /**
                         * Creates a plain object from a Submenu message. Also converts values to other types if specified.
                         * @param message Submenu
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: com.xueershangda.tianxun.employee.model.Submenu, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this Submenu to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of a MenuItem. */
                    interface IMenuItem {

                        /** MenuItem id */
                        id?: (string|null);

                        /** MenuItem text */
                        text?: (string|null);

                        /** MenuItem i18n */
                        i18n?: (string|null);

                        /** MenuItem link */
                        link?: (string|null);

                        /** MenuItem shortcut */
                        shortcut?: (boolean|null);

                        /** MenuItem reuse */
                        reuse?: (boolean|null);
                    }

                    /** Represents a MenuItem. */
                    class MenuItem implements IMenuItem {

                        /**
                         * Constructs a new MenuItem.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: com.xueershangda.tianxun.employee.model.IMenuItem);

                        /** MenuItem id. */
                        public id: string;

                        /** MenuItem text. */
                        public text: string;

                        /** MenuItem i18n. */
                        public i18n: string;

                        /** MenuItem link. */
                        public link: string;

                        /** MenuItem shortcut. */
                        public shortcut: boolean;

                        /** MenuItem reuse. */
                        public reuse: boolean;

                        /**
                         * Creates a new MenuItem instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns MenuItem instance
                         */
                        public static create(properties?: com.xueershangda.tianxun.employee.model.IMenuItem): com.xueershangda.tianxun.employee.model.MenuItem;

                        /**
                         * Encodes the specified MenuItem message. Does not implicitly {@link com.xueershangda.tianxun.employee.model.MenuItem.verify|verify} messages.
                         * @param message MenuItem message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: com.xueershangda.tianxun.employee.model.IMenuItem, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified MenuItem message, length delimited. Does not implicitly {@link com.xueershangda.tianxun.employee.model.MenuItem.verify|verify} messages.
                         * @param message MenuItem message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: com.xueershangda.tianxun.employee.model.IMenuItem, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a MenuItem message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns MenuItem
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.xueershangda.tianxun.employee.model.MenuItem;

                        /**
                         * Decodes a MenuItem message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns MenuItem
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.xueershangda.tianxun.employee.model.MenuItem;

                        /**
                         * Verifies a MenuItem message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a MenuItem message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns MenuItem
                         */
                        public static fromObject(object: { [k: string]: any }): com.xueershangda.tianxun.employee.model.MenuItem;

                        /**
                         * Creates a plain object from a MenuItem message. Also converts values to other types if specified.
                         * @param message MenuItem
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: com.xueershangda.tianxun.employee.model.MenuItem, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this MenuItem to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of a LoginReply. */
                    interface ILoginReply {

                        /** LoginReply app */
                        app?: (com.xueershangda.tianxun.employee.model.IApp|null);

                        /** LoginReply user */
                        user?: (com.xueershangda.tianxun.employee.model.IEmployee|null);

                        /** LoginReply menu */
                        menu?: (com.xueershangda.tianxun.employee.model.IMenu[]|null);

                        /** LoginReply code */
                        code?: (number|null);

                        /** LoginReply message */
                        message?: (string|null);
                    }

                    /** Represents a LoginReply. */
                    class LoginReply implements ILoginReply {

                        /**
                         * Constructs a new LoginReply.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: com.xueershangda.tianxun.employee.model.ILoginReply);

                        /** LoginReply app. */
                        public app?: (com.xueershangda.tianxun.employee.model.IApp|null);

                        /** LoginReply user. */
                        public user?: (com.xueershangda.tianxun.employee.model.IEmployee|null);

                        /** LoginReply menu. */
                        public menu: com.xueershangda.tianxun.employee.model.IMenu[];

                        /** LoginReply code. */
                        public code: number;

                        /** LoginReply message. */
                        public message: string;

                        /**
                         * Creates a new LoginReply instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns LoginReply instance
                         */
                        public static create(properties?: com.xueershangda.tianxun.employee.model.ILoginReply): com.xueershangda.tianxun.employee.model.LoginReply;

                        /**
                         * Encodes the specified LoginReply message. Does not implicitly {@link com.xueershangda.tianxun.employee.model.LoginReply.verify|verify} messages.
                         * @param message LoginReply message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: com.xueershangda.tianxun.employee.model.ILoginReply, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified LoginReply message, length delimited. Does not implicitly {@link com.xueershangda.tianxun.employee.model.LoginReply.verify|verify} messages.
                         * @param message LoginReply message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: com.xueershangda.tianxun.employee.model.ILoginReply, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a LoginReply message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns LoginReply
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.xueershangda.tianxun.employee.model.LoginReply;

                        /**
                         * Decodes a LoginReply message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns LoginReply
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.xueershangda.tianxun.employee.model.LoginReply;

                        /**
                         * Verifies a LoginReply message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a LoginReply message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns LoginReply
                         */
                        public static fromObject(object: { [k: string]: any }): com.xueershangda.tianxun.employee.model.LoginReply;

                        /**
                         * Creates a plain object from a LoginReply message. Also converts values to other types if specified.
                         * @param message LoginReply
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: com.xueershangda.tianxun.employee.model.LoginReply, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this LoginReply to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }
                }
            }
        }
    }

    /** Namespace vteba. */
    namespace vteba {

        /** Namespace web. */
        namespace web {

            /** Namespace action. */
            namespace action {

                /** Properties of a JsonBean. */
                interface IJsonBean {

                    /** JsonBean code */
                    code?: (number|null);

                    /** JsonBean message */
                    message?: (string|null);

                    /** JsonBean data */
                    data?: (google.protobuf.IAny|null);
                }

                /** Represents a JsonBean. */
                class JsonBean implements IJsonBean {

                    /**
                     * Constructs a new JsonBean.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: com.vteba.web.action.IJsonBean);

                    /** JsonBean code. */
                    public code: number;

                    /** JsonBean message. */
                    public message: string;

                    /** JsonBean data. */
                    public data?: (google.protobuf.IAny|null);

                    /**
                     * Creates a new JsonBean instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns JsonBean instance
                     */
                    public static create(properties?: com.vteba.web.action.IJsonBean): com.vteba.web.action.JsonBean;

                    /**
                     * Encodes the specified JsonBean message. Does not implicitly {@link com.vteba.web.action.JsonBean.verify|verify} messages.
                     * @param message JsonBean message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: com.vteba.web.action.IJsonBean, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified JsonBean message, length delimited. Does not implicitly {@link com.vteba.web.action.JsonBean.verify|verify} messages.
                     * @param message JsonBean message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: com.vteba.web.action.IJsonBean, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a JsonBean message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns JsonBean
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.vteba.web.action.JsonBean;

                    /**
                     * Decodes a JsonBean message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns JsonBean
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.vteba.web.action.JsonBean;

                    /**
                     * Verifies a JsonBean message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a JsonBean message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns JsonBean
                     */
                    public static fromObject(object: { [k: string]: any }): com.vteba.web.action.JsonBean;

                    /**
                     * Creates a plain object from a JsonBean message. Also converts values to other types if specified.
                     * @param message JsonBean
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: com.vteba.web.action.JsonBean, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this JsonBean to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }
            }
        }
    }
}

/** Namespace google. */
export namespace google {

    /** Namespace protobuf. */
    namespace protobuf {

        /** Properties of an Any. */
        interface IAny {

            /** Any type_url */
            type_url?: (string|null);

            /** Any value */
            value?: (Uint8Array|null);
        }

        /** Represents an Any. */
        class Any implements IAny {

            /**
             * Constructs a new Any.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IAny);

            /** Any type_url. */
            public type_url: string;

            /** Any value. */
            public value: Uint8Array;

            /**
             * Creates a new Any instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Any instance
             */
            public static create(properties?: google.protobuf.IAny): google.protobuf.Any;

            /**
             * Encodes the specified Any message. Does not implicitly {@link google.protobuf.Any.verify|verify} messages.
             * @param message Any message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IAny, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Any message, length delimited. Does not implicitly {@link google.protobuf.Any.verify|verify} messages.
             * @param message Any message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IAny, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an Any message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Any
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.Any;

            /**
             * Decodes an Any message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Any
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.Any;

            /**
             * Verifies an Any message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an Any message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Any
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.Any;

            /**
             * Creates a plain object from an Any message. Also converts values to other types if specified.
             * @param message Any
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.Any, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Any to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }
    }
}
