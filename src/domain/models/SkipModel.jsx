export class SkipModel {
  constructor(data) {
    Object.assign(this, data);
  }

  getTotalPrice() {
    return this.price_before_vat * (1 + this.vat / 100);
  }

  isAllowed() {
    return this.allowed_on_road && this.allows_heavy_waste;
  }
}
    