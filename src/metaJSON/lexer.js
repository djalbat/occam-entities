"use strict";

import { WhitespaceToken,
         EndOfLineNonSignificantToken,
         DoublyQuotedStringLiteralToken } from "occam-lexers";

import entries from "./entries";
import CommonLexer from "../common/lexer";

export default class MetaJSONLexer extends CommonLexer {
  static entries = entries;

  static EndOfLineToken = EndOfLineNonSignificantToken; ///

  static WhitespaceToken = WhitespaceToken;

  static EndOfLineCommentToken = null;

  static RegularExpressionToken = null;

  static SingleLineCommentToken = null;

  static EndOfMultiLineCommentToken = null;

  static StartOfMultiLineCommentToken = null;

  static MiddleOfMultiLineCommentToken = null;

  static SinglyQuotedStringLiteralToken = null;

  static DoublyQuotedStringLiteralToken = DoublyQuotedStringLiteralToken;

  static fromNothing() { return CommonLexer.fromNothing(MetaJSONLexer); }

  static fromRules(rules) { return CommonLexer.fromRules(MetaJSONLexer, rules); }

  static fromEntries(entries) { return CommonLexer.fromEntries(MetaJSONLexer, entries); }
}
