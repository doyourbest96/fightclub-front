export function toBigInt(value : string) : bigint {
  const [integerPart, fractionalPart] = value.split(".");
  const numDecimals = fractionalPart ? fractionalPart.length : 0;
  const integerValue = integerPart + (fractionalPart || "");
  return BigInt(integerValue) * 10n ** BigInt(18 - numDecimals);
}
