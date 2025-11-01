export function priceFormatStr(unitPrice: number): string {
  return `$${unitPrice}.00`
}

export function totalPriceFormatStr(unitPrice: number): string {
  return `Total: $${unitPrice}.00`
}

export function unitPriceFormatStr(unitPrice: number, unitsNumber: number): string {
  return `$${unitPrice * unitsNumber}.00`
}