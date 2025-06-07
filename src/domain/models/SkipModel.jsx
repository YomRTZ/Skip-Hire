export class SkipModel {
  constructor(data) {
    Object.assign(this, data);
  }

  getTotalPrice() {
    return this.price_before_vat * (1 + this.vat / 100);
  }

  isAllowed() {
  const roadStatus = this.allowed_on_road ? "Allowed on road" : "Not allowed on road";
  const heavyWasteStatus = this.allows_heavy_waste ? "Heavy waste allowed" : "Not for heavy waste";

  return {
    roadStatus,
    heavyWasteStatus,
    isAllowed: this.allowed_on_road && this.allows_heavy_waste,
  };
}
}
    